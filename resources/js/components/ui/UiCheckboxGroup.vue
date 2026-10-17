<!--
  UiCheckboxGroup - pick many from a list (themed pills).

  <ui-checkbox-group v-model="form.payment_methods" :options="[{ value: 'visa', label: 'Visa' }]" />
  <ui-checkbox-group v-model="form.facility_ids" :options="items" value-key="id" label-key="name" />
-->
<template>
    <div class="cl-check-group">
        <label
            v-for="option in options"
            :key="option[valueKey]"
            class="cl-check-pill"
            :class="{ 'is-checked': isChecked(option[valueKey]) }"
        >
            <input type="checkbox" :checked="isChecked(option[valueKey])" @change="toggle(option[valueKey])">
            <i class="fas fa-check cl-check-pill__icon"></i>
            {{ option[labelKey] }}
        </label>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: { type: Array, default: () => [] },
    options: { type: Array, default: () => [] },
    valueKey: { type: String, default: 'value' },
    labelKey: { type: String, default: 'label' },
});
const emit = defineEmits(['update:modelValue']);

const isChecked = (value) => props.modelValue.includes(value);

const toggle = (value) => {
    emit('update:modelValue', isChecked(value)
        ? props.modelValue.filter((v) => v !== value)
        : [...props.modelValue, value]);
};
</script>
