<!--
  Customers (guests, created when they book). Controller: Admin\Booking\CustomerController@index
  Columns: app/Datatables/Lists/CustomerList.php
-->
<template>
    <Head title="Customers" />

    <ui-page-card title="Customers">
        <ui-data-table :server="table" />
    </ui-page-card>
</template>

<script setup>
defineProps({ table: Object });
</script>
