<!--
  UiModal - pop-up dialog.

  <ui-modal v-model="showModal" title="Add Payment Method" size="md">
      ...form...
      <template #footer>
          <button class="cl-btn cl-btn--light" @click="showModal = false">Cancel</button>
          <button class="cl-btn cl-btn--primary">Save</button>
      </template>
  </ui-modal>

  Closes on Esc, the X button, or a click on the dark background (unless :persistent="true").
  The content is only rendered while open, so forms start fresh each time.
  size: sm (420px) | md (560px) | lg (760px)
-->
<template>
    <Teleport to="body">
        <Transition name="cl-modal">
            <div v-if="modelValue" class="cl-modal" role="dialog" aria-modal="true" :aria-label="title"
                 @mousedown.self="!persistent && close()">
                <div class="cl-modal__dialog" :class="`cl-modal__dialog--${size}`" ref="dialog" tabindex="-1">
                    <header class="cl-modal__header">
                        <h2 class="cl-modal__title">{{ title }}</h2>
                        <button type="button" class="cl-modal__close" aria-label="Close" @click="close">
                            <i class="fas fa-times"></i>
                        </button>
                    </header>

                    <div class="cl-modal__body">
                        <slot />
                    </div>

                    <footer v-if="$slots.footer" class="cl-modal__footer">
                        <slot name="footer" />
                    </footer>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref, watch, nextTick, onBeforeUnmount } from 'vue';

const props = defineProps({
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: '' },
    size: { type: String, default: 'md' },
    persistent: { type: Boolean, default: false },
});
const emit = defineEmits(['update:modelValue', 'close']);

const dialog = ref(null);
const close = () => { emit('update:modelValue', false); emit('close'); };
const onKey = (e) => { if (e.key === 'Escape' && !props.persistent) close(); };

watch(() => props.modelValue, async (open) => {
    document.body.classList.toggle('cl-modal-open', open); // stop the page behind from scrolling
    if (open) {
        document.addEventListener('keydown', onKey);
        await nextTick();
        dialog.value?.focus();
    } else {
        document.removeEventListener('keydown', onKey);
    }
}, { immediate: true }); // also when the modal is created already open

onBeforeUnmount(() => {
    document.removeEventListener('keydown', onKey);
    document.body.classList.remove('cl-modal-open');
});
</script>
