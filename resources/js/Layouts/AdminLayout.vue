<!--
  AdminLayout - sidebar + topbar + breadcrumb + footer.
  Every page in resources/js/Pages uses it automatically (see app.js).
  Data comes from shared props (app/Http/Middleware/HandleInertiaRequests.php).
-->
<template>
    <div class="cl-admin">
        <AdminSidebar :menu="page.props.menu" @expand="setCollapsed(false)" />

        <div class="cl-admin__main">
            <AdminTopbar :user="page.props.auth.user" @toggle-menu="toggleMenu" />
            <AdminBreadcrumb :trail="trail" />

            <main class="cl-admin__content">
                <slot />
            </main>

            <footer class="cl-admin__footer">
                &copy; Copyright {{ year }} Clementra. All Rights Reserved.
            </footer>
        </div>

        <div class="cl-admin__backdrop" @click="setMobileOpen(false)"></div>
    </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { usePage, router } from '@inertiajs/vue3';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import AdminSidebar from './partials/AdminSidebar.vue';
import AdminTopbar from './partials/AdminTopbar.vue';
import AdminBreadcrumb from './partials/AdminBreadcrumb.vue';
import { extraCrumbs } from '../composables/useBreadcrumbs';

const page = usePage();
const year = new Date().getFullYear();

// breadcrumb = trail from the menu config + steps added by the page
const trail = computed(() => [...(page.props.breadcrumbs || []), ...extraCrumbs.value]);

// ---- sidebar state lives on <html> so the CSS can react to it ----
const html = document.documentElement;
const COLLAPSE_KEY = 'cl-sidebar-collapsed';
const isMobile = () => window.matchMedia('(max-width: 992px)').matches;

const setCollapsed = (collapsed) => {
    html.classList.toggle('cl-admin--collapsed', collapsed);
    try { localStorage.setItem(COLLAPSE_KEY, collapsed ? '1' : '0'); } catch (e) { /* storage blocked */ }
};

const setMobileOpen = (open) => html.classList.toggle('cl-admin--mobile-open', open);

const toggleMenu = () => {
    if (isMobile()) setMobileOpen(!html.classList.contains('cl-admin--mobile-open'));
    else setCollapsed(!html.classList.contains('cl-admin--collapsed'));
};

// close the phone menu after moving to another page
router.on('navigate', () => setMobileOpen(false));

// flash messages from controllers: ->with('status', 'Saved!')
watch(() => page.props.flash?.status, (message) => {
    if (message) toast.success(message, { theme: 'colored', position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2500 });
}, { immediate: true });
</script>
