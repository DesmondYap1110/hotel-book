<style lang="scss" scoped>

.datatable__clickable{
	cursor: pointer;
}

.datatable__select{
    line-height: 40px;
}

.datatable__select__actions{
    float: right;
}

.datatable__select__actions__range{
    align-items: center;
    display: flex;
}

.datatable__select__actions__range__pagination{
    min-height: 40px;
    margin: 0 10px;
    text-align: center;
}

.datatable__btn{
    background-color: transparent;
    color: blue;
    margin: 0.25rem;
    outline: 0;
    padding: 0;
    text-align: center;
    height: 30px;
    width: 30px;
    vertical-align: middle;
    transition: all .2s ease-in-out;
}

.datatable__dir_btn{
	font-size: 11px;
	line-height: 1rem;
}

.datatable__number_btn:hover,
.datatable__number_btn:focus,
.datatable__select__actions .active{
	border-bottom: 2px solid blue;
	border-radius: 0px;
    font-weight: 700;
	color: blue;
}

.datatable__btn:hover:enabled{
    font-weight: 700;
}

.datatable__dir_btn:hover:enabled{
    transform: scale(1.3);
    color: blue;
}

.datatable__expandable__column {
	width: 2px;
}


.pagination_dotted{
	color: blue;
}

.pagination_dotted + .pagination_dotted{
	display:none;
}
</style>

s fa-sort
<template>

    <div>
        <div class="position-relative table-responsive">

            <table class="table" :class="tableClass">
                <thead>
	                <tr style="vertical-align: top">
	                    <slot name="headers">
	                        <th v-if="checkExpandable" class="datatable__expandable__column"></th>
	                        <th v-if="numbering" class="text-center">No.</th>
	                        <th v-for="(column,index) in columns" :class="getHeaderClass(column)" @click="sortItem(column.field, index, column.type)">
	                            {{ column.name }}
	                            <span v-if="checkSortable(column)">
	                                <i class="fas fa-sort-amount-down" v-if="(column.field == sortableColumn.field) && (sortableColumn.type == 'desc')"></i>
	                                <i class="fas fa-sort-amount-up" v-else-if="(column.field == sortableColumn.field) && (sortableColumn.type == 'asc')"></i>
	                                <i class="fas fa-sort" v-else></i>
	                            </span>
	                        </th>
	                    </slot>
	                </tr>
                </thead>

                <tbody v-if="rows" class="col-12 overlay-wrapper">
                	<span class="overlay" v-if="loading" style="top: inherit">
			           	<img src="/images/loading1.gif" width="50px" height="50px">
			           	<span class="sr-only">Loading...</span>
			        </span>

	                <template v-for="(row, index) in rows">
	                	<tr v-if="validateChildren(row, index)">
	                		<td v-if="checkExpandable" class="datatable__expandable__column"></td>
	                        <td width="5%" v-if="numbering" class="text-center">{{ index_start_from + index }}</td>
		                    <slot name="items" :item="row" :index="index">
		                    	<td v-for="(column, columnIndex) in columns" :class="getRowClass(column)">
		                    		{{ row[column.field] ? row[column.field] : "" }}
		                    	</td>
		                    </slot>
		                </tr>

		                <template v-else>
			                <tr @click="expand(index)">
			                	<td class="datatable__expandable__column" v-if="expandableRow[index] && checkExpandable"> <i class="fa fa-angle-down"></i> </td>
			                	<td class="datatable__expandable__column" v-else-if="!expandableRow[index] && checkExpandable"> <i class="fa fa-angle-right"></i> </td>
			                    <slot name="items" :item="row">
				                    <td v-for="(column, columnIndex) in columns">
			                    		{{ row[column.field] ? row[column.field] : "" }}
			                    	</td>
			                    </slot>
			                </tr>
		                	<tr v-for="(row, rowIndex) in row[children]" v-if="expandableRow[index]" class="datatable__expand">
		                		<td class="datatable__expandable__column"></td>
			                    <slot name="items" :item="row">
				                    <td v-for="(column, columnIndex) in columns">
			                    		{{ row[column.field] ? row[column.field] : "" }}
			                    	</td>
			                    </slot>
			                </tr>
		                </template>
	                </template>

	                <tr v-if="rows.length < 1">
	                    <td :colspan="numbering ? columns.length + 1 : columns.length" style="text-align: center;">No data found.</td>
	                </tr>
                </tbody>
            </table>
        </div>

        <div class="datatable__select row ml-2 mt-3 no-print" v-if="paginate">
            <div class="datatable__select__actions">
                <div class="datatable__select__actions__range">

                    <button class="btn datatable__btn datatable__dir_btn" @click="goPrev()" type="button" :disabled="checkPrev || is_loading">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>

					<div v-if="pagination.meta && pagination.meta.last_page > 1">
	                    <button class="btn datatable__btn datatable__number_btn"
	                    	v-for="index in pagination.meta.last_page"
                            @change="visiblePagination(index)"
	                    	@click="goToPage(index)"
	                    	:class="{'active' : index == meta.current_page }"
	                    	:disabled="index == meta.current_page">
	                    	{{ index }}
	                    </button>
                    </div>

                    <button class="btn datatable__btn datatable__dir_btn" @click="goNext()" type="button" :disabled="checkNext || is_loading">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>

                    <div class="datatable__select__actions__range__pagination" v-if="meta">
                        <small class="text-muted">Showing {{ meta.from | numberFormat }} - {{ meta.to | numberFormat }} of {{ meta.total | numberFormat }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import axios from 'axios';
import qs from 'qs';
import _ from 'lodash'; // Import lodash

const origin = window.location.origin;

// Props
const props = defineProps({
    children: {
        type: String,
        default: 'children'
    },
    columns: {
        type: Array,
        default: () => []
    },
    expandable: {
        type: Boolean,
        default: false
    },
    items: {
        type: Array,
        default: () => []
    },
    numbering: {
        type: Boolean,
        default: false
    },
    paginate: {
        type: Boolean,
        default: false
    },
    pagination: {
        type: Object,
        default: () => ({})
    },
    paginationData: {
        type: Object,
        default: () => ({ page: '' })
    },
    paginationMethod: {
        type: String,
        default: 'get'
    },
    paginationRange: {
        type: Number,
        default: 3
    },
    tableClass: {
        type: String,
        default: 'table-striped table-hover'
    },
    loading: {
        type: Boolean,
        default: false
    }
});

// Reactive properties
const expandableRow = ref([]);
const paginationData = ref({});
const is_loading = ref(false);
const links = ref({});
const meta = ref({});
const rows = ref([]);
const columns = ref([]);
const index_start_from = ref(1);
const sortableColumn = ref({
    field: '',
    type: 'default'
});

watch(() => props.items, (newItems) => {
  rows.value = newItems;
});

// Watch for changes in the props.pagination and update meta and links
watch(
  () => props.pagination,
  (newPagination) => {
    meta.value = newPagination.meta;
    links.value = newPagination.links;
  },
  { deep: true } // Perform deep comparison
);

onMounted(() => {
  // ... other initialization ...
  columns.value = props.columns;
  paginationData.value = props.paginationData;

});


// Computed properties
const checkPrev = computed(() => {
    if (meta.value) {
        return !links.value.prev;
    }
    return true;
});

const checkNext = computed(() => {
    if (meta.value) {
        return !links.value.next;
    }
    return true;
});

// Methods
const toggleLoading = () => {
    is_loading.value = !is_loading.value;
};

const goToPage = (pageNumber) => {
    toggleLoading();
    paginationData.page = pageNumber;

    axios[props.paginationMethod](meta.value.path, {
        params: paginationData,
        paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: 'brackets' });
        },
    })
    .then((response) => {
        rows.value = response.data.data;
        links.value = response.data.links;
        meta.value = response.data.meta;
        initExpandableRow();
        initSortableColumn();
        if (props.numbering) {
            index_start_from.value = meta.value.from;
        }
    })
    .finally(() => {
        toggleLoading();
        paginationData.page = '';
    });
};

const goPrev = () => {
    goToPage(meta.value.current_page - 1);
};

const goNext = () => {
    goToPage(meta.value.current_page + 1);
};

const validateChildren = (row, key) => {
    if (props.expandable) {
        if (row[props.children]) {
            if (row[props.children].length > 0) {
                return false;
            }
        }
    }
    return true;
};

const expand = (key) => {
    expandableRow[key] = !expandableRow[key];
};

const initExpandableRow = () => {
    expandableRow.length = 0;
    let validation = false;
    if (props.expandable) {
        for (let i = 0; i < rows.value.length; i++) {
            expandableRow.push(false);
            if (rows.value[i][props.children]) {
                if (rows.value[i][props.children].length > 0) {
                    validation = true;
                }
            }
        }
        props.expandable = validation;
    }
};

const initSortableColumn = () => {
    sortableColumn.field = '';
    sortableColumn.type = 'default';
};

const getHeaderClass = (column) => {
    let className = '';
    if (column.align) {
        className += `text-${column.align}`;
    }
    if (column.sortable) {
        className += ' datatable__clickable';
    }
    return className;
};

const getRowClass = (column) => {
    let className = '';
    if (column.align) {
        className += `text-${column.align}`;
    }
    return className;
};

const sortItem = (field, index, type) => {
    if (!checkSortable(columns.value[index])) {
        return '';
    }
    sortableColumn.value.field = field;
    sortableColumn.value.type = sortableColumn.value.type == 'asc' ? 'desc' : 'asc';
    if (sortableColumn.value.type != 'default') {
        rows.value = _.orderBy(rows.value, field, [sortableColumn.value.type]);
    }
    initExpandableRow();
};

const checkSortable = (column) => {
    if (column.hasOwnProperty('sortable')) {
        if (column.sortable) {
            return true;
        }
    }
    return false;
};

const visiblePagination = (index) => {
    console.log('index',parseInt(index));
    if (index) {
        if (
            index == 1 ||
            index == meta.value.last_page ||
            Math.abs(index - meta.value.current_page) <= props.paginationRange
        ) {
            return true;
        }
    }
    return false;
};
</script>

