<!--
  Guest's booking page (signed link): result after paying, or "pay now" while the hold lasts.
  Controller: Public\BookingController@show
-->
<template>
    <Head :title="`Booking ${booking.reference}`" />

    <div class="cl-public__container cl-section cl-booking">
        <div class="cl-status" :class="`cl-status--${booking.badge}`">
            <div class="cl-status__icon"><i class="fas" :class="statusIcon"></i></div>
            <h1 class="cl-status__title">{{ headline }}</h1>
            <p class="cl-status__text">{{ subline }}</p>
            <div class="cl-status__ref">Booking reference <strong>{{ booking.reference }}</strong></div>

            <form v-if="payUrl" class="cl-status__pay" @submit.prevent="payNow">
                <button type="submit" class="cl-btn cl-btn--gradient cl-btn--pill" :disabled="paying">
                    <i class="fas fa-lock"></i> {{ paying ? 'Opening payment…' : `Pay ${money(booking.total, booking.currency)}` }}
                </button>
                <div v-if="countdown" class="cl-status__hold"><i class="fas fa-clock"></i> Room held for {{ countdown }}</div>
            </form>
            <Link v-else-if="booking.status !== 'confirmed'" :href="`/hotels/${hotel.slug}`" class="cl-btn cl-btn--light cl-btn--pill">
                Book again
            </Link>
        </div>

        <div class="cl-booking__grid">
            <div class="cl-info-card">
                <h3>Your stay</h3>
                <dl class="cl-summary__list">
                    <div><dt>Hotel</dt><dd>{{ hotel.name }}</dd></div>
                    <div><dt>Room</dt><dd>{{ booking.room_type }}<template v-if="booking.room_number"> · Room {{ booking.room_number }}</template></dd></div>
                    <div><dt>Check-in</dt><dd>{{ booking.check_in }}<small v-if="hotel.check_in_time"> from {{ hotel.check_in_time }}</small></dd></div>
                    <div><dt>Check-out</dt><dd>{{ booking.check_out }}<small v-if="hotel.check_out_time"> by {{ hotel.check_out_time }}</small></dd></div>
                    <div><dt>Guests</dt><dd>{{ booking.adults }} adult(s){{ booking.children ? `, ${booking.children} child(ren)` : '' }}</dd></div>
                    <div v-if="booking.special_requests"><dt>Requests</dt><dd>{{ booking.special_requests }}</dd></div>
                </dl>
                <div class="cl-summary__total">
                    <span>Total ({{ booking.nights }} night{{ booking.nights > 1 ? 's' : '' }})</span>
                    <strong>{{ money(booking.total, booking.currency) }}</strong>
                </div>
                <p v-if="booking.paid_at" class="cl-summary__note"><i class="fas fa-check-circle"></i> Paid on {{ booking.paid_at }}</p>
            </div>

            <div class="cl-info-card">
                <h3>Guest</h3>
                <ul class="cl-info-list">
                    <li><i class="fas fa-user"></i> {{ booking.guest.name }}</li>
                    <li><i class="fas fa-envelope"></i> {{ booking.guest.email }}</li>
                    <li v-if="booking.guest.phone"><i class="fas fa-phone-alt"></i> {{ booking.guest.phone }}</li>
                </ul>
                <h3>Need help?</h3>
                <ul class="cl-info-list">
                    <li v-if="hotel.phone"><i class="fas fa-phone-alt"></i> {{ hotel.phone }}</li>
                    <li v-if="hotel.email"><i class="fas fa-envelope"></i> {{ hotel.email }}</li>
                    <li v-if="hotel.address"><i class="fas fa-map-marker-alt"></i> {{ hotel.address }}</li>
                </ul>
                <p class="cl-summary__note"><i class="fas fa-bookmark"></i> Keep this page's link - it is your booking link.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { router } from '@inertiajs/vue3';
import { money } from '../../composables/useMoney';

const props = defineProps({
    booking: Object, // see BookingController@show
    hotel: Object,
    payUrl: String,  // signed "pay again" URL while the hold lasts, else null
});

const STATUS = {
    confirmed:       { icon: 'fa-check', title: 'Your booking is confirmed', text: 'We look forward to welcoming you.' },
    pending_payment: { icon: 'fa-hourglass-half', title: 'Waiting for payment', text: 'Your room is held. Complete the payment to confirm it.' },
    expired:         { icon: 'fa-times', title: 'Booking expired', text: 'The payment was not completed in time, so the room was released.' },
    cancelled:       { icon: 'fa-ban', title: 'Booking cancelled', text: 'This booking was cancelled by the hotel.' },
};
const info = computed(() => STATUS[props.booking.status] ?? STATUS.pending_payment);
const statusIcon = computed(() => info.value.icon);
const headline = computed(() => info.value.title);
const subline = computed(() => (props.booking.status === 'pending_payment' && props.booking.last_payment === 'failed'
    ? 'The last payment did not go through. Your room is still held - you can try again.'
    : info.value.text));

// hold countdown (mm:ss); reloads the page when the hold ends
const countdown = ref('');
let timer = null;
const tick = () => {
    const left = Math.max(0, new Date(props.booking.expires_at) - Date.now());
    countdown.value = `${Math.floor(left / 60000)}:${String(Math.floor((left % 60000) / 1000)).padStart(2, '0')}`;
    if (!left) { clearInterval(timer); router.reload(); }
};
onMounted(() => { if (props.booking.expires_at) { tick(); timer = setInterval(tick, 1000); } });
onBeforeUnmount(() => clearInterval(timer));

const paying = ref(false);
const payNow = () => router.post(props.payUrl, {}, { onStart: () => { paying.value = true; }, onFinish: () => { paying.value = false; } });
</script>
