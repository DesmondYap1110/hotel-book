<!-- Edit Room Type. Controller: Admin\Room\RoomTypeController@edit. Form: components/Types/Edit.vue -->
<template>
    <Head title="Edit Room Type" />
    <RoomTypeEdit :room-type_id="roomTypeId" :edit-room-types-api-route="updateUrl" />
</template>

<script setup>
import RoomTypeEdit from '../../components/Types/Edit.vue';
import { useBreadcrumbs } from '../../composables/useBreadcrumbs';

defineProps({ roomTypeId: Number, updateUrl: String });

useBreadcrumbs('Edit');
</script>
