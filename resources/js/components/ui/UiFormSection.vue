<!--
  UiFormSection - a titled block inside a long form, with a 2-column grid.

  <ui-form-section title="Location" description="Where guests find the hotel.">
      <ui-input ... />                       (one column)
      <ui-input ... class="is-full" />       (full width)
  </ui-form-section>
-->
<template>
    <section class="cl-form-section">
        <!-- title is optional: inside <ui-tab-layout> the tab already names the section -->
        <header v-if="title || description" class="cl-form-section__head">
            <h2 v-if="title" class="cl-form-section__title">
                <i v-if="icon" :class="icon"></i>
                {{ title }}
            </h2>
            <p v-if="description" class="cl-form-section__desc">{{ description }}</p>
        </header>
        <div class="cl-form-grid">
            <slot />
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    icon: { type: String, default: '' },
});
</script>
