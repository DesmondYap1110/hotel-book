<!-- Add Room Type. Controller: Admin\Room\RoomTypeController@create. Form: components/Types/Add.vue -->
<template>
    <Head title="Add Room Type" />
    <RoomTypeAdd />
</template>

<script setup>
import RoomTypeAdd from '../../components/Types/Add.vue';
import { useBreadcrumbs } from '../../composables/useBreadcrumbs';

useBreadcrumbs('Add');
</script>
