/*
 | Add extra breadcrumb steps from a page.
 | The first part of the trail comes from config/admin-menu.php automatically.
 |
 |   <script setup>
 |   import { useBreadcrumbs } from '@/composables/useBreadcrumbs';
 |   useBreadcrumbs('Edit');                                  // ... › Room Types › Edit
 |   useBreadcrumbs({ label: 'Deluxe', url: '/admin/...' }, 'Edit');
 |   </script>
 */
import { ref, onBeforeUnmount } from 'vue';

// shared with the layout's breadcrumb bar
export const extraCrumbs = ref([]);

export function useBreadcrumbs(...crumbs) {
    extraCrumbs.value = crumbs.map((c) => (typeof c === 'string' ? { label: c, url: null } : c));
    onBeforeUnmount(() => { extraCrumbs.value = []; });
}
