<!--
  UiTextarea - label + textarea + error.
  <ui-textarea v-model="form.description" label="Description" :error="form.errors.description" rows="5" />
-->
<template>
    <div class="cl-field" :class="$attrs.class" :style="$attrs.style">
        <label v-if="label" class="cl-field__label" :for="id">{{ label }}</label>
        <textarea
            :id="id"
            v-bind="fieldAttrs"
            :value="modelValue"
            class="cl-input cl-input--textarea"
            :class="{ 'is-invalid': error }"
            @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>
        <div v-if="hint && !error" class="cl-field__hint">{{ hint }}</div>
        <div v-if="error" class="cl-field__error">{{ error }}</div>
    </div>
</template>

<script>
export default { inheritAttrs: false };
</script>

<script setup>
import { computed, useAttrs } from 'vue';

defineProps({
    modelValue: { type: String, default: '' },
    label: { type: String, default: '' },
    error: { type: String, default: '' },
    hint: { type: String, default: '' },
    id: { type: String, default: () => `field-${Math.random().toString(36).slice(2, 8)}` },
});
defineEmits(['update:modelValue']);

// class/style go on the wrapper (e.g. class="is-full"), the rest on the field itself
const attrs = useAttrs();
const fieldAttrs = computed(() => { const { class: _c, style: _s, ...rest } = attrs; return rest; });
</script>
