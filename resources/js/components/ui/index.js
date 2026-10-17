// Reusable UI kit. Registered globally in resources/js/app.js, so every
// page can use <ui-page-card>, <ui-data-table>, <ui-select>, <ui-input>,
// <ui-pagination>, <ui-icon-button> without importing them.
import UiPageCard from './UiPageCard.vue';
import UiDataTable from './UiDataTable.vue';
import UiPagination from './UiPagination.vue';
import UiIconButton from './UiIconButton.vue';
import UiTableFilters from './UiTableFilters.vue';
import UiTableCell from './UiTableCell.vue';
import UiSelect from './UiSelect.vue';
import UiInput from './UiInput.vue';

export { UiPageCard, UiDataTable, UiPagination, UiIconButton, UiTableFilters, UiTableCell, UiSelect, UiInput };

export default {
    install(app) {
        app.component('ui-page-card', UiPageCard);
        app.component('ui-data-table', UiDataTable);
        app.component('ui-pagination', UiPagination);
        app.component('ui-icon-button', UiIconButton);
        app.component('ui-table-filters', UiTableFilters);
        app.component('ui-table-cell', UiTableCell);
        app.component('ui-select', UiSelect);
        app.component('ui-input', UiInput);
    },
};
