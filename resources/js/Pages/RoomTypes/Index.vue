<!--
  Room Types list. Controller: Admin\Room\RoomTypeController@index
  Columns / filters / buttons: app/Datatables/Lists/RoomTypeList.php
-->
<template>
    <Head title="Room Types" />

    <ui-page-card title="Room Types">
        <template #actions>
            <Link :href="createUrl" class="cl-btn cl-btn--primary"><i class="fas fa-plus"></i> Add Room Type</Link>
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
