<!--
  UiInput - label + input + error message in one tag.

  <ui-input v-model="form.name" label="Name" :error="form.errors.name" />
  <ui-input v-model="form.password" type="password" label="Password" :error="form.errors.password" />
      (password fields get a show/hide eye button automatically)

  Any other attribute (placeholder, autocomplete, required, maxlength...) goes onto the <input>.
-->
<template>
    <div class="cl-field" :class="$attrs.class" :style="$attrs.style">
        <label v-if="label" class="cl-field__label" :for="id">{{ label }}</label>

        <input
            :id="id"
            v-bind="fieldAttrs"
            :type="inputType"
            :value="modelValue"
            class="cl-input"
            :class="{ 'is-invalid': error }"
            @input="$emit('update:modelValue', $event.target.value)"
        >

        <button v-if="type === 'password'" type="button" class="cl-field__action"
                :aria-label="showPassword ? 'Hide password' : 'Show password'" @click="showPassword = !showPassword">
            <i class="far" :class="showPassword ? 'fa-eye' : 'fa-eye-slash'"></i>
        </button>

        <div v-if="error" class="cl-field__error">{{ error }}</div>
    </div>
</template>

<script>
// attributes go to the <input> (class/style stay on the wrapper - see fieldAttrs)
export default { inheritAttrs: false };
</script>

<script setup>
import { ref, computed, useAttrs } from 'vue';

const props = defineProps({
    modelValue: { type: [String, Number], default: '' },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    error: { type: String, default: '' },
    id: { type: String, default: () => `field-${Math.random().toString(36).slice(2, 8)}` },
});
defineEmits(['update:modelValue']);

// class/style go on the wrapper (e.g. class="is-full"), the rest on the field itself
const attrs = useAttrs();
const fieldAttrs = computed(() => { const { class: _c, style: _s, ...rest } = attrs; return rest; });

const showPassword = ref(false);
const inputType = computed(() => (props.type === 'password' && showPassword.value ? 'text' : props.type));
</script>
