<!--
  Add / Edit facility (same page; facility.id tells which).
  Controller: Admin\Room\RoomFacilityController@create / @edit
-->
<template>
    <Head :title="isEdit ? 'Edit Facility' : 'Add Facility'" />

    <ui-page-card :title="isEdit ? 'Edit Facility' : 'Add Facility'">
        <form class="cl-form-narrow" @submit.prevent="submit">
            <div class="cl-field">
                <label class="cl-field__label">Category</label>
                <ui-select v-model="form.category" :options="categories" placeholder="Choose a category"
                           :invalid="!!form.errors.category" />
                <div v-if="form.errors.category" class="cl-field__error">{{ form.errors.category }}</div>
            </div>

            <ui-input v-model="form.name" label="Name" :error="form.errors.name"
                      placeholder="e.g. Hair dryer" maxlength="100" required />

            <div class="cl-form-actions">
                <button type="submit" class="cl-btn cl-btn--primary" :disabled="form.processing">
                    {{ isEdit ? 'Save Changes' : 'Add Facility' }}
                </button>
                <Link :href="backUrl" class="cl-btn cl-btn--light">Cancel</Link>
            </div>
        </form>
    </ui-page-card>
</template>

<script setup>
import { computed } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { useBreadcrumbs } from '../../composables/useBreadcrumbs';

const props = defineProps({
    facility: Object,    // { id, name, category } - id is null when adding
    categories: Array,   // [{ value, label }]
    submitUrl: String,
    backUrl: String,
});

const isEdit = computed(() => !!props.facility.id);
useBreadcrumbs(isEdit.value ? 'Edit' : 'Add');

const form = useForm({
    name: props.facility.name ?? '',
    category: props.facility.category ?? '',
});

const submit = () => (isEdit.value ? form.put(props.submitUrl) : form.post(props.submitUrl));
</script>
