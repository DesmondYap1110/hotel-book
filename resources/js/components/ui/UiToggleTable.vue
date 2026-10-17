<!--
  UiToggleTable - "switch items on/off" list in the standard form-table look.
  Rows with a category are grouped under a grey section row (no Category column needed):

      ┌ Payment Methods                  Action ─────┐   <- title (dark)
      │ Cards                                         │   <- section (grey)
      │ Visa                              (o)         │
      │ Online Banking & QR                           │
      │ FPX Online Banking             ( )            │

  <ui-toggle-table v-model="form.payment_methods" :rows="rows" title="Payment Methods" />

  rows: [{ key, name, logo?, category?: { label }, note? }]
        key  = what goes into v-model (id or code)
        note = small grey tag after the name, e.g. 'Disabled'
  v-model: array of selected keys.
-->
<template>
    <table class="cl-form-table cl-toggle-table">
        <thead>
            <tr>
                <th>{{ title }}</th>
                <th class="is-center" style="width: 190px">Action</th>
            </tr>
        </thead>

        <tbody v-for="group in groups" :key="group.label">
            <tr class="cl-toggle-table__section">
                <td colspan="2">{{ group.label }}</td>
            </tr>

            <tr v-for="row in group.rows" :key="row.key" :class="{ 'is-off': !isOn(row.key) }">
                <td :data-label="group.label">
                    <span class="cl-form-table__name">
                        <img v-if="row.logo" :src="row.logo" alt="" class="cl-toggle-table__logo">
                        {{ row.name }}
                        <span v-if="row.note" class="cl-badge cl-badge--muted">{{ row.note }}</span>
                    </span>
                </td>
                <td class="is-center" data-label="Action">
                    <ui-switch :model-value="isOn(row.key)" :on-text="onText" :off-text="offText"
                               :class="{ 'is-enabled-text': isOn(row.key) }"
                               @update:model-value="toggle(row.key, $event)" />
                </td>
            </tr>
        </tbody>

        <tbody v-if="!rows.length">
            <tr><td colspan="2" class="cl-form-table__empty">{{ emptyText }}</td></tr>
        </tbody>
    </table>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] },
    title: { type: String, default: 'Name' },
    onText: { type: String, default: '' },  // just the switch by default (the switch shows on/off)
    offText: { type: String, default: '' }, // off = just the grey switch, no label
    emptyText: { type: String, default: 'Nothing to show.' },
});
const emit = defineEmits(['update:modelValue']);

// group rows by category label, keeping the order they arrive in (no category = one plain group)
const groups = computed(() => {
    const map = new Map();
    props.rows.forEach((row) => {
        const label = row.category?.label ?? props.title;
        if (!map.has(label)) map.set(label, { label, rows: [] });
        map.get(label).rows.push(row);
    });
    return [...map.values()];
});

const isOn = (key) => props.modelValue.includes(key);

const toggle = (key, on) => {
    emit('update:modelValue', on
        ? [...new Set([...props.modelValue, key])]
        : props.modelValue.filter((k) => k !== key));
};
</script>
