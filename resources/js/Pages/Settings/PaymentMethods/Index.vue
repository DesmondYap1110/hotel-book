<!--
  Settings › Payment Methods. Controller: Admin\Settings\PaymentMethodController
  Grouped by category, drag ⋮⋮ to reorder inside a group, switch = enabled for hotels.
  Add / Edit open a modal (MethodModal.vue).
-->
<template>
    <Head title="Payment Methods" />

    <div class="cl-page-head">
        <div>
            <h1 class="cl-page-head__title">Payment Methods</h1>
            <p class="cl-page-head__subtitle">Manage the payment methods available for guests.</p>
        </div>
        <button type="button" class="cl-btn cl-btn--primary" @click="openAdd()"><i class="fas fa-plus"></i> Add Payment Method</button>
    </div>

    <section class="cl-page-card">
        <div class="cl-page-card__body">
            <div class="cl-group-table__wrap">
                <table class="cl-group-table">
                    <thead>
                        <tr>
                            <th style="width: 48px">#</th>
                            <th style="width: 36px"></th>
                            <th>Payment Method</th>
                            <th style="width: 190px">Category</th>
                            <th style="width: 170px">Status</th>
                            <th class="is-center" style="width: 120px">Actions</th>
                        </tr>
                    </thead>

                    <template v-for="cat in categories" :key="cat.key">
                        <!-- group header -->
                        <tbody>
                            <tr class="cl-group-table__group" :class="`is-${cat.color}`">
                                <td colspan="6">
                                    <div class="cl-group-table__group-row">
                                        <i :class="cat.icon"></i>
                                        <span>{{ cat.label }} ({{ groups[cat.key].length }})</span>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="!groups[cat.key].length">
                                <td colspan="6" class="cl-group-table__empty">No payment methods in this group yet.</td>
                            </tr>
                        </tbody>

                        <!-- rows (drag to reorder within the group) -->
                        <draggable
                            v-model="groups[cat.key]"
                            tag="tbody"
                            item-key="id"
                            handle=".cl-group-table__handle"
                            ghost-class="is-ghost"
                            :animation="150"
                            @end="saveOrder(cat.key)"
                        >
                            <template #item="{ element: method }">
                                <tr>
                                    <td class="cl-group-table__num" data-label="#">{{ number(method) }}</td>
                                    <td>
                                        <span class="cl-group-table__handle" title="Drag to reorder"><i class="fas fa-grip-vertical"></i></span>
                                    </td>
                                    <td class="cl-group-table__name" data-label="Payment Method">
                                        <span class="cl-group-table__method">
                                            <img v-if="method.logo_url" :src="method.logo_url" alt="" class="cl-group-table__logo">
                                            {{ method.name }}
                                        </span>
                                    </td>
                                    <td data-label="Category"><span class="cl-cat-badge" :class="`is-${cat.color}`">{{ cat.label }}</span></td>
                                    <td data-label="Status">
                                        <ui-switch :model-value="method.is_enabled" on-text="Enabled" off-text="Disabled"
                                                   :class="{ 'is-enabled-text': method.is_enabled }"
                                                   @update:model-value="toggle(method, $event)" />
                                    </td>
                                    <td class="is-center" data-label="Actions">
                                        <span class="cl-group-table__actions">
                                            <!-- same round buttons as every other table -->
                                            <ui-icon-button icon="fas fa-pen" title="Edit" @click="openEdit(method)" />
                                            <ui-icon-button icon="fas fa-trash" title="Delete" variant="soft-danger" @click="remove(method)" />
                                        </span>
                                    </td>
                                </tr>
                            </template>
                        </draggable>
                    </template>
                </table>
            </div>
        </div>
    </section>

    <!-- add / edit pop-up (re-created each time it opens) -->
    <MethodModal v-if="editing" :key="editing.id ?? 'new'" :method="editing" :categories="categories" @close="editing = null" />
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import draggable from 'vuedraggable';
import MethodModal from './MethodModal.vue';

const props = defineProps({
    methods: Array,     // [{ id, key, name, category, logo_url, is_enabled }] already ordered
    categories: Array,  // [{ key, label, icon, color }]
});

const editBase = '/admin/payment-methods';
const notify = (message, type = 'success') => toast[type](message, { theme: 'colored', position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2500 });

// one list per category (draggable needs a v-model per group)
const groups = reactive({});
const fillGroups = () => props.categories.forEach((c) => { groups[c.key] = props.methods.filter((m) => m.category === c.key); });
fillGroups();
watch(() => props.methods, fillGroups); // after add / edit the server sends the fresh list

// modal: null = closed, {} = add, method = edit
const editing = ref(null);
const openAdd = (category = 'cards') => { editing.value = { category, is_enabled: true }; };
const openEdit = (method) => { editing.value = { ...method }; };

// running number across all groups (1, 2, 3 ...)
const order = computed(() => props.categories.flatMap((c) => groups[c.key]).map((m) => m.id));
const number = (method) => order.value.indexOf(method.id) + 1;

const saveOrder = (category) => {
    axios.post(`${editBase}/reorder`, { ids: groups[category].map((m) => m.id) })
        .then(() => notify('Order saved.'))
        .catch(() => notify('Could not save the order.', 'error'));
};

const toggle = (method, enabled) => {
    method.is_enabled = enabled; // update right away, undo if the server says no
    axios.patch(`${editBase}/${method.id}/toggle`, { is_enabled: enabled })
        .then(() => notify(`${method.name} ${enabled ? 'enabled' : 'disabled'}.`))
        .catch(() => { method.is_enabled = !enabled; notify('Could not change the status.', 'error'); });
};

const remove = async (method) => {
    const result = await Swal.fire({
        title: `Delete ${method.name}?`,
        text: 'This cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it',
        confirmButtonColor: getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim(),
        cancelButtonColor: '#6c757d',
    });
    if (!result.isConfirmed) return;

    try {
        await axios.delete(`${editBase}/${method.id}`, { headers: { Accept: 'application/json' } });
        groups[method.category] = groups[method.category].filter((m) => m.id !== method.id);
        notify(`${method.name} deleted.`);
    } catch (e) {
        notify(e.response?.data?.message || 'Could not delete.', 'error');
    }
};
</script>
