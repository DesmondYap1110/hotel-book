<!--
  UiSelect - themed dropdown (replaces the browser's blue native list).

  <ui-select v-model="value" :options="[{ value: 'a', label: 'Option A' }]" placeholder="All" />
  <ui-select v-model="perPage" :options="[10, 25, 50]" size="sm" />      (plain values work too)

  In a normal Blade <form> (no v-model) give it a name, it posts like a <select>:
  <ui-select name="category" value="{{ old('category') }}" :options='@json($options)' placeholder="Choose…" />

  Keyboard: Enter/Space/↓ opens, ↑ ↓ move, Enter picks, Esc closes.
-->
<template>
    <div class="cl-select" :class="[{ 'is-open': open, 'is-invalid': invalid }, size === 'sm' ? 'cl-select--sm' : '']" ref="root">
        <input v-if="name" type="hidden" :name="name" :value="current">
        <button
            type="button"
            class="cl-select__toggle"
            :aria-expanded="open"
            aria-haspopup="listbox"
            @click="toggle"
            @keydown="onKeydown"
        >
            <span class="cl-select__value" :class="{ 'is-placeholder': selectedIndex < 0 }">{{ selectedLabel }}</span>
            <i class="fas fa-chevron-down cl-select__arrow"></i>
        </button>

        <ul v-show="open" class="cl-select__menu" role="listbox" ref="menu">
            <li
                v-for="(option, i) in list"
                :key="option.value"
                class="cl-select__option"
                :class="{ 'is-selected': i === selectedIndex, 'is-active': i === activeIndex }"
                role="option"
                :aria-selected="i === selectedIndex"
                @mouseenter="activeIndex = i"
                @mousedown.prevent="pick(i)"
            >
                {{ option.label }}
                <i v-if="i === selectedIndex" class="fas fa-check cl-select__check"></i>
            </li>
        </ul>
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
    // Blade forms: field name + starting value (used when there is no v-model)
    name: { type: String, default: '' },
    value: { default: '' },
    invalid: { type: Boolean, default: false },
});
const emit = defineEmits(['update:modelValue']);

const root = ref(null);
const menu = ref(null);
const open = ref(false);
const activeIndex = ref(-1);

// works with v-model, or on its own inside a Blade form
const current = ref(props.modelValue !== '' && props.modelValue !== undefined ? props.modelValue : props.value);
watch(() => props.modelValue, (v) => { current.value = v; });

const list = computed(() => {
    const items = props.options.map((o) => (typeof o === 'object' ? o : { value: o, label: String(o) }));
    return props.placeholder ? [{ value: '', label: props.placeholder }, ...items] : items;
});

const selectedIndex = computed(() => list.value.findIndex((o) => String(o.value) === String(current.value ?? '')));
const selectedLabel = computed(() => (selectedIndex.value >= 0 ? list.value[selectedIndex.value].label : props.placeholder || 'Select…'));

const toggle = () => (open.value ? close() : openMenu());

const openMenu = () => {
    open.value = true;
    activeIndex.value = Math.max(selectedIndex.value, 0);
    nextTick(scrollActiveIntoView);
};

const close = () => { open.value = false; };

const pick = (i) => {
    current.value = list.value[i].value;
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

    if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex.value = Math.min(activeIndex.value + 1, list.value.length - 1); scrollActiveIntoView(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); activeIndex.value = Math.max(activeIndex.value - 1, 0); scrollActiveIntoView(); }
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(activeIndex.value); }
    if (e.key === 'Escape' || e.key === 'Tab') close();
};

const scrollActiveIntoView = () => {
    const el = menu.value?.children[activeIndex.value];
    el?.scrollIntoView({ block: 'nearest' });
};

// close when clicking anywhere else
const onDocClick = (e) => { if (root.value && !root.value.contains(e.target)) close(); };
onMounted(() => document.addEventListener('mousedown', onDocClick));
onBeforeUnmount(() => document.removeEventListener('mousedown', onDocClick));

watch(() => props.options, () => { if (activeIndex.value >= list.value.length) activeIndex.value = 0; });
</script>
