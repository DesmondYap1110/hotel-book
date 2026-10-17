<!--
  Rooms list (all hotels). Controller: Admin\Room\RoomController@index
  Columns / filters / buttons: app/Datatables/Lists/RoomList.php
  Rooms are added on each hotel: Hotels › Edit › Rooms tab (levels -> rooms).
-->
<template>
    <Head title="Rooms" />

    <ui-page-card title="Rooms">
        <template #actions>
            <Link :href="hotelsUrl" class="cl-btn cl-btn--primary"><i class="fas fa-hotel"></i> Manage in Hotels</Link>
        </template>

        <p class="cl-note">
            <i class="fas fa-exclamation-circle"></i>
            <span>Rooms are added per hotel: open a hotel in <Link :href="hotelsUrl">Hotels</Link> › Rooms tab, add its levels, then the rooms.</span>
        </p>

        <ui-data-table :server="table" />
    </ui-page-card>
</template>

<script setup>
defineProps({
    table: Object,     // Datatable::props(...)
    hotelsUrl: String,
});
</script>
