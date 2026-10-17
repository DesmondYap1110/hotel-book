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
| short form split in tabs   | `<ui-page-card title="..." v-model:tab="tab" :tabs="[{ key, label, icon, errors }]">` - tabs sit next to the title; wrap sections in `v-show="tab === 'key'"`, put `class="cl-tabbed-form" novalidate` on the form (example: `Pages/RoomTypes/Form.vue`). Long forms with many tabs: `<ui-tab-layout>` |
| list from the database     | `php artisan make:datatable` → `<ui-data-table :server="table">` (see `docs/datatables.md`) |
| list of an array in Vue    | `<ui-data-table :columns :rows>` + `#cell-<key>` slots   |
| round action button        | `<ui-icon-button icon="fas fa-pen" variant="danger">`    |
| date / time / range picker| `<ui-date-picker v-model="form.check_in_time" mode="time">` (modes: date, time, datetime, range) |
| on/off or active/inactive  | `<ui-switch v-model="form.status" on-value="active" off-value="inactive" on-text="Active" off-text="Inactive">` |
| jump between records       | `<ui-record-switcher :current :items :current-id>` (example: hotel switcher on `Pages/Hotels/Form.vue`) |
| address (Malaysia aware)   | `<ui-address :form="form">` - Malaysia only: postcode fills State + City (API: `/admin/locations/malaysia/*`) |
| switch items on/off (list) | `<ui-toggle-table v-model="form.facility_ids" :rows title="Facilities">` - rows with a category are grouped under grey section rows (Payment + Facilities tabs) |
| collapsible card (FAQ...)  | `<ui-accordion v-model:open="item.open" :title>` + slots `#before` (drag grip) / `#actions` (delete) - example: FAQ + Rooms tabs on `Pages/Hotels/Form.vue`. List helpers: `.cl-drag-handle` (grip), `.cl-list-empty` (empty box), `.cl-list-add` ("+ Add ..." bar) |
| pop-up form / dialog       | `<ui-modal v-model="open" title="...">` + `#footer` (example: `Pages/Settings/PaymentMethods/MethodModal.vue`) |
| long form split into tabs  | `<ui-tab-layout v-model="tab" :tabs>` + `<template #key>` per tab (example: `Pages/Hotels/Form.vue`) |
| any description (rich text)| `<ui-rich-editor v-model="form.description">` + `RichText::clean()` in the Request |
| file / image upload        | `<ui-file-upload v-model="form.images" v-model:busy="uploading" multiple>` + `TempUpload::claim()` on save |
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
