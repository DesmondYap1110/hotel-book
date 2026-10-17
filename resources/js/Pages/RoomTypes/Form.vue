<!--
  Add / Edit room type (same page; roomType.id tells which).
  Controller: Admin\Room\RoomTypeController   Validation: app/Http/Requests/RoomTypeRequest.php
-->
<template>
    <Head :title="title" />

    <ui-page-card :title="title" v-model:tab="tab" :tabs="tabs">
        <!-- novalidate: the server checks every field and the error opens its tab -->
        <form class="cl-tabbed-form" novalidate @submit.prevent="submit">
            <p v-if="usage" v-show="tab === 'general'" class="cl-note">
                <i class="fas fa-exclamation-circle"></i>
                <span>Used by {{ usage.rooms }} room(s) and priced at {{ usage.hotels }} hotel(s). Rooms and prices are set per hotel in
                    <Link href="/admin/hotels">Hotels</Link> › Rooms / Room Prices tabs.</span>
            </p>

            <!-- 1. General -->
            <ui-form-section v-show="tab === 'general'">
                <ui-input v-model="form.name" label="Name" :error="form.errors.name" required maxlength="100"
                          placeholder="e.g. Deluxe King" class="is-full" />
                <ui-rich-editor v-model="form.description" label="Description" :error="form.errors.description" :height="150" class="is-full"
                                placeholder="What makes this room nice: size, view, bed, bathroom..." />
                <div class="cl-field is-full">
                    <label class="cl-field__label">Photos <small class="cl-form-table__muted">(first photo is the cover - drag to reorder, up to 10)</small></label>
                    <ui-file-upload v-model="form.images" v-model:busy="uploading" multiple :max-files="10" :error="form.errors.images" />
                </div>
            </ui-form-section>

            <!-- 2. Beds & guests -->
            <ui-form-section v-show="tab === 'beds'">
                <div class="cl-field is-full">
                    <table class="cl-form-table">
                        <thead>
                            <tr>
                                <th>Bed</th>
                                <th style="width: 30%">Quantity</th>
                                <th class="is-center" style="width: 90px">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="bed in beds" :key="bed.key" :class="{ 'is-off': !form[bed.key] }">
                                <td data-label="Bed"><span class="cl-form-table__name"><i class="fas fa-bed"></i> {{ bed.label }}</span></td>
                                <td data-label="Quantity">
                                    <ui-select v-if="form[bed.key]" v-model="form[bed.key]" :options="bedCounts" size="sm" class="cl-form-table__select" />
                                    <span v-else class="cl-form-table__muted">None</span>
                                </td>
                                <td class="is-center" data-label="Action">
                                    <ui-switch :model-value="form[bed.key] > 0" @update:model-value="form[bed.key] = $event ? 1 : 0" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="form.errors.beds" class="cl-field__error">{{ form.errors.beds }}</div>
                </div>

                <div class="cl-field">
                    <label class="cl-field__label">Max adults</label>
                    <ui-select v-model="form.max_adult" :options="guestCounts(1, 10)" :invalid="!!form.errors.max_adult" />
                    <div v-if="form.errors.max_adult" class="cl-field__error">{{ form.errors.max_adult }}</div>
                </div>
                <div class="cl-field">
                    <label class="cl-field__label">Max children</label>
                    <ui-select v-model="form.max_child" :options="guestCounts(0, 10)" :invalid="!!form.errors.max_child" />
                    <div v-if="form.errors.max_child" class="cl-field__error">{{ form.errors.max_child }}</div>
                </div>
            </ui-form-section>

            <!-- 3. Facilities -->
            <ui-form-section v-show="tab === 'facilities'">
                <div class="cl-field is-full">
                    <p class="cl-note">
                        <i class="fas fa-exclamation-circle"></i>
                        <span>Add or rename facilities in <Link href="/admin/room-facilities">Rooms › Room Facilities</Link>.</span>
                    </p>
                    <ui-toggle-table v-model="form.facility_ids" :rows="facilityRows" title="Room Facilities" empty-text="No room facilities yet." />
                </div>
            </ui-form-section>

            <div class="cl-tabs__footer">
                <Link :href="backUrl" class="cl-btn cl-btn--light cl-btn--pill"><i class="fas fa-chevron-left"></i> Back</Link>
                <button type="submit" class="cl-btn cl-btn--gradient cl-btn--pill" :disabled="form.processing || uploading">
                    <i class="fas fa-save"></i>
                    {{ uploading ? 'Uploading photos…' : form.processing ? 'Saving…' : (isEdit ? 'Save Changes' : 'Add Room Type') }}
                </button>
            </div>
        </form>
    </ui-page-card>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { useBreadcrumbs } from '../../composables/useBreadcrumbs';

const props = defineProps({
    roomType: Object,    // fields + facility_ids + images [{ id, url }]
    beds: Array,         // [{ key: 'king_bed', label: 'King' }, ...]
    facilities: Array,   // [{ label, items: [{ id, name }] }] (RoomFacility::grouped)
    usage: Object,       // { rooms, hotels } when editing
    submitUrl: String,
    backUrl: String,
});

const isEdit = computed(() => !!props.roomType.id);
const title = computed(() => (isEdit.value ? `Edit ${props.roomType.name}` : 'Add Room Type'));
if (isEdit.value) useBreadcrumbs(props.roomType.name, 'Edit');
else useBreadcrumbs('Add');

const t = props.roomType;
const uploading = ref(false);

const form = useForm({
    name: t.name ?? '',
    description: t.description ?? '',
    max_adult: t.max_adult ?? 2,
    max_child: t.max_child ?? 0,
    king_bed: t.king_bed ?? 0,
    queen_bed: t.queen_bed ?? 0,
    single_bed: t.single_bed ?? 0,
    facility_ids: [...(t.facility_ids || [])],
    // [{ id, url }] = existing, [{ upload }] = new (FilePond)
    images: (t.images || []).map((img) => ({ ...img })),
});

const bedCounts = [1, 2, 3, 4].map((n) => ({ value: n, label: `${n} bed${n > 1 ? 's' : ''}` }));
const guestCounts = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => from + i).map((n) => ({ value: n, label: String(n) }));

const facilityRows = props.facilities.flatMap((group) => group.items.map((f) => ({
    key: f.id,
    name: f.name,
    category: { label: group.label },
})));

// ---- tabs in the card header ----
// which fields live on which tab (for the red error counts)
const TABS = [
    { key: 'general',    label: 'General',               icon: 'fas fa-door-open',       fields: ['name', 'description', 'images'] },
    { key: 'beds',       label: 'Beds & Guests',         icon: 'fas fa-bed',             fields: ['beds', 'king_bed', 'queen_bed', 'single_bed', 'max_adult', 'max_child'] },
    { key: 'facilities', label: 'Facilities & Services', icon: 'fas fa-concierge-bell',  fields: ['facility_ids'] },
];
const tab = ref('general');
const tabs = computed(() => TABS.map(({ fields, ...t }) => ({
    ...t,
    errors: Object.keys(form.errors).filter((field) => fields.includes(field.split('.')[0])).length,
})));

const submit = () => {
    form
        .transform((data) => ({ ...data, images: data.images.map(({ id, upload }) => ({ id: id ?? null, upload: upload ?? null })) }))
        [isEdit.value ? 'put' : 'post'](props.submitUrl, {
            preserveScroll: true,
            // jump to the first tab that has a problem
            onError: () => { tab.value = tabs.value.find((t) => t.errors)?.key ?? tab.value; },
        });
};
</script>
