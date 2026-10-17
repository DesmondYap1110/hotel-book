<!-- Add Hotel. Controller: Admin\Hotel\HotelController@create. Form: components/Hotels/Add.vue -->
<template>
    <Head title="Add Hotel" />
    <HotelAdd />
</template>

<script setup>
import HotelAdd from '../../components/Hotels/Add.vue';
import { useBreadcrumbs } from '../../composables/useBreadcrumbs';

useBreadcrumbs('Add');
</script>
