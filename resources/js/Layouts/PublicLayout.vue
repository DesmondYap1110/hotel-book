<!--
  Customer booking site layout (every page in Pages/Public/* gets it - see app.js).
  Styles: resources/sass/layouts/_public.scss
-->
<template>
    <div class="cl-public">
        <!-- local / staging: the mock gateway is active, no real money moves -->
        <div v-if="page.props.paymentsMock" class="cl-public__testbar">
            <i class="fas fa-flask"></i> Test mode - payments use the mock gateway. No real money is charged.
        </div>

        <header class="cl-public__header">
            <div class="cl-public__container cl-public__header-inner">
                <Link href="/" class="cl-public__brand">
                    <img src="/images/clementra-icon.png" alt="">
                    <span>CLEMENTRA</span>
                </Link>
                <nav class="cl-public__nav">
                    <Link href="/"><i class="fas fa-hotel"></i> Our Hotels</Link>
                </nav>
            </div>
        </header>

        <div v-if="flash" class="cl-public__container">
            <div class="cl-public__flash"><i class="fas fa-info-circle"></i> {{ flash }}</div>
        </div>

        <main class="cl-public__main">
            <slot />
        </main>

        <footer class="cl-public__footer">
            <div class="cl-public__container">
                <span>© {{ year }} Clementra Hotels. All rights reserved.</span>
                <span><i class="fas fa-lock"></i> Secure payment · FPX online banking, cards &amp; e-wallets</span>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

const page = usePage();
const flash = computed(() => page.props.flash?.status);
const year = new Date().getFullYear();
</script>
