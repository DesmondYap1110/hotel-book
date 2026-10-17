<!--
  UiPagination - Previous | 1 2 3 ... 9 | Next

  <ui-pagination v-model:page="page" :total-pages="totalPages" />
-->
<template>
    <nav class="cl-pagination" aria-label="Pagination">
        <button class="cl-pagination__btn" :disabled="page <= 1" @click="go(page - 1)">Previous</button>

        <template v-for="(item, i) in pages" :key="i">
            <span v-if="item === '...'" class="cl-pagination__gap">&hellip;</span>
            <button
                v-else
                class="cl-pagination__btn"
                :class="{ 'is-active': item === page }"
                @click="go(item)"
            >{{ item }}</button>
        </template>

        <button class="cl-pagination__btn" :disabled="page >= totalPages" @click="go(page + 1)">Next</button>
    </nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    page: { type: Number, default: 1 },
    totalPages: { type: Number, default: 1 },
    // how many page numbers to show around the current page
    range: { type: Number, default: 1 },
});

const emit = defineEmits(['update:page']);

// Build the list of buttons, e.g. [1, '...', 4, 5, 6, '...', 10]
const pages = computed(() => {
    const total = Math.max(props.totalPages, 1);
    const start = Math.max(2, props.page - props.range);
    const end = Math.min(total - 1, props.page + props.range);
    const list = [1];

    if (start > 2) list.push('...');
    for (let p = start; p <= end; p++) list.push(p);
    if (end < total - 1) list.push('...');
    if (total > 1) list.push(total);

    return list;
});

const go = (p) => {
    if (p >= 1 && p <= props.totalPages && p !== props.page) emit('update:page', p);
};
</script>
