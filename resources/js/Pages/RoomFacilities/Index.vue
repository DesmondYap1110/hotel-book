<!--
  Room Facilities list. Controller: Admin\Room\RoomFacilityController@index
  Columns / filters / buttons: app/Datatables/Lists/RoomFacilityList.php
-->
<template>
    <Head title="Room Facilities" />

    <ui-page-card title="Room Facilities">
        <template #actions>
            <Link :href="createUrl" class="cl-btn cl-btn--primary"><i class="fas fa-plus"></i> Add Facility</Link>
        </template>

        <ui-data-table :server="table" />
    </ui-page-card>
</template>

<script setup>
defineProps({
    table: Object,     // Datatable::props('room-facilities')
    createUrl: String,
});
</script>
