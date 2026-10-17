<!--
  One booking + its payment attempts. Controller: Admin\Booking\BookingController@show / @cancel
-->
<template>
    <Head :title="`Booking ${booking.reference}`" />

    <ui-page-card :title="`Booking ${booking.reference}`">
        <template #actions>
            <span class="cl-badge" :class="`cl-badge--${booking.badge}`">{{ booking.status_label }}</span>
        </template>

        <p v-if="booking.needs_refund" class="cl-note cl-note--danger">
            <i class="fas fa-exclamation-triangle"></i>
            <span>This booking was cancelled but has a paid payment - refund the guest in the payment gateway.</span>
        </p>
        <p v-if="booking.status === 'confirmed' && !booking.room" class="cl-note cl-note--danger">
            <i class="fas fa-exclamation-triangle"></i>
            <span>Paid after the hold expired and no room of this type was free - assign a room or refund the guest.</span>
        </p>

        <div class="cl-detail-grid">
            <div>
                <h3 class="cl-detail-title">Stay</h3>
                <dl class="cl-detail">
                    <div><dt>Hotel</dt><dd>{{ booking.hotel }}</dd></div>
                    <div><dt>Room type</dt><dd>{{ booking.room_type }}</dd></div>
                    <div><dt>Room</dt><dd>{{ booking.room || '-' }}</dd></div>
                    <div><dt>Check-in</dt><dd>{{ booking.check_in }}</dd></div>
                    <div><dt>Check-out</dt><dd>{{ booking.check_out }} ({{ booking.nights }} night{{ booking.nights > 1 ? 's' : '' }})</dd></div>
                    <div><dt>Guests</dt><dd>{{ booking.guests }}</dd></div>
                    <div v-if="booking.special_requests"><dt>Requests</dt><dd>{{ booking.special_requests }}</dd></div>
                </dl>
            </div>

            <div>
                <h3 class="cl-detail-title">Guest &amp; payment</h3>
                <dl class="cl-detail">
                    <div><dt>Name</dt><dd>{{ booking.guest.name }}</dd></div>
                    <div><dt>Email</dt><dd><a :href="`mailto:${booking.guest.email}`">{{ booking.guest.email }}</a></dd></div>
                    <div><dt>Phone</dt><dd>{{ booking.guest.phone || '-' }}</dd></div>
                    <div><dt>Price / night</dt><dd>{{ money(booking.price_per_night) }}</dd></div>
                    <div><dt>Total</dt><dd><strong>{{ money(booking.total) }}</strong></dd></div>
                    <div><dt>Booked</dt><dd>{{ booking.created_at }}</dd></div>
                    <div v-if="booking.expires_at"><dt>Hold until</dt><dd>{{ booking.expires_at }}</dd></div>
                    <div v-if="booking.paid_at"><dt>Paid</dt><dd>{{ booking.paid_at }}</dd></div>
                    <div v-if="booking.cancelled_at"><dt>Cancelled</dt><dd>{{ booking.cancelled_at }}</dd></div>
                </dl>
            </div>
        </div>

        <h3 class="cl-detail-title">Payments</h3>
        <table class="cl-form-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Gateway</th>
                    <th>Amount</th>
                    <th class="is-center">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in payments" :key="p.id">
                    <td data-label="Date">{{ p.date }}</td>
                    <td data-label="Gateway">{{ p.gateway }}<br><small class="cl-form-table__muted">{{ p.ref }}</small></td>
                    <td data-label="Amount">{{ money(p.amount) }}</td>
                    <td class="is-center" data-label="Status"><span class="cl-badge" :class="`cl-badge--${p.badge}`">{{ p.status }}</span></td>
                </tr>
                <tr v-if="!payments.length">
                    <td colspan="4" class="cl-form-table__empty">No payment attempts.</td>
                </tr>
            </tbody>
        </table>

        <div class="cl-tabs__footer">
            <Link :href="backUrl" class="cl-btn cl-btn--light cl-btn--pill"><i class="fas fa-chevron-left"></i> Back</Link>
            <button v-if="booking.can_cancel" type="button" class="cl-btn cl-btn--danger cl-btn--pill" @click="cancel">
                <i class="fas fa-ban"></i> Cancel Booking
            </button>
        </div>
    </ui-page-card>
</template>

<script setup>
import { router } from '@inertiajs/vue3';
import Swal from 'sweetalert2';
import { useBreadcrumbs } from '../../composables/useBreadcrumbs';
import { money } from '../../composables/useMoney';

const props = defineProps({
    booking: Object,
    payments: Array,
    cancelUrl: String,
    backUrl: String,
});

useBreadcrumbs(props.booking.reference);

const cancel = async () => {
    const { isConfirmed } = await Swal.fire({
        title: `Cancel ${props.booking.reference}?`,
        text: props.booking.paid_at ? 'The room is released. This booking was paid - refund the guest in the payment gateway.' : 'The room is released for other guests.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, cancel it',
        cancelButtonText: 'Keep it',
        confirmButtonColor: getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim(),
        cancelButtonColor: '#6c757d',
    });
    if (isConfirmed) router.patch(props.cancelUrl, {}, { preserveScroll: true });
};
</script>
