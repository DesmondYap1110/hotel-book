<!--
  Hotels list. Controller: Admin\Hotel\HotelController@index
  Columns / filters / buttons: app/Datatables/Lists/HotelList.php
-->
<template>
    <Head title="Hotels" />

    <ui-page-card title="Hotels">
        <template #actions>
            <Link :href="createUrl" class="cl-btn cl-btn--primary"><i class="fas fa-plus"></i> Add Hotel</Link>
        </template>

        <ui-data-table :server="table" />
    </ui-page-card>
</template>

<script setup>
defineProps({
    table: Object,     // Datatable::props(...)
    createUrl: String,
});
</script>
