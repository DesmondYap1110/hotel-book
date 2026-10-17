<!--
  UiPageCard - white panel with a title and an optional actions area.

  <ui-page-card title="Room Types">
      <template #actions>
          <button class="cl-btn cl-btn--primary">Add</button>
      </template>
      ...content...
  </ui-page-card>
-->
<template>
    <section class="cl-page-card">
        <header v-if="title || $slots.actions" class="cl-page-card__header">
            <h1 class="cl-page-card__title">{{ title }}</h1>
            <div v-if="$slots.actions" class="cl-page-card__actions">
                <slot name="actions" />
            </div>
        </header>
        <div class="cl-page-card__body">
            <slot />
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: { type: String, default: '' },
});
</script>
