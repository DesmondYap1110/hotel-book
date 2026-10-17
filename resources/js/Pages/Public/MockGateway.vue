<!--
  The FAKE payment gateway (local / staging only). Looks like a gateway checkout, moves no money.
  "Pay" = the gateway reports paid, "Fail" = reports failed. Controller: Public\MockGatewayController
-->
<template>
    <Head title="Mock Payment Gateway" />

    <div class="cl-gateway">
        <div class="cl-gateway__card">
            <div class="cl-gateway__badge"><i class="fas fa-flask"></i> MOCK GATEWAY · TEST MODE · NO REAL MONEY</div>

            <div class="cl-gateway__head">
                <div>
                    <div class="cl-gateway__merchant">{{ merchant }}</div>
                    <div class="cl-gateway__desc">{{ description }}</div>
                </div>
                <div class="cl-gateway__amount">{{ money(payment.amount, payment.currency) }}</div>
            </div>

            <div class="cl-gateway__payer"><i class="fas fa-user"></i> {{ payer.name }} · {{ payer.email }}</div>

            <template v-if="payment.status === 'pending'">
                <h3 class="cl-gateway__title">Choose a payment method</h3>
                <div v-for="group in methods" :key="group.key" class="cl-gateway__group">
                    <div class="cl-gateway__group-title"><i :class="group.icon"></i> {{ group.label }}</div>
                    <div class="cl-gateway__methods">
                        <label v-for="m in group.items" :key="m.key" class="cl-gateway__method" :class="{ 'is-selected': method === m.key }">
                            <input v-model="method" type="radio" :value="m.key">
                            <img v-if="m.logo_url" :src="m.logo_url" :alt="m.name">
                            <span>{{ m.name }}</span>
                        </label>
                    </div>
                </div>
                <p v-if="!methods.length" class="cl-gateway__desc">This hotel has no online payment methods switched on - the mock accepts any.</p>

                <div class="cl-gateway__actions">
                    <button type="button" class="cl-btn cl-btn--gradient cl-btn--pill" :disabled="busy" @click="complete('paid')">
                        <i class="fas fa-check"></i> Pay {{ money(payment.amount, payment.currency) }}
                    </button>
                    <button type="button" class="cl-btn cl-btn--light cl-btn--pill" :disabled="busy" @click="complete('failed')">
                        <i class="fas fa-times"></i> Simulate failed payment
                    </button>
                </div>
            </template>
            <p v-else class="cl-gateway__desc">This bill is already {{ payment.status }}.</p>

            <a :href="cancelUrl" class="cl-gateway__cancel">Cancel and return to the hotel</a>
            <div class="cl-gateway__ref">Bill {{ payment.ref }}</div>
        </div>
    </div>
</template>

<script>
// a gateway page: no booking-site header / footer
export default { layout: null };
</script>

<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import { money } from '../../composables/useMoney';

const props = defineProps({
    payment: Object,     // { ref, amount, currency, status }
    merchant: String,
    description: String,
    payer: Object,
    methods: Array,      // the hotel's accepted methods, grouped
    completeUrl: String, // signed
    cancelUrl: String,
});

const method = ref(props.methods[0]?.items[0]?.key ?? '');
const busy = ref(false);

const complete = (outcome) => router.post(props.completeUrl, { outcome, method: method.value }, {
    onStart: () => { busy.value = true; },
    onFinish: () => { busy.value = false; },
});
</script>
