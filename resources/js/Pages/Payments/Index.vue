<!--
  Payments (every attempt at the gateway). Controller: Admin\Booking\PaymentController@index
  Columns / filters: app/Datatables/Lists/PaymentList.php
-->
<template>
    <Head title="Payments" />

    <ui-page-card title="Payments">
        <p class="cl-note">
            <i class="fas fa-exclamation-circle"></i>
            <span>Active gateway: <strong>{{ gateway === 'mock' ? 'Mock (test mode, no real money)' : gateway }}</strong>. Set by APP_ENV - see config/payments.php.</span>
        </p>
        <ui-data-table :server="table" />
    </ui-page-card>
</template>

<script setup>
defineProps({
    table: Object,
    gateway: String,
});
</script>
