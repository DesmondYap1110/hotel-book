# Styles guide

Entry file: `app.scss` (just a list of imports). Compiled to `public/css/app.css` by `npm run dev`.

## Where do I put X?

| I want to...                         | Go to                                   |
| ------------------------------------ | --------------------------------------- |
| change a color / font / radius       | `abstracts/_tokens.scss`                |
| add a new color                      | add a line to `$colors` in `_tokens`    |
| add a new button color               | add a line to `$btn-variants` in `_tokens` |
| style a reusable piece (button, input) | `components/_<name>.scss`             |
| style a page skeleton (login, admin) | `layouts/_<name>.scss`                  |
| tweak spacing once in a template     | use a utility class: `u-mt-4`, `u-p-2`  |

## Rules (keep it easy to read)
1. **No raw colors in components.** Use `f.color('primary')` (or `var(--color-primary)`).
2. **Our classes start with `cl-`** so they never clash with AdminLTE/Bootstrap (`.btn`, `.card`).
3. **BEM-lite names:** `.cl-card`, `.cl-card__title` (part), `.cl-card--flat` (variant).
4. **One file = one component.** Partials start with `_`.
5. Page-only styling goes in the page's Vue `<style scoped>`; shared styling goes here.

## Admin building blocks

| Need                       | Use                                                      |
| -------------------------- | -------------------------------------------------------- |
| add a sidebar link         | `config/admin-menu.php` (no Blade changes)               |
| page panel with title      | `<ui-page-card title="...">` + `#actions` slot           |
| list from the database     | `php artisan make:datatable` → `<ui-data-table :server="table">` (see `docs/datatables.md`) |
| list of an array in Vue    | `<ui-data-table :columns :rows>` + `#cell-<key>` slots   |
| round action button        | `<ui-icon-button icon="fas fa-pen" variant="danger">`    |
| page numbers               | `<ui-pagination v-model:page :total-pages>`              |

Vue components live in `resources/js/components/ui/` and are registered globally.
Every screen is a Vue page in `resources/js/Pages/` (Inertia). Full examples:
`Pages/RoomFacilities/Index.vue` (table) and `Pages/RoomFacilities/Form.vue` (form).

## Examples
```html
<button class="cl-btn cl-btn--primary">Save</button>
<button class="cl-btn cl-btn--danger cl-btn--sm">Delete</button>

<div class="cl-field u-mt-4">
  <label class="cl-field__label" for="name">Name</label>
  <input class="cl-input" id="name">
</div>
```

Re-theme without rebuilding (CSS variables):
```css
.theme-dark { --color-primary: #000; }
```

In SCSS, import helpers like this:
```scss
@use '../abstracts/functions' as f;   // f.color('primary'), f.radius('sm'), f.space(3)
@use '../abstracts/mixins' as m;      // @include m.flex-center;
```
