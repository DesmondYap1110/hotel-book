<!-- Login page (no admin layout). Controller: Auth\LoginController@showLoginForm -->
<template>
    <Head title="Login" />

    <div class="cl-auth">
        <div class="cl-card cl-auth__card">
            <div class="cl-auth__form">
                <img src="/images/clementra-icon.png" alt="Clementra" class="cl-auth__logo">
                <div class="cl-auth__brand">CLEMENTRA</div>
                <h1 class="cl-auth__title">Login</h1>

                <form @submit.prevent="submit">
                    <ui-input v-model="form.email" type="email" label="Email" :error="form.errors.email"
                              placeholder="hello@example.com" autocomplete="username" required autofocus id="email" />

                    <ui-input v-model="form.password" type="password" label="Password" :error="form.errors.password"
                              placeholder="••••••••" autocomplete="current-password" required id="password" />

                    <label class="cl-check">
                        <input v-model="form.remember" type="checkbox">
                        Remember me
                    </label>

                    <button type="submit" class="cl-btn cl-btn--primary cl-btn--lg cl-btn--block" :disabled="form.processing">
                        {{ form.processing ? 'Signing in…' : 'Login' }}
                    </button>
                </form>
            </div>

            <div class="cl-auth__hero">
                <h2>Welcome Back!</h2>
                <p>Your hotel operations, reservations, and room management &mdash; all in one place.</p>
                <HotelIllustration />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';
import HotelIllustration from '../../components/illustrations/HotelIllustration.vue';

const props = defineProps({ submitUrl: String });

const form = useForm({ email: '', password: '', remember: false });

const submit = () => form.post(props.submitUrl, { onFinish: () => form.reset('password') });
</script>
