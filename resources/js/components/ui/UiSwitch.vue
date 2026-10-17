<!--
  UiSwitch - on/off toggle.

  Boolean:   <ui-switch v-model="form.parking_available" text="On-site parking available" />
  Values:    <ui-switch v-model="form.status" on-value="active" off-value="inactive"
                        on-text="Active" off-text="Inactive" label="Status" />
-->
<template>
    <div class="cl-field cl-switch-field">
        <span v-if="label" class="cl-field__label">{{ label }}</span>

        <label class="cl-switch" :class="{ 'is-on': isOn, 'is-disabled': disabled }">
            <input
                type="checkbox"
                role="switch"
                :checked="isOn"
                :aria-checked="isOn"
                :disabled="disabled"
                @change="$emit('update:modelValue', $event.target.checked ? onValue : offValue)"
            >
            <span class="cl-switch__track"><span class="cl-switch__thumb"></span></span>
            <span v-if="onText || offText || text" class="cl-switch__text">{{ text || (isOn ? onText : offText) }}</span>
        </label>

        <div v-if="hint && !error" class="cl-field__hint">{{ hint }}</div>
        <div v-if="error" class="cl-field__error">{{ error }}</div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: { default: false },
    onValue: { default: true },
    offValue: { default: false },
    label: { type: String, default: '' },  // above the switch
    text: { type: String, default: '' },   // fixed text beside the switch
    onText: { type: String, default: '' },  // beside the switch when on
    offText: { type: String, default: '' }, // beside the switch when off
    hint: { type: String, default: '' },
    error: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
});
defineEmits(['update:modelValue']);

const isOn = computed(() => props.modelValue === props.onValue);
</script>
