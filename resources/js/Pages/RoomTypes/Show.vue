<!-- Room Type details. Controller: Admin\Room\RoomTypeController@show. View: components/Types/Show.vue -->
<template>
    <Head title="Room Type" />
    <RoomTypeShow :room-type_id="roomTypeId" />
</template>

<script setup>
import RoomTypeShow from '../../components/Types/Show.vue';
import { useBreadcrumbs } from '../../composables/useBreadcrumbs';

defineProps({ roomTypeId: Number });

useBreadcrumbs('Details');
</script>
