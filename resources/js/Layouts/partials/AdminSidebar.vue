<!--
  Sidebar. Items come from config/admin-menu.php (shared as page.props.menu).
  Add a page to the menu there - no Vue changes needed.
-->
<template>
    <aside class="cl-sidebar">
        <Link href="/admin" class="cl-sidebar__brand">
            <span class="cl-sidebar__brand-full">
                <img src="/images/clementra-icon.png" alt="">
                CLEMENTRA
            </span>
            <img class="cl-sidebar__brand-mark" src="/images/clementra-icon.png" alt="Clementra">
        </Link>

        <ul class="cl-sidebar__nav">
            <li
                v-for="item in menu"
                :key="item.label"
                class="cl-sidebar__item"
                :class="{ 'is-active': item.active, 'is-open': isOpen(item) }"
            >
                <!-- group with sub links -->
                <template v-if="item.children.length">
                    <a href="#" class="cl-sidebar__link" :title="item.label" @click.prevent="toggleGroup(item)">
                        <i class="cl-sidebar__icon" :class="item.icon"></i>
                        <span class="cl-sidebar__label">{{ item.label }}</span>
                        <i class="cl-sidebar__arrow fas fa-chevron-right"></i>
                    </a>
                    <ul class="cl-sidebar__submenu">
                        <li v-for="child in item.children" :key="child.url">
                            <Link :href="child.url" class="cl-sidebar__sublink" :class="{ 'is-active': child.active }">
                                {{ child.label }}
                            </Link>
                        </li>
                    </ul>
                </template>

                <!-- single link ('#' = coming soon) -->
                <Link v-else-if="item.url && item.url !== '#'" :href="item.url" class="cl-sidebar__link" :title="item.label">
                    <i class="cl-sidebar__icon" :class="item.icon"></i>
                    <span class="cl-sidebar__label">{{ item.label }}</span>
                </Link>
                <a v-else href="#" class="cl-sidebar__link" :title="`${item.label} (coming soon)`" @click.prevent>
                    <i class="cl-sidebar__icon" :class="item.icon"></i>
                    <span class="cl-sidebar__label">{{ item.label }}</span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { reactive } from 'vue';

defineProps({ menu: { type: Array, default: () => [] } });
const emit = defineEmits(['expand']);

// groups the user opened/closed by hand (otherwise: open if a child is active)
const manual = reactive({});
const isOpen = (item) => manual[item.label] ?? item.open;

const toggleGroup = (item) => {
    // icon-only sidebar: expand it first so the sub links are visible
    if (document.documentElement.classList.contains('cl-admin--collapsed')) {
        emit('expand');
        manual[item.label] = true;
        return;
    }
    manual[item.label] = !isOpen(item);
};
</script>
