<!--
  Guest details + pay. Controller: Public\BookingController@checkout / @store
  On submit the server holds a room and sends the browser to the payment gateway.
-->
<template>
    <Head title="Checkout" />

    <div class="cl-public__container cl-section">
        <Link :href="backUrl" class="cl-back"><i class="fas fa-chevron-left"></i> Back to rooms</Link>
        <h1 class="cl-section__title">Your details</h1>

        <form class="cl-checkout" @submit.prevent="submit">
            <div class="cl-info-card">
                <div class="cl-form-grid">
                    <ui-input v-model="form.name" label="Full name" autocomplete="name" :error="form.errors.name" class="is-full"
                              placeholder="As in your IC / passport" />
                    <ui-input v-model="form.email" label="Email" type="email" autocomplete="email" :error="form.errors.email"
                              placeholder="you@example.com" />
                    <ui-input v-model="form.phone" label="Mobile number" type="tel" autocomplete="tel" :error="form.errors.phone"
                              placeholder="+60 12-345 6789" />
                    <ui-textarea v-model="form.special_requests" label="Special requests (optional)" :rows="3" class="is-full"
                                 :error="form.errors.special_requests" placeholder="e.g. late arrival, high floor, baby cot" />
                </div>

                <label class="cl-agree" :class="{ 'is-invalid': form.errors.agree }">
                    <input v-model="form.agree" type="checkbox">
                    <span>I agree to the hotel's booking and cancellation policy.</span>
                </label>
                <div v-if="form.errors.agree" class="cl-field__error">{{ form.errors.agree }}</div>

                <div v-if="hotel.cancellation_policy" class="cl-policy">
                    <strong>Cancellation policy</strong>
                    <div class="cl-rich-text" v-html="hotel.cancellation_policy"></div>
                </div>

                <div v-if="generalError" class="cl-alert-inline"><i class="fas fa-exclamation-circle"></i> {{ generalError }}</div>
            </div>

            <!-- summary -->
            <aside class="cl-summary">
                <img :src="hotel.photo_url" :alt="hotel.name" class="cl-summary__photo">
                <div class="cl-summary__body">
                    <h3>{{ hotel.name }}</h3>
                    <p class="cl-summary__room">{{ room.name }}</p>
                    <dl class="cl-summary__list">
                        <div><dt>Check-in</dt><dd>{{ niceDate(stay.check_in) }}<small v-if="hotel.check_in_time"> from {{ hotel.check_in_time }}</small></dd></div>
                        <div><dt>Check-out</dt><dd>{{ niceDate(stay.check_out) }}<small v-if="hotel.check_out_time"> by {{ hotel.check_out_time }}</small></dd></div>
                        <div><dt>Guests</dt><dd>{{ stay.adults }} adult(s){{ stay.children ? `, ${stay.children} child(ren)` : '' }}</dd></div>
                        <div><dt>{{ money(room.price) }} × {{ room.nights }} night{{ room.nights > 1 ? 's' : '' }}</dt><dd>{{ money(room.total) }}</dd></div>
                    </dl>
                    <div class="cl-summary__total"><span>Total</span><strong>{{ money(room.total) }}</strong></div>

                    <button type="submit" class="cl-btn cl-btn--gradient cl-btn--pill cl-btn--block" :disabled="form.processing">
                        <i class="fas fa-lock"></i> {{ form.processing ? 'Opening payment…' : `Pay ${money(room.total)}` }}
                    </button>
                    <p class="cl-summary__note">
                        <i class="fas fa-clock"></i> Your room is held for {{ holdMins }} minutes while you pay.
                        <template v-if="isMock"><br><i class="fas fa-flask"></i> Test mode: you will see the mock payment page.</template>
                    </p>
                </div>
            </aside>
        </form>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { money } from '../../composables/useMoney';

const props = defineProps({
    hotel: Object,
    stay: Object,     // { check_in, check_out, adults, children }
    room: Object,     // the chosen room type (availability row)
    isMock: Boolean,  // mock gateway (local / staging)
    holdMins: Number,
});

const form = useForm({
    ...props.stay,
    room_type_id: props.room.room_type_id,
    name: '',
    email: '',
    phone: '',
    special_requests: '',
    agree: false,
});

const backUrl = computed(() => `/hotels/${props.hotel.slug}?${new URLSearchParams(props.stay)}`);
// errors that belong to no field on this page (room sold out, payment page down, dates)
const generalError = computed(() => form.errors.room_type_id || form.errors.payment || form.errors.check_in || form.errors.check_out);

const niceDate = (ymd) => new Date(`${ymd}T00:00:00`).toLocaleDateString('en-MY', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

// the server answers with a redirect to the payment gateway (Inertia follows it as a full page load)
const submit = () => form.post(`/hotels/${props.hotel.slug}/book`, { preserveScroll: true });
</script>
