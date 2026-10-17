<!--
  UiTabLayout - long form split into tabs: menu card on the left, content card on the right.
  (On phones the menu becomes a scrollable strip on top.)

  <ui-tab-layout v-model="tab" :tabs="[
      { key: 'general',  label: 'General',  icon: 'fas fa-hotel', errors: 2 },
      { key: 'location', label: 'Location', icon: 'fas fa-map-marker-alt' },
  ]">
      <template #header> optional block above the menu </template>
      <template #general>  ...fields... </template>
      <template #location> ...fields... </template>
      <template #footer>   Back / Save buttons </template>
  </ui-tab-layout>

  Every tab stays mounted (only hidden), so typed text and running uploads are kept
  when switching tabs. The open tab is kept in the URL (#location) so refresh keeps it.
-->
<template>
    <div class="cl-tabs">
        <!-- left card: optional header (e.g. photo) + the tab menu -->
        <div class="cl-tabs__side">
            <div v-if="$slots.header" class="cl-tabs__header"><slot name="header" /></div>

            <!-- scrolls when there are more tabs than fit (down on desktop, sideways on phones) -->
            <nav ref="nav" class="cl-tabs__nav" aria-label="Sections">
                <button
                    v-for="tab in tabs"
                    :key="tab.key"
                    type="button"
                    class="cl-tabs__item"
                    :class="{ 'is-active': tab.key === modelValue, 'has-error': tab.errors }"
                    :aria-current="tab.key === modelValue ? 'page' : null"
                    @click="select(tab.key)"
                >
                    <i class="cl-tabs__icon" :class="tab.icon"></i>
                    <span class="cl-tabs__label">{{ tab.label }}</span>
                    <span v-if="tab.errors" class="cl-tabs__badge" :title="`${tab.errors} error(s)`">{{ tab.errors }}</span>
                </button>
            </nav>
        </div>

        <div class="cl-tabs__panel">
            <div v-for="tab in tabs" v-show="tab.key === modelValue" :key="tab.key" class="cl-tabs__pane">
                <slot :name="tab.key" />
            </div>

            <div v-if="$slots.footer" class="cl-tabs__footer"><slot name="footer" /></div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue';

const props = defineProps({
    tabs: { type: Array, required: true },       // [{ key, label, icon, errors }]
    modelValue: { type: String, required: true }, // open tab key
    rememberInUrl: { type: Boolean, default: true },
});
const emit = defineEmits(['update:modelValue']);

const select = (key) => {
    emit('update:modelValue', key);
    if (props.rememberInUrl) history.replaceState(history.state, '', `#${key}`);
    // on phones the panel is below the menu - bring it into view
    if (window.matchMedia('(max-width: 992px)').matches) {
        document.querySelector('.cl-tabs__panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// keep the open tab visible inside the (scrolling) menu - only the menu scrolls, not the page
const nav = ref(null);
const showActive = (smooth = true) => {
    const list = nav.value;
    const item = list?.querySelector('.cl-tabs__item.is-active');
    if (!item) return;
    const sideways = list.scrollWidth > list.clientWidth; // phones: horizontal strip
    list.scrollTo(sideways
        ? { left: item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2, behavior: smooth ? 'smooth' : 'auto' }
        : { top: item.offsetTop - (list.clientHeight - item.offsetHeight) / 2, behavior: smooth ? 'smooth' : 'auto' });
};
let animate = false; // jump straight there on page load, glide on clicks
watch(() => props.modelValue, () => nextTick(() => showActive(animate)));

// open the tab from the URL (#gallery) after a refresh
onMounted(() => {
    const fromUrl = location.hash.slice(1);
    if (props.rememberInUrl && props.tabs.some((t) => t.key === fromUrl)) emit('update:modelValue', fromUrl);
    // after the page has laid out (editors etc. change heights)
    setTimeout(() => { showActive(false); animate = true; }, 150);
});
</script>
