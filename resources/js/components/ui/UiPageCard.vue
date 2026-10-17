<!--
  UiPageCard - white panel with a title and an optional actions area.

  <ui-page-card title="Room Types">
      <template #actions>
          <button class="cl-btn cl-btn--primary">Add</button>
      </template>
      ...content...
  </ui-page-card>

  Optional tabs in the header (next to the title) - the page shows one section at a time:

  <ui-page-card title="Edit Deluxe King" v-model:tab="tab" :tabs="[
      { key: 'general', label: 'General', icon: 'fas fa-door-open', errors: 2 },
      { key: 'beds',    label: 'Beds & Guests', icon: 'fas fa-bed' },
  ]">
      <div v-show="tab === 'general'"> ... </div>
      <div v-show="tab === 'beds'"> ... </div>
  </ui-page-card>

  The open tab is kept in the URL (#beds), so a refresh stays on it. On phones the tabs
  become a strip under the title that scrolls sideways.
-->
<template>
    <section class="cl-page-card">
        <header v-if="title || $slots.actions || tabs.length" class="cl-page-card__header" :class="{ 'has-tabs': tabs.length }">
            <h1 class="cl-page-card__title">{{ title }}</h1>

            <nav v-if="tabs.length" ref="nav" class="cl-page-card__tabs" aria-label="Sections">
                <button
                    v-for="item in tabs"
                    :key="item.key"
                    type="button"
                    class="cl-page-card__tab"
                    :class="{ 'is-active': item.key === tab, 'has-error': item.errors }"
                    :aria-current="item.key === tab ? 'page' : null"
                    @click="select(item.key)"
                >
                    <i v-if="item.icon" :class="item.icon"></i>
                    <span>{{ item.label }}</span>
                    <span v-if="item.errors" class="cl-tabs__badge" :title="`${item.errors} error(s)`">{{ item.errors }}</span>
                </button>
            </nav>

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
import { ref, watch, nextTick, onMounted } from 'vue';

const props = defineProps({
    title: { type: String, default: '' },
    tabs: { type: Array, default: () => [] },     // [{ key, label, icon, errors }]
    tab: { type: String, default: '' },           // open tab key (v-model:tab)
    rememberInUrl: { type: Boolean, default: true },
});
const emit = defineEmits(['update:tab']);

const nav = ref(null);

const select = (key) => {
    emit('update:tab', key);
    if (props.rememberInUrl) history.replaceState(history.state, '', `#${key}`);
};

// phones: keep the open tab visible in the sideways strip
let animate = false; // jump straight there on page load, glide on clicks
const showActive = () => {
    const strip = nav.value;
    const item = strip?.querySelector('.is-active');
    if (strip && item && strip.scrollWidth > strip.clientWidth) {
        strip.scrollTo({ left: item.offsetLeft - (strip.clientWidth - item.offsetWidth) / 2, behavior: animate ? 'smooth' : 'auto' });
    }
};
watch(() => props.tab, () => nextTick(showActive));

// open the tab from the URL (#beds) after a refresh
onMounted(() => {
    const fromUrl = location.hash.slice(1);
    if (props.tabs.length && props.rememberInUrl && props.tabs.some((t) => t.key === fromUrl)) emit('update:tab', fromUrl);
    setTimeout(() => { showActive(); animate = true; }, 150);
});
</script>
