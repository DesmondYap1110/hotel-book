<!--
  Rooms list. Controller: Admin\Room\RoomController@index
  Columns / filters / buttons: app/Datatables/Lists/RoomList.php
-->
<template>
    <Head title="Rooms" />

    <ui-page-card title="Rooms">
        <template #actions>
            <Link :href="createUrl" class="cl-btn cl-btn--primary"><i class="fas fa-plus"></i> Add Room</Link>
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
