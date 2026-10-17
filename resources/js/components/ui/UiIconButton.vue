<!--
  UiIconButton - round icon-only button (e.g. table actions).

  <ui-icon-button icon="fas fa-pen" title="Edit" @click="edit(item)" />
  <ui-icon-button icon="fas fa-trash" variant="danger" size="sm" title="Delete" />

  variant: primary | dark | danger | success   (add more in sass/abstracts/_tokens.scss)
-->
<template>
    <button
        type="button"
        :class="['cl-icon-btn', `cl-icon-btn--${variant}`, { 'cl-icon-btn--sm': size === 'sm' }]"
        :title="title"
        :aria-label="title"
    >
        <i :class="icon"></i>
    </button>
</template>

<script setup>
defineProps({
    icon: { type: String, required: true },
    title: { type: String, default: '' },
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
});
</script>
