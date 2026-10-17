<!--
  UiSelect - themed dropdown (replaces the browser's blue native list).

  <ui-select v-model="value" :options="[{ value: 'a', label: 'Option A' }]" placeholder="All" />
  <ui-select v-model="perPage" :options="[10, 25, 50]" size="sm" />      (plain values work too)

  Long lists (more than 10 options) get a search box automatically (or force with :searchable).

  In a normal Blade <form> (no v-model) give it a name, it posts like a <select>:
  <ui-select name="category" value="{{ old('category') }}" :options='@json($options)' placeholder="Choose…" />

  Keyboard: Enter/Space/↓ opens, type to search, ↑ ↓ move, Enter picks, Esc closes.
-->
<template>
    <div class="cl-select" :class="[{ 'is-open': open, 'is-invalid': invalid, 'is-disabled': disabled }, size === 'sm' ? 'cl-select--sm' : '']" ref="root">
        <input v-if="name" type="hidden" :name="name" :value="current">
        <button
            type="button"
            class="cl-select__toggle"
            :aria-expanded="open"
            aria-haspopup="listbox"
            :disabled="disabled"
            @click="toggle"
            @keydown="onKeydown"
        >
            <span class="cl-select__value" :class="{ 'is-placeholder': selectedIndex < 0 }">{{ selectedLabel }}</span>
            <i class="fas fa-chevron-down cl-select__arrow"></i>
        </button>

        <div v-show="open" class="cl-select__menu">
            <input
                v-if="canSearch"
                ref="searchInput"
                v-model="query"
                type="search"
                class="cl-select__search"
                placeholder="Search…"
                aria-label="Search"
                @keydown="onKeydown"
            >
            <ul class="cl-select__list" role="listbox" ref="menu">
                <li
                    v-for="(option, i) in shown"
                    :key="option.value"
                    class="cl-select__option"
                    :class="{ 'is-selected': isSelected(option), 'is-active': i === activeIndex }"
                    role="option"
                    :aria-selected="isSelected(option)"
                    @mouseenter="activeIndex = i"
                    @mousedown.prevent="pick(option)"
                >
                    {{ option.label }}
                    <i v-if="isSelected(option)" class="fas fa-check cl-select__check"></i>
                </li>
                <li v-if="!shown.length" class="cl-select__empty">No matches</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    modelValue: { default: '' },
    // [{ value, label }] or plain values [10, 25]
    options: { type: Array, default: () => [] },
    // shown as the first option with value '' (e.g. "All"); leave empty for none
    placeholder: { type: String, default: '' },
    size: { type: String, default: 'md' },
    // null = automatic (search box when more than 10 options)
    searchable: { type: Boolean, default: null },
    disabled: { type: Boolean, default: false },
    // Blade forms: field name + starting value (used when there is no v-model)
    name: { type: String, default: '' },
    value: { default: '' },
    invalid: { type: Boolean, default: false },
});
const emit = defineEmits(['update:modelValue']);

const root = ref(null);
const menu = ref(null);
const searchInput = ref(null);
const open = ref(false);
const activeIndex = ref(-1);
const query = ref('');

// works with v-model, or on its own inside a Blade form
const current = ref(props.modelValue !== '' && props.modelValue !== undefined ? props.modelValue : props.value);
watch(() => props.modelValue, (v) => { current.value = v; });

const list = computed(() => {
    const items = props.options.map((o) => (typeof o === 'object' ? o : { value: o, label: String(o) }));
    return props.placeholder ? [{ value: '', label: props.placeholder }, ...items] : items;
});

const canSearch = computed(() => (props.searchable === null ? list.value.length > 10 : props.searchable));

// options after the search box filter
const shown = computed(() => {
    const term = query.value.trim().toLowerCase();
    return term ? list.value.filter((o) => String(o.label).toLowerCase().includes(term)) : list.value;
});

const isSelected = (option) => String(option.value) === String(current.value ?? '');
const selectedIndex = computed(() => list.value.findIndex(isSelected));
const selectedLabel = computed(() => (selectedIndex.value >= 0 ? list.value[selectedIndex.value].label : props.placeholder || 'Select…'));

const toggle = () => (open.value ? close() : openMenu());

const openMenu = () => {
    if (props.disabled) return;
    open.value = true;
    query.value = '';
    activeIndex.value = Math.max(shown.value.findIndex(isSelected), 0);
    nextTick(() => {
        scrollActiveIntoView();
        searchInput.value?.focus();
    });
};

const close = () => { open.value = false; };

const pick = (option) => {
    if (!option) return;
    current.value = option.value;
    emit('update:modelValue', current.value);
    close();
};

const onKeydown = (e) => {
    if (!open.value && ['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
        openMenu();
        return;
    }
    if (!open.value) return;

    if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex.value = Math.min(activeIndex.value + 1, shown.value.length - 1); scrollActiveIntoView(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); activeIndex.value = Math.max(activeIndex.value - 1, 0); scrollActiveIntoView(); }
    if (e.key === 'Enter') { e.preventDefault(); pick(shown.value[activeIndex.value]); }
    if (e.key === ' ' && e.target === searchInput.value) return; // typing a space while searching
    if (e.key === ' ') { e.preventDefault(); pick(shown.value[activeIndex.value]); }
    if (e.key === 'Escape' || e.key === 'Tab') close();
};

// typing filters -> start from the first match
watch(query, () => { activeIndex.value = 0; });

const scrollActiveIntoView = () => {
    const el = menu.value?.children[activeIndex.value];
    el?.scrollIntoView({ block: 'nearest' });
};

// close when clicking anywhere else
const onDocClick = (e) => { if (root.value && !root.value.contains(e.target)) close(); };
onMounted(() => document.addEventListener('mousedown', onDocClick));
onBeforeUnmount(() => document.removeEventListener('mousedown', onDocClick));

watch(() => props.options, () => { if (activeIndex.value >= shown.value.length) activeIndex.value = 0; });
</script>
