<!-- Add Room. Controller: Admin\Room\RoomController@create. Form: components/Rooms/Add.vue -->
<template>
    <Head title="Add Room" />
    <RoomAdd />
</template>

<script setup>
import RoomAdd from '../../components/Rooms/Add.vue';
import { useBreadcrumbs } from '../../composables/useBreadcrumbs';

useBreadcrumbs('Add');
</script>
