<!--
  One hotel: room types free for the chosen dates, with prices. Controller: Public\BookingController@hotel
-->
<template>
    <Head :title="hotel.name" />

    <section class="cl-hotel-head">
        <div class="cl-public__container cl-hotel-head__inner">
            <img :src="hotel.photo_url" :alt="hotel.name" class="cl-hotel-head__photo">
            <div>
                <div v-if="hotel.stars" class="cl-stars"><i v-for="n in hotel.stars" :key="n" class="fas fa-star"></i></div>
                <h1 class="cl-hotel-head__name">{{ hotel.name }}</h1>
                <p v-if="hotel.address" class="cl-hotel-head__meta">
                    <i class="fas fa-map-marker-alt"></i> {{ hotel.address }}
                    <a v-if="hotel.map_url" :href="hotel.map_url" target="_blank" rel="noopener">Map</a>
                </p>
                <p v-if="hotel.tagline" class="cl-hotel-head__tagline">{{ hotel.tagline }}</p>
            </div>
        </div>
    </section>

    <div class="cl-public__container">
        <div class="cl-search-wrap">
            <stay-search :stay="stay" :hotel-slug="hotel.slug" :errors="stayErrors" />
        </div>

        <div class="cl-hotel-layout">
            <!-- room types -->
            <section>
                <h2 class="cl-section__title">
                    Choose your room
                    <small v-if="rooms.length">{{ nightsLabel }} · {{ guestsLabel }}</small>
                </h2>

                <article v-for="room in rooms" :key="room.room_type_id" class="cl-room-card" :class="{ 'is-unavailable': !canBook(room) }">
                    <div class="cl-room-card__photo">
                        <img v-if="room.image" :src="room.image" :alt="room.name" loading="lazy">
                        <i v-else class="fas fa-bed"></i>
                    </div>

                    <div class="cl-room-card__body">
                        <h3 class="cl-room-card__name">{{ room.name }}</h3>
                        <ul class="cl-room-card__facts">
                            <li v-if="room.beds"><i class="fas fa-bed"></i> {{ room.beds }}</li>
                            <li v-if="room.max_adult"><i class="fas fa-user-friends"></i> Up to {{ room.max_adult }} adults<template v-if="room.max_child">, {{ room.max_child }} children</template></li>
                        </ul>
                        <div v-if="room.description" class="cl-room-card__desc" v-html="room.description"></div>
                    </div>

                    <div class="cl-room-card__book">
                        <div class="cl-price"><strong>{{ money(room.price) }}</strong> / night</div>
                        <div class="cl-room-card__total">{{ money(room.total) }} for {{ room.nights }} night{{ room.nights > 1 ? 's' : '' }}</div>

                        <template v-if="canBook(room)">
                            <div v-if="room.free_rooms <= 3" class="cl-room-card__left"><i class="fas fa-fire"></i> Only {{ room.free_rooms }} left</div>
                            <Link :href="checkoutUrl(room)" class="cl-btn cl-btn--gradient cl-btn--pill">Book now</Link>
                        </template>
                        <div v-else class="cl-room-card__why">
                            {{ !room.fits ? 'Too many guests for this room' : 'Sold out for your dates' }}
                        </div>
                    </div>
                </article>

                <p v-if="!rooms.length" class="cl-list-empty">
                    {{ Object.keys(stayErrors).length ? 'Please fix the dates above.' : 'No rooms can be booked online at this hotel yet.' }}
                </p>
            </section>

            <!-- hotel info -->
            <aside class="cl-hotel-info">
                <div class="cl-info-card">
                    <h3>Good to know</h3>
                    <ul class="cl-info-list">
                        <li v-if="hotel.check_in_time"><i class="fas fa-sign-in-alt"></i> Check-in from <strong>{{ hotel.check_in_time }}</strong></li>
                        <li v-if="hotel.check_out_time"><i class="fas fa-sign-out-alt"></i> Check-out by <strong>{{ hotel.check_out_time }}</strong></li>
                        <li v-if="hotel.phone"><i class="fas fa-phone-alt"></i> {{ hotel.phone }}</li>
                        <li v-if="hotel.email"><i class="fas fa-envelope"></i> {{ hotel.email }}</li>
                    </ul>
                </div>

                <div v-if="hotel.facilities.length" class="cl-info-card">
                    <h3>Facilities</h3>
                    <div class="cl-chips"><span v-for="f in hotel.facilities" :key="f" class="cl-chip">{{ f }}</span></div>
                </div>

                <div v-if="hotel.description" class="cl-info-card">
                    <h3>About the hotel</h3>
                    <div class="cl-rich-text" v-html="hotel.description"></div>
                </div>

                <div v-if="hotel.faqs.length" class="cl-info-card">
                    <h3>FAQ</h3>
                    <ui-accordion v-for="(faq, i) in hotel.faqs" :key="i" :title="faq.question">
                        <div class="cl-rich-text" v-html="faq.answer"></div>
                    </ui-accordion>
                </div>
            </aside>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import StaySearch from '../../components/Public/StaySearch.vue';
import { money } from '../../composables/useMoney';

const props = defineProps({
    hotel: Object,       // see BookingController::hotelInfo
    stay: Object,        // { check_in, check_out, adults, children }
    stayErrors: Object,  // { check_in: [...] } when the dates in the URL were wrong
    rooms: Array,        // BookingService::availability
});

const canBook = (room) => room.fits && room.free_rooms > 0;
const nights = computed(() => props.rooms[0]?.nights ?? 0);
const nightsLabel = computed(() => `${nights.value} night${nights.value > 1 ? 's' : ''}`);
const guestsLabel = computed(() => {
    const { adults, children } = props.stay;
    return `${adults} adult${adults > 1 ? 's' : ''}${children ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}`;
});

const checkoutUrl = (room) => `/hotels/${props.hotel.slug}/checkout?${new URLSearchParams({ ...props.stay, room_type_id: room.room_type_id })}`;
</script>
