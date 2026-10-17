<!--
  Bookings list. Controller: Admin\Booking\BookingController@index
  Columns / filters: app/Datatables/Lists/BookingList.php
-->
<template>
    <Head title="Bookings" />

    <ui-page-card title="Bookings">
        <template #actions>
            <a :href="bookingUrl" target="_blank" rel="noopener" class="cl-btn cl-btn--primary">
                <i class="fas fa-external-link-alt"></i> Open Booking Site
            </a>
        </template>

        <p class="cl-note">
            <i class="fas fa-exclamation-circle"></i>
            <span v-if="gateway === 'mock'">Test mode: payments use the <strong>mock gateway</strong> (no real money). Production uses Billplz.</span>
            <span v-else>Payments go through <strong>{{ gateway }}</strong>. Unpaid bookings release their room after the hold time.</span>
        </p>

        <ui-data-table :server="table" />
    </ui-page-card>
</template>

<script setup>
defineProps({
    table: Object,
    gateway: String,    // 'mock' | 'billplz'
    bookingUrl: String, // public site
});
</script>
