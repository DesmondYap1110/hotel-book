<!--
  UiRecordSwitcher - card showing the current record, with a dropdown to jump to another one.
  (e.g. the hotel switcher under the photo on the hotel form)

  <ui-record-switcher
      :current="{ title: 'Head Office', subtitle: 'Meriton Suites', icon: 'fas fa-building', active: true }"
      :items="[{ id: 1, title, subtitle, icon, tag: 'HQ', active, url }]"
      :current-id="hotel.id"
  />

  active: true = green dot, false = grey dot, null/undefined = no dot.
  A search box appears when there are more than 6 items.
-->
<template>
    <div class="cl-switcher" :class="{ 'is-open': open }" ref="root">
        <button type="button" class="cl-switcher__current" :aria-expanded="open" aria-haspopup="listbox"
                :disabled="!others.length" @click="open = !open">
            <span class="cl-switcher__icon"><i :class="current.icon"></i></span>
            <span class="cl-switcher__text">
                <span class="cl-switcher__title">
                    <span class="cl-switcher__name">{{ current.title }}</span>
                    <span v-if="current.active !== undefined && current.active !== null" class="cl-switcher__dot"
                          :class="{ 'is-off': !current.active }" :title="current.active ? 'Active' : 'Inactive'"></span>
                </span>
                <span v-if="current.subtitle" class="cl-switcher__subtitle">{{ current.subtitle }}</span>
            </span>
            <i v-if="others.length" class="fas fa-chevron-down cl-switcher__chevron"></i>
        </button>

        <div v-show="open" class="cl-switcher__menu" role="listbox">
            <input v-if="items.length > 6" v-model.trim="search" type="search" class="cl-switcher__search"
                   placeholder="Search..." aria-label="Search">

            <Link
                v-for="item in filtered"
                :key="item.id"
                :href="item.url"
                class="cl-switcher__option"
                :class="{ 'is-current': item.id === currentId }"
                role="option"
                :aria-selected="item.id === currentId"
                @click="open = false"
            >
                <span class="cl-switcher__icon cl-switcher__icon--sm"><i :class="item.icon"></i></span>
                <span class="cl-switcher__text">
                    <span class="cl-switcher__title">
                        <span class="cl-switcher__name">{{ item.title }}</span>
                        <span v-if="item.active !== undefined && item.active !== null" class="cl-switcher__dot" :class="{ 'is-off': !item.active }"></span>
                    </span>
                    <span v-if="item.subtitle" class="cl-switcher__subtitle">{{ item.subtitle }}</span>
                </span>
                <span v-if="item.tag" class="cl-switcher__tag">{{ item.tag }}</span>
                <i v-if="item.id === currentId" class="fas fa-check cl-switcher__check"></i>
            </Link>

            <div v-if="!filtered.length" class="cl-switcher__empty">No matches</div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    current: { type: Object, required: true },        // { title, subtitle, icon, active }
    items: { type: Array, default: () => [] },         // [{ id, title, subtitle, icon, tag, active, url }]
    currentId: { type: [Number, String], default: null },
});

const open = ref(false);
const search = ref('');
const root = ref(null);

const others = computed(() => props.items.filter((i) => i.id !== props.currentId));

const filtered = computed(() => {
    const term = search.value.toLowerCase();
    if (!term) return props.items;
    return props.items.filter((i) => `${i.title} ${i.subtitle ?? ''}`.toLowerCase().includes(term));
});

// close when clicking elsewhere or pressing Esc
const onDocClick = (e) => { if (root.value && !root.value.contains(e.target)) open.value = false; };
const onKey = (e) => { if (e.key === 'Escape') open.value = false; };
onMounted(() => { document.addEventListener('mousedown', onDocClick); document.addEventListener('keydown', onKey); });
onBeforeUnmount(() => { document.removeEventListener('mousedown', onDocClick); document.removeEventListener('keydown', onKey); });
</script>
