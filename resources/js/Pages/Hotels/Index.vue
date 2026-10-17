<!--
  Hotels list (HQ + branches). Controller: Admin\Hotel\HotelController@index
  Columns / filters / buttons: app/Datatables/Lists/HotelList.php
-->
<template>
    <Head title="Hotels" />

    <ui-page-card title="Hotels">
        <template #actions>
            <Link :href="createUrl" class="cl-btn cl-btn--primary">
                <i class="fas fa-plus"></i> {{ hq ? 'Add Branch' : 'Add Headquarters' }}
            </Link>
        </template>

        <div class="cl-callout">
            <i class="fas fa-building"></i>
            <template v-if="hq">
                <span>Headquarters: <Link :href="hq.editUrl">{{ hq.name }}</Link></span>
                <span>&middot; {{ hq.branches }} {{ hq.branches === 1 ? 'branch' : 'branches' }}</span>
            </template>
            <span v-else>No headquarters yet. Add the headquarters first, then its branches.</span>
        </div>

        <ui-data-table :server="table" />
    </ui-page-card>
</template>

<script setup>
defineProps({
    table: Object,
    createUrl: String,
    hq: Object, // { name, editUrl, branches } or null
});
</script>
