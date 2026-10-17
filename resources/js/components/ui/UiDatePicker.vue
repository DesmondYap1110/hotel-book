<!--
  UiDatePicker - date / time picker (Flatpickr), themed.

  <ui-date-picker v-model="form.check_in_time"  mode="time"     label="Check-in from" />   value "15:00"     shows "3:00 PM"
  <ui-date-picker v-model="form.arrival"        mode="date"     label="Arrival" />         value "2026-10-17" shows "17 Oct 2026"
  <ui-date-picker v-model="form.starts_at"      mode="datetime" label="Starts" />          value "2026-10-17 15:00"
  <ui-date-picker v-model="form.stay"           mode="range"    label="Stay" />            value "2026-10-17 to 2026-10-20"

  The value is always in the format Laravel validates (date_format:H:i, Y-m-d ...);
  only what the user sees is friendly. Optional: min-date, max-date, minute-step.
-->
<template>
    <div class="cl-field" :class="$attrs.class" :style="$attrs.style">
        <label v-if="label" class="cl-field__label" :for="id">{{ label }}</label>

        <div class="cl-picker" :class="{ 'is-invalid': error, 'has-value': !!modelValue }">
            <input :id="id" ref="el" type="text" :placeholder="placeholder || defaults.placeholder" :disabled="disabled">
            <i class="cl-picker__icon far" :class="mode === 'time' ? 'fa-clock' : 'fa-calendar-alt'"></i>
            <button v-if="clearable && modelValue && !disabled" type="button" class="cl-picker__clear"
                    aria-label="Clear" @click="clear"><i class="fas fa-times"></i></button>
        </div>

        <div v-if="hint && !error" class="cl-field__hint">{{ hint }}</div>
        <div v-if="error" class="cl-field__error">{{ error }}</div>
    </div>
</template>

<script>
export default { inheritAttrs: false };
</script>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const props = defineProps({
    modelValue: { type: String, default: '' },
    mode: { type: String, default: 'date' },     // date | time | datetime | range
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    error: { type: String, default: '' },
    hint: { type: String, default: '' },
    minDate: { type: String, default: null },
    maxDate: { type: String, default: null },
    minuteStep: { type: Number, default: 15 },
    clearable: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    id: { type: String, default: () => `picker-${Math.random().toString(36).slice(2, 8)}` },
});
const emit = defineEmits(['update:modelValue']);

// value format (sent to Laravel) and display format (what the user sees)
const MODES = {
    date:     { dateFormat: 'Y-m-d',     altFormat: 'j M Y',         placeholder: 'Select date' },
    time:     { dateFormat: 'H:i',       altFormat: 'h:i K',         placeholder: 'Select time', enableTime: true, noCalendar: true },
    datetime: { dateFormat: 'Y-m-d H:i', altFormat: 'j M Y, h:i K',  placeholder: 'Select date & time', enableTime: true },
    range:    { dateFormat: 'Y-m-d',     altFormat: 'j M Y',         placeholder: 'Select dates', mode: 'range' },
};
const defaults = computed(() => MODES[props.mode] ?? MODES.date);

const el = ref(null);
let picker = null;

onMounted(() => {
    const { placeholder, ...modeOptions } = defaults.value;

    picker = flatpickr(el.value, {
        ...modeOptions,
        altInput: true,                     // show the friendly format...
        altInputClass: 'cl-input cl-picker__input',
        defaultDate: props.modelValue || null,
        minDate: props.minDate,
        maxDate: props.maxDate,
        minuteIncrement: props.minuteStep,
        time_24hr: false,
        disableMobile: true,                // same themed picker on phones
        onChange: (dates, valueString) => emit('update:modelValue', valueString), // ...send the Laravel format
    });
    picker.altInput.placeholder = props.placeholder || placeholder;
});

// value changed by the parent (form reset, data loaded later)
watch(() => props.modelValue, (value) => {
    if (picker && value !== picker.input.value) picker.setDate(value || null, false);
});

const clear = () => {
    picker?.clear();
    emit('update:modelValue', '');
};

onBeforeUnmount(() => picker?.destroy());
</script>
