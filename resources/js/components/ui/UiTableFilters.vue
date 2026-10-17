<!--
  UiTableFilters - filter bar above a table. Used by UiDataTable;
  filters come from the list class's filters() in PHP.

  <ui-table-filters :filters="[{ type: 'select', name: 'category', label: 'Category', options: [...] }]"
                    v-model="values" />
-->
<template>
    <div class="cl-table-filters">
        <label v-for="filter in filters" :key="filter.name" class="cl-table-filters__field">
            <span class="cl-table-filters__label">{{ filter.label }}</span>

            <ui-select v-if="filter.type === 'select'" v-model="local[filter.name]"
                       :options="filter.options" placeholder="All" class="cl-table-filters__input" />

            <input v-else :type="filter.type === 'date' ? 'date' : 'text'" v-model.trim="local[filter.name]"
                   class="cl-table__search-input cl-table-filters__input">
        </label>

        <button v-if="hasValue" type="button" class="cl-btn cl-btn--light cl-btn--sm cl-table-filters__reset" @click="reset">
            <i class="fas fa-undo"></i> Reset
        </button>
    </div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue';
import UiSelect from './UiSelect.vue';

const props = defineProps({
    filters: { type: Array, default: () => [] },
    modelValue: { type: Object, default: () => ({}) },
});
const emit = defineEmits(['update:modelValue']);

// one entry per filter, '' = not filtered
const local = reactive(Object.fromEntries(props.filters.map((f) => [f.name, props.modelValue[f.name] ?? ''])));

const hasValue = computed(() => Object.values(local).some((v) => v !== ''));

watch(local, () => emit('update:modelValue', { ...local }), { deep: true });

const reset = () => { Object.keys(local).forEach((key) => { local[key] = ''; }); };
</script>
