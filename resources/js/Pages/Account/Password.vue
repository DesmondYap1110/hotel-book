<!-- Change Password. Controller: Admin\Account\PasswordController -->
<template>
    <Head title="Change Password" />

    <ui-page-card title="Change Password">
        <form class="cl-form-narrow" @submit.prevent="submit">
            <ui-input v-model="form.current_password" type="password" label="Current Password"
                      :error="form.errors.current_password" autocomplete="current-password" required />
            <ui-input v-model="form.password" type="password" label="New Password"
                      :error="form.errors.password" autocomplete="new-password" required />
            <ui-input v-model="form.password_confirmation" type="password" label="Confirm New Password"
                      :error="form.errors.password_confirmation" autocomplete="new-password" required />

            <div class="cl-form-actions">
                <button type="submit" class="cl-btn cl-btn--primary" :disabled="form.processing">Update Password</button>
            </div>
        </form>
    </ui-page-card>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';
import { useBreadcrumbs } from '../../composables/useBreadcrumbs';

const props = defineProps({ submitUrl: String });

useBreadcrumbs('Change Password');

const form = useForm({ current_password: '', password: '', password_confirmation: '' });

// success message comes back as a flash toast (->with('status', ...))
const submit = () => form.put(props.submitUrl, { preserveScroll: true, onSuccess: () => form.reset() });
</script>
