<!--
  StaySearch - "where / when / who" bar of the booking site.

  <stay-search :stay="stay" :hotels="hotels" :errors="stayErrors" />   (Home: choose a hotel)
  <stay-search :stay="stay" :hotel-slug="hotel.slug" />                (Hotel page: dates + guests only)

  Search opens /hotels/{slug}?check_in=...&check_out=...&adults=..&children=..
-->
<template>
    <form class="cl-search" :class="{ 'has-hotel': hotels }" @submit.prevent="search">
        <div v-if="hotels" class="cl-field">
            <label class="cl-field__label"><i class="fas fa-hotel"></i> Hotel</label>
            <ui-select v-model="slug" :options="hotelOptions" placeholder="Choose a hotel" :invalid="!!hotelError" />
            <div v-if="hotelError" class="cl-field__error">{{ hotelError }}</div>
        </div>

        <ui-date-picker v-model="dates" mode="range" label="Check-in – Check-out" :min-date="today" :clearable="false"
                        placeholder="Choose your dates" :error="datesError" />

        <div class="cl-field">
            <label class="cl-field__label">Adults</label>
            <ui-select v-model="adults" :options="adultOptions" />
        </div>

        <div class="cl-field">
            <label class="cl-field__label">Children</label>
            <ui-select v-model="children" :options="childOptions" />
        </div>

        <button type="submit" class="cl-btn cl-btn--gradient cl-btn--pill cl-search__btn">
            <i class="fas fa-search"></i> {{ hotels ? 'Search' : 'Update' }}
        </button>
    </form>
</template>

<script setup>
import { ref, computed } from 'vue';
import { router } from '@inertiajs/vue3';

const props = defineProps({
    stay: { type: Object, required: true },   // { check_in, check_out, adults, children }
    hotels: { type: Array, default: null },   // [{ slug, name }] -> show the hotel dropdown
    hotelSlug: { type: String, default: '' }, // fixed hotel (hotel page)
    errors: { type: Object, default: () => ({}) }, // server errors for check_in / check_out
});

const today = new Date().toISOString().slice(0, 10);
const slug = ref(props.hotelSlug || props.hotels?.[0]?.slug || '');
const dates = ref(`${props.stay.check_in} to ${props.stay.check_out}`);
const adults = ref(Number(props.stay.adults) || 2);
const children = ref(Number(props.stay.children) || 0);
const localError = ref('');
const hotelError = ref('');

const hotelOptions = computed(() => (props.hotels || []).map((h) => ({ value: h.slug, label: h.name })));
const adultOptions = [1, 2, 3, 4, 5, 6].map((n) => ({ value: n, label: `${n} adult${n > 1 ? 's' : ''}` }));
const childOptions = [0, 1, 2, 3, 4].map((n) => ({ value: n, label: n ? `${n} child${n > 1 ? 'ren' : ''}` : 'No children' }));
const datesError = computed(() => localError.value || props.errors.check_in?.[0] || props.errors.check_out?.[0] || '');

const search = () => {
    const [checkIn, checkOut] = (dates.value || '').split(' to ');
    localError.value = !checkIn || !checkOut ? 'Choose a check-in and a check-out date.' : '';
    hotelError.value = slug.value ? '' : 'Choose a hotel.';
    if (localError.value || hotelError.value) return;

    router.get(`/hotels/${slug.value}`, { check_in: checkIn, check_out: checkOut, adults: adults.value, children: children.value });
};
</script>
