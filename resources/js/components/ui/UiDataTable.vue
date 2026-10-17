<!--
  UiDataTable - "Show N entries", search, sort, filters, pagination.

  ── Server mode (recommended) ─────────────────────────────────────────
  Write a PHP list class, pass Datatable::props('my-list') from the controller
  as a page prop, then:  <ui-data-table :server="table" />
  The table fetches each page from the server.
  See docs/datatables.md.

  ── Client mode (small, already-loaded arrays) ─────────────────────────
  <ui-data-table :columns="columns" :rows="rows">
      <template #cell-name="{ row }"> custom cell </template>
  </ui-data-table>

  Column: { key, label, sortable, searchable, align: 'center'|'right', width,
            type: 'text' | 'html' | 'image' | 'badge' | 'actions' }
  Any column can be overridden with a #cell-<key> slot.

  Events: @loaded(rows), @deleted(action)
-->
<template>
    <div class="cl-table">
        <ui-table-filters v-if="cfg.filters.length" :filters="cfg.filters" v-model="filterValues" />

        <!-- toolbar -->
        <div class="cl-table__toolbar">
            <div class="cl-table__length">
                Show
                <ui-select v-model="perPage" :options="cfg.perPageOptions" size="sm" />
                entries
            </div>

            <label v-if="cfg.searchable" class="cl-table__search">
                Search:
                <input v-model.trim="search" type="search" class="cl-table__search-input">
            </label>
        </div>

        <!-- table -->
        <div class="cl-table__wrap" :class="{ 'is-loading': loading && pageRows.length }">
            <table class="cl-table__table">
                <thead>
                    <tr>
                        <th
                            v-for="col in cfg.columns"
                            :key="col.key"
                            :style="col.width ? { width: col.width } : null"
                            :class="[alignClass(col), { 'cl-table__th--sortable': col.sortable }]"
                            @click="col.sortable && toggleSort(col.key)"
                        >
                            {{ col.label }}
                            <i v-if="col.sortable" class="cl-table__sort fas"
                               :class="[sortIcon(col.key), { 'is-active': sortKey === col.key }]"></i>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-if="loading && !pageRows.length">
                        <td :colspan="cfg.columns.length" class="cl-table__empty"><span class="cl-spinner"></span></td>
                    </tr>

                    <tr v-else-if="!pageRows.length">
                        <td :colspan="cfg.columns.length" class="cl-table__empty">{{ error || emptyText }}</td>
                    </tr>

                    <tr v-else v-for="(row, index) in pageRows" :key="row[rowKey] ?? index">
                        <td v-for="col in cfg.columns" :key="col.key" :class="[alignClass(col), { 'is-actions': col.type === 'actions' }]" :data-label="col.label">
                            <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]" :index="fromRow + index">
                                <ui-table-cell :column="col" :value="row[col.key]" @action="runAction" />
                            </slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- footer -->
        <div class="cl-table__footer">
            <span>Showing {{ fromRow }} to {{ toRow }} of {{ total }} entries</span>
            <ui-pagination v-model:page="page" :total-pages="lastPage" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import axios from 'axios';
import { router } from '@inertiajs/vue3';
import Swal from 'sweetalert2';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import UiPagination from './UiPagination.vue';
import UiTableFilters from './UiTableFilters.vue';
import UiTableCell from './UiTableCell.vue';
import UiSelect from './UiSelect.vue';

const props = defineProps({
    // server mode: config from App\Datatables\Core\Datatable::config()
    server: { type: Object, default: null },
    // client mode
    columns: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] },
    searchable: { type: Boolean, default: true },
    pageSizes: { type: Array, default: () => [10, 25, 50, 100] },
    defaultPerPage: { type: Number, default: 10 },
    // both
    rowKey: { type: String, default: 'id' },
    loading: { type: Boolean, default: false },
    emptyText: { type: String, default: 'No data found.' },
});

const emit = defineEmits(['loaded', 'deleted']);

const isServer = !!props.server;

// one config shape for both modes
const cfg = computed(() => (isServer
    ? props.server
    : {
        columns: props.columns,
        filters: [],
        searchable: props.searchable,
        perPageOptions: props.pageSizes,
    }));

// ---- state shared by both modes ----
const search = ref('');
const perPage = ref(isServer ? props.server.perPage : props.defaultPerPage);
const page = ref(1);
const sortKey = ref(props.server?.sort?.key ?? '');
const sortDir = ref(props.server?.sort?.dir ?? 'asc');
const filterValues = ref({});

// ---- server mode ----
const serverRows = ref([]);
const serverMeta = ref({ total: 0, from: 0, to: 0, last_page: 1 });
const serverLoading = ref(false);
const error = ref('');
let requestId = 0;

const fetchRows = async () => {
    const id = ++requestId;
    serverLoading.value = true;
    error.value = '';
    try {
        const params = {
            page: page.value,
            per_page: perPage.value,
            search: search.value || undefined,
            sort: sortKey.value || undefined,
            dir: sortKey.value ? sortDir.value : undefined,
        };
        // send filters as filters[name]=value (what Laravel expects)
        Object.entries(filterValues.value).forEach(([name, value]) => {
            if (value !== '') params[`filters[${name}]`] = value;
        });

        const { data } = await axios.get(props.server.source, { params });
        if (id !== requestId) return; // a newer request is on its way
        serverRows.value = data.data;
        serverMeta.value = data.meta;
        if (page.value > data.meta.last_page) page.value = data.meta.last_page;
        emit('loaded', data.data);
    } catch (e) {
        if (id === requestId) error.value = 'Could not load data. Please refresh the page.';
    } finally {
        if (id === requestId) serverLoading.value = false;
    }
};

// ---- client mode ----
const clientFiltered = computed(() => {
    const term = search.value.toLowerCase();
    if (!term) return props.rows;
    const keys = props.columns.filter((c) => c.searchable !== false && c.type !== 'actions').map((c) => c.key);
    return props.rows.filter((row) => keys.some((key) => String(row[key] ?? '').toLowerCase().includes(term)));
});

const clientSorted = computed(() => {
    if (!sortKey.value) return clientFiltered.value;
    const dir = sortDir.value === 'asc' ? 1 : -1;
    return [...clientFiltered.value].sort((a, b) => {
        const x = a[sortKey.value] ?? '';
        const y = b[sortKey.value] ?? '';
        if (typeof x === 'number' && typeof y === 'number') return (x - y) * dir;
        return String(x).localeCompare(String(y), undefined, { numeric: true }) * dir;
    });
});

// ---- what the template shows ----
const total = computed(() => (isServer ? serverMeta.value.total : clientSorted.value.length));
const lastPage = computed(() => (isServer ? serverMeta.value.last_page : Math.max(1, Math.ceil(total.value / perPage.value))));
const pageRows = computed(() => {
    if (isServer) return serverRows.value;
    const start = (page.value - 1) * perPage.value;
    return clientSorted.value.slice(start, start + perPage.value);
});
const fromRow = computed(() => (isServer ? serverMeta.value.from : (total.value ? (page.value - 1) * perPage.value + 1 : 0)));
const toRow = computed(() => (isServer ? serverMeta.value.to : Math.min(page.value * perPage.value, total.value)));
const loading = computed(() => props.loading || serverLoading.value);

// ---- reacting to the user ----

// Search / page size / filters changed: start again from page 1.
// (Changing the page already triggers a fetch, so only fetch here if we are on page 1.)
const restartFromFirstPage = () => {
    if (page.value !== 1) {
        page.value = 1;
    } else if (isServer) {
        fetchRows();
    }
};

let searchTimer = null;
watch(search, () => {
    clearTimeout(searchTimer);
    // wait until the user stops typing before asking the server
    searchTimer = setTimeout(restartFromFirstPage, isServer ? 350 : 0);
});
watch([perPage, filterValues], restartFromFirstPage, { deep: true });
watch(page, () => { if (isServer) fetchRows(); });
watch(lastPage, (last) => { if (!isServer && page.value > last) page.value = last; });

onMounted(() => isServer && fetchRows());

const toggleSort = (key) => {
    if (sortKey.value === key) {
        sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortKey.value = key;
        sortDir.value = 'asc';
    }
    if (isServer) fetchRows();
};

const sortIcon = (key) => {
    if (sortKey.value !== key) return 'fa-sort';
    return sortDir.value === 'asc' ? 'fa-sort-up' : 'fa-sort-down';
};

const alignClass = (col) => (col.align ? `is-${col.align}` : '');

// ---- row buttons from App\Datatables\Actions ----
const runAction = async (action) => {
    if (action.type === 'link') {
        router.visit(action.url); // Inertia: no full page reload
        return;
    }

    if (action.type === 'delete') {
        const result = await Swal.fire({
            title: action.confirm || 'Delete this item?',
            text: 'This cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it',
            confirmButtonColor: getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim(),
            cancelButtonColor: '#6c757d',
        });
        if (!result.isConfirmed) return;

        try {
            await axios.delete(action.url, { headers: { Accept: 'application/json' } });
            toast.success('Deleted successfully.', { theme: 'colored', position: toast.POSITION.BOTTOM_RIGHT, autoClose: 1500 });
            emit('deleted', action);
            if (isServer) fetchRows();
        } catch (e) {
            toast.error('Could not delete. Please try again.', { theme: 'colored', position: toast.POSITION.BOTTOM_RIGHT });
        }
    }
};

// let parents reload the table: <ui-data-table ref="table"> ... table.value.reload()
defineExpose({ reload: () => isServer && fetchRows() });
</script>
