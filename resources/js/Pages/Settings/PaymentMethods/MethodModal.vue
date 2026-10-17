<!--
  Add / Edit payment method in a modal. Used by Settings/PaymentMethods/Index.vue.
  Saves with Inertia (POST store / PUT update); on success the list reloads and the modal closes.
-->
<template>
    <ui-modal :model-value="true" :title="isEdit ? `Edit ${method.name}` : 'Add Payment Method'" @close="$emit('close')">
        <form id="payment-method-form" @submit.prevent="submit">
            <ui-input v-model="form.name" label="Name" :error="form.errors.name" placeholder="e.g. Touch 'n Go eWallet"
                      maxlength="100" required autofocus />

            <div class="cl-field">
                <label class="cl-field__label">Category</label>
                <ui-select v-model="form.category" :options="categoryOptions" :invalid="!!form.errors.category" />
                <div v-if="form.errors.category" class="cl-field__error">{{ form.errors.category }}</div>
            </div>

            <div class="cl-field">
                <label class="cl-field__label">Logo</label>
                <ui-file-upload v-model="form.logo" v-model:busy="uploading" :error="form.errors.logo" max-file-size="2MB" />
                <div class="cl-field__hint">PNG / SVG / JPG, up to 2 MB. Optional.</div>
            </div>

            <ui-switch v-model="form.is_enabled" label="Status" on-text="Enabled" off-text="Disabled" />
        </form>

        <template #footer>
            <button type="button" class="cl-btn cl-btn--light" @click="$emit('close')">Cancel</button>
            <button type="submit" form="payment-method-form" class="cl-btn cl-btn--primary" :disabled="form.processing || uploading">
                <i class="fas fa-save"></i> {{ uploading ? 'Uploading logo…' : form.processing ? 'Saving…' : (isEdit ? 'Save Changes' : 'Add') }}
            </button>
        </template>
    </ui-modal>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    method: Object,      // { id?, name, category, logo_url, is_enabled }
    categories: Array,   // [{ key, label }]
});
const emit = defineEmits(['close']);

const isEdit = computed(() => !!props.method.id);
const categoryOptions = computed(() => props.categories.map((c) => ({ value: c.key, label: c.label })));
const uploading = ref(false);

const form = useForm({
    name: props.method.name ?? '',
    category: props.method.category,
    is_enabled: props.method.is_enabled ?? true,
    // FilePond list: [{ id: 'current', url }] = keep existing logo
    logo: props.method.logo_url ? [{ id: 'current', url: props.method.logo_url }] : [],
});

const base = '/admin/payment-methods';

const submit = () => form
    .transform((data) => ({ ...data, logo: data.logo.map(({ id, upload }) => ({ id: id ?? null, upload: upload ?? null })) }))
    [isEdit.value ? 'put' : 'post'](isEdit.value ? `${base}/${props.method.id}` : base, {
        preserveScroll: true,
        onSuccess: () => emit('close'),
    });
</script>
