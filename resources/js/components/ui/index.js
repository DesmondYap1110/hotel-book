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
import UiTextarea from './UiTextarea.vue';
import UiCheckboxGroup from './UiCheckboxGroup.vue';
import UiFormSection from './UiFormSection.vue';
import UiRichEditor from './UiRichEditor.vue';
import UiFileUpload from './UiFileUpload.vue';
import UiTabLayout from './UiTabLayout.vue';
import UiSwitch from './UiSwitch.vue';
import UiDatePicker from './UiDatePicker.vue';
import UiRecordSwitcher from './UiRecordSwitcher.vue';
import UiModal from './UiModal.vue';
import UiToggleTable from './UiToggleTable.vue';
import UiAddress from './UiAddress.vue';
import UiAccordion from './UiAccordion.vue';

export { UiPageCard, UiDataTable, UiPagination, UiIconButton, UiTableFilters, UiTableCell, UiSelect, UiInput, UiTextarea, UiCheckboxGroup, UiFormSection, UiRichEditor, UiFileUpload, UiTabLayout, UiSwitch, UiDatePicker, UiRecordSwitcher, UiModal, UiToggleTable, UiAddress, UiAccordion };

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
        app.component('ui-textarea', UiTextarea);
        app.component('ui-checkbox-group', UiCheckboxGroup);
        app.component('ui-form-section', UiFormSection);
        app.component('ui-rich-editor', UiRichEditor);   // Summernote
        app.component('ui-file-upload', UiFileUpload);   // FilePond
        app.component('ui-tab-layout', UiTabLayout);
        app.component('ui-switch', UiSwitch);
        app.component('ui-date-picker', UiDatePicker); // Flatpickr
        app.component('ui-record-switcher', UiRecordSwitcher);
        app.component('ui-modal', UiModal);
        app.component('ui-toggle-table', UiToggleTable);
        app.component('ui-address', UiAddress);       // Malaysia postcode / state / city
        app.component('ui-accordion', UiAccordion);   // collapsible card
    },
};
