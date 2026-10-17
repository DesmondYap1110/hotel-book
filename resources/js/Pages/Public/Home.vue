<!--
  Booking site home: search + the hotels. Controller: Public\BookingController@home
-->
<template>
    <Head title="Book your stay" />

    <section class="cl-hero">
        <div class="cl-public__container">
            <h1 class="cl-hero__title">Stay with Clementra</h1>
            <p class="cl-hero__text">Comfortable rooms across Malaysia. Book in minutes, pay securely with FPX, card or e-wallet.</p>
            <stay-search :stay="stay" :hotels="hotels" />
        </div>
    </section>

    <section class="cl-public__container cl-section">
        <h2 class="cl-section__title">Our hotels</h2>

        <div v-if="hotels.length" class="cl-hotel-grid">
            <Link v-for="hotel in hotels" :key="hotel.slug" :href="hotelUrl(hotel)" class="cl-hotel-card">
                <div class="cl-hotel-card__photo"><img :src="hotel.photo_url" :alt="hotel.name" loading="lazy"></div>
                <div class="cl-hotel-card__body">
                    <div v-if="hotel.stars" class="cl-stars" :aria-label="`${hotel.stars} stars`">
                        <i v-for="n in hotel.stars" :key="n" class="fas fa-star"></i>
                    </div>
                    <h3 class="cl-hotel-card__name">{{ hotel.name }}</h3>
                    <p v-if="hotel.location" class="cl-hotel-card__meta"><i class="fas fa-map-marker-alt"></i> {{ hotel.location }}</p>
                    <p v-if="hotel.tagline" class="cl-hotel-card__tagline">{{ hotel.tagline }}</p>
                    <div class="cl-hotel-card__foot">
                        <span v-if="hotel.from_price" class="cl-price">from <strong>{{ money(hotel.from_price) }}</strong> / night</span>
                        <span v-else class="cl-price cl-price--muted">Rooms coming soon</span>
                        <span class="cl-hotel-card__cta">View rooms <i class="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            </Link>
        </div>
        <p v-else class="cl-list-empty">No hotels are open for booking yet.</p>
    </section>
</template>

<script setup>
import StaySearch from '../../components/Public/StaySearch.vue';
import { money } from '../../composables/useMoney';

const props = defineProps({
    hotels: Array, // [{ slug, name, brand, tagline, location, stars, photo_url, from_price }]
    stay: Object,  // default dates + guests
});

const hotelUrl = (hotel) => `/hotels/${hotel.slug}?${new URLSearchParams(props.stay)}`;
</script>
