<!--
  Facilities list - shared by Hotels › Hotel Facilities and Rooms › Room Facilities.
  Controller: Admin\Core\FacilityController@index (via HotelFacilityController / RoomFacilityController)
  Columns / filters / buttons: app/Datatables/Lists/FacilityList.php
-->
<template>
    <Head :title="title" />

    <ui-page-card :title="title">
        <template #actions>
            <Link :href="createUrl" class="cl-btn cl-btn--primary"><i class="fas fa-plus"></i> Add Facility</Link>
        </template>

        <ui-data-table :server="table" />
    </ui-page-card>
</template>

<script setup>
defineProps({
    title: String,     // 'Hotel Facilities' | 'Room Facilities'
    table: Object,     // Datatable::props(...)
    createUrl: String,
});
</script>
