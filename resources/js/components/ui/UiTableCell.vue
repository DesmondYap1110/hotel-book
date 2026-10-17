<!--
  UiTableCell - draws one cell based on column.type.
  Used by UiDataTable; you rarely need it directly.

  text    -> plain text (safe)
  image   -> <img> from a URL
  badge   -> pill(s) from { label, variant } or an array of them
  actions -> round buttons from App\Datatables\Core\Actions (emits "action")
  html    -> trusted HTML from the server
-->
<template>
    <img v-if="column.type === 'image'" :src="value" class="cl-table__img" alt="" loading="lazy">

    <span v-else-if="column.type === 'badge'" class="cl-table__group">
        <span v-for="(badge, i) in badges" :key="i" class="cl-badge" :class="`cl-badge--${badge.variant || 'muted'}`">
            {{ badge.label }}
        </span>
        <span v-if="!badges.length" class="cl-table__dash">-</span>
    </span>

    <span v-else-if="column.type === 'actions'" class="cl-table__group">
        <ui-icon-button
            v-for="(action, i) in value || []"
            :key="i"
            :icon="action.icon"
            :title="action.title"
            :variant="action.variant"
            @click="$emit('action', action)"
        />
    </span>

    <span v-else-if="column.type === 'html'" v-html="value"></span>

    <template v-else>{{ value ?? '' }}</template>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    column: { type: Object, required: true },
    value: { default: null },
});
defineEmits(['action']);

const badges = computed(() => {
    if (!props.value) return [];
    return Array.isArray(props.value) ? props.value : [props.value];
});
</script>
