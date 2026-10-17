<!--
  UiAccordion - one collapsible card. Click the header to open / close.

  <ui-accordion v-model:open="item.open" title="Is breakfast included?" meta="optional grey note">
      <template #before>  optional, left of the title (e.g. drag grip) </template>
      <template #actions> optional, right of the title (e.g. delete button) </template>
      ...content...
  </ui-accordion>

  Open card: gold bar on the left + chevron up. Closed: chevron right.
  :error="true" turns the title red (e.g. a field inside has a validation error).
  Content stays mounted when closed (only hidden), so editors / typed text are kept.
-->
<template>
    <div class="cl-accordion" :class="{ 'is-open': isOpen, 'has-error': error }">
        <div class="cl-accordion__head" role="button" tabindex="0" :aria-expanded="isOpen"
             @click="toggle" @keydown.enter.self.prevent="toggle" @keydown.space.self.prevent="toggle">
            <span v-if="$slots.before" class="cl-accordion__before" @click.stop><slot name="before" /></span>
            <span class="cl-accordion__title" :class="{ 'is-placeholder': !title }">
                {{ title || placeholder }}
                <span v-if="meta" class="cl-accordion__meta">{{ meta }}</span>
            </span>
            <span v-if="$slots.actions" class="cl-accordion__actions" @click.stop><slot name="actions" /></span>
            <i class="cl-accordion__chevron fas" :class="isOpen ? 'fa-chevron-up' : 'fa-chevron-right'"></i>
        </div>

        <div v-show="isOpen" class="cl-accordion__body">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    title: { type: String, default: '' },
    placeholder: { type: String, default: 'Untitled' }, // shown when title is empty
    meta: { type: String, default: '' },                 // small grey text after the title, e.g. "12 rooms"
    open: { type: Boolean, default: undefined },         // use v-model:open, or leave out and it manages itself
    error: { type: Boolean, default: false },
});
const emit = defineEmits(['update:open']);

const inner = ref(false);
const isOpen = computed(() => (props.open === undefined ? inner.value : props.open));
const toggle = () => {
    inner.value = !isOpen.value;
    emit('update:open', inner.value);
};
</script>
