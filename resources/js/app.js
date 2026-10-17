/*
 | Entry point. Every screen is a Vue page in resources/js/Pages (Inertia.js).
 | A controller does:   return Inertia::render('Rooms/Index', [...props]);
 | which loads:         resources/js/Pages/Rooms/Index.vue
 */
import './bootstrap';
import { createApp, h } from 'vue';
import { createInertiaApp, router, Link, Head } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import UiKit from './components/ui';
import AdminLayout from './Layouts/AdminLayout.vue';

createInertiaApp({
    title: (title) => (title ? `${title} | Clementra` : 'Clementra'),

    // 'Rooms/Index' -> ./Pages/Rooms/Index.vue
    // Pages get the admin layout automatically; Auth/* pages have none.
    resolve: (name) => import(`./Pages/${name}.vue`).then((module) => {
        const page = module.default;
        if (page.layout === undefined) {
            page.layout = name.startsWith('Auth/') ? null : AdminLayout;
        }
        return page;
    }),

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(createPinia())
            .use(UiKit)              // <ui-data-table>, <ui-select>, <ui-page-card>, ...
            .component('Link', Link) // <Link href="/admin/rooms">  (no full page reload)
            .component('Head', Head) // <Head title="Rooms" />
            .mount(el);
    },

    progress: false, // we use our own page loader (below)
});

// ---- page loader (resources/views/partials/page-loader.blade.php) ----
// Hide it once Vue is ready; show it while moving between pages,
// but only if the visit takes longer than 250ms (no flash on fast pages).
const loader = window.clPageLoader;
let loaderTimer = null;

loader?.hide();
router.on('start', () => { loaderTimer = setTimeout(() => loader?.show(), 250); });
router.on('finish', () => { clearTimeout(loaderTimer); loader?.hide(); });
