<!--
  Add / Edit hotel (Headquarters or Branch). Same page for both; hotel.id tells which.
  Controller: Admin\Hotel\HotelController@create / @edit   Validation: app/Http/Requests/HotelRequest.php
-->
<template>
    <Head :title="title" />

    <form @submit.prevent="submit">
        <ui-tab-layout v-model="tab" :tabs="tabs">
            <template #header>
                <div class="cl-tab-summary">
                    <!-- one photo per hotel (building placeholder until uploaded) -->
                    <ui-file-upload v-model="form.photo" v-model:busy="uploading" variant="avatar"
                                    :placeholder="hotel.photo_placeholder" :error="form.errors.photo" />

                    <!-- current hotel + jump to another hotel (HQ first). The dot follows the Status switch. -->
                    <ui-record-switcher :current="switcherCurrent" :items="hotels" :current-id="hotel.id" />
                    <div v-if="form.errors.type" class="cl-field__error cl-tab-summary__note">{{ form.errors.type }}</div>
                    <div v-else-if="!isEdit && hotel.type === 'headquarters'" class="cl-field__hint cl-tab-summary__note">
                        The first hotel is the headquarters. Every hotel added after it is a branch.
                    </div>
                </div>
            </template>

            <!-- 1. General -->
            <template #general>
                <ui-form-section>
                    <ui-switch v-model="form.status" label="Status" on-value="active" off-value="inactive"
                               on-text="Active" off-text="Inactive" :error="form.errors.status" />

                    <ui-input v-model="form.name" label="Hotel name" :error="form.errors.name" required
                              placeholder="e.g. Meriton Suites Herschel Street, Brisbane" class="is-full" />
                    <ui-input v-model="form.brand" label="Brand / group" :error="form.errors.brand" placeholder="e.g. Meriton Suites" />

                    <div class="cl-field">
                        <label class="cl-field__label">Star rating</label>
                        <ui-select v-model="form.star_rating" :options="starOptions" placeholder="Not rated" />
                        <div v-if="form.errors.star_rating" class="cl-field__error">{{ form.errors.star_rating }}</div>
                    </div>

                    <ui-input v-model="form.tagline" label="Tagline" :error="form.errors.tagline" class="is-full"
                              placeholder="e.g. Sky-high value in the Brisbane CBD" />
                    <ui-rich-editor v-model="form.description" label="Description" :error="form.errors.description" class="is-full" />

                    <template v-if="form.type === 'headquarters'">
                        <ui-input v-model="form.legal_name" label="Legal / company name" :error="form.errors.legal_name"
                                  placeholder="e.g. Meriton Property Services Pty Ltd" />
                        <ui-input v-model="form.registration_no" label="Registration no. (ABN / SSM)" :error="form.errors.registration_no" />
                    </template>
                </ui-form-section>
            </template>

            <!-- 2. Location -->
            <template #location>
                <ui-form-section>
                    <ui-input v-model="form.address_line1" label="Address" :error="form.errors.address_line1" required
                              placeholder="e.g. 43 Herschel Street" class="is-full" />
                    <ui-input v-model="form.address_line2" label="Address line 2" :error="form.errors.address_line2" class="is-full" />
                    <ui-input v-model="form.city" label="City" :error="form.errors.city" required />
                    <ui-input v-model="form.state" label="State" :error="form.errors.state" />
                    <ui-input v-model="form.postcode" label="Postcode" :error="form.errors.postcode" />
                    <ui-input v-model="form.country" label="Country" :error="form.errors.country" required />
                    <ui-input v-model="form.latitude" label="Latitude" :error="form.errors.latitude" inputmode="decimal" placeholder="-27.4669" />
                    <ui-input v-model="form.longitude" label="Longitude" :error="form.errors.longitude" inputmode="decimal" placeholder="153.0179" />
                    <ui-input v-model="form.map_url" label="Google Maps link" :error="form.errors.map_url" type="url" class="is-full" />
                </ui-form-section>
            </template>

            <!-- 3. Contact -->
            <template #contact>
                <ui-form-section>
                    <ui-input v-model="form.email" label="Email" type="email" :error="form.errors.email" />
                    <ui-input v-model="form.website" label="Website" type="url" :error="form.errors.website" placeholder="https://" />

                    <!-- Phone numbers: one row each -->
                    <div class="cl-field is-full">
                        <table class="cl-form-table">
                            <thead>
                                <tr>
                                    <th style="width: 34%">Phone</th>
                                    <th>Number</th>
                                    <th class="is-center" style="width: 90px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(phone, i) in form.phones" :key="i">
                                    <td data-label="Phone">
                                        <input v-model="phone.label" class="cl-form-table__input" placeholder="e.g. Australia, Hotel direct">
                                    </td>
                                    <td data-label="Number">
                                        <input v-model="phone.number" class="cl-form-table__input" placeholder="e.g. +61 7 3999 8000"
                                               :class="{ 'is-invalid': form.errors[`phones.${i}.number`] }">
                                        <div v-if="form.errors[`phones.${i}.number`]" class="cl-field__error">{{ form.errors[`phones.${i}.number`] }}</div>
                                    </td>
                                    <td class="is-center" data-label="Action">
                                        <ui-icon-button icon="fas fa-trash" title="Remove" variant="soft-danger" size="sm" @click="form.phones.splice(i, 1)" />
                                    </td>
                                </tr>
                                <tr v-if="!form.phones.length">
                                    <td colspan="3" class="cl-form-table__empty">No phone numbers yet.</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="3">
                                        <button type="button" class="cl-form-table__add" @click="form.phones.push({ label: '', number: '' })">
                                            <i class="fas fa-plus"></i> Add phone number
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <!-- Social media: switch a network on to add its link -->
                    <div class="cl-field is-full">
                        <table class="cl-form-table">
                            <thead>
                                <tr>
                                    <th style="width: 34%">Social Media</th>
                                    <th>Link</th>
                                    <th class="is-center" style="width: 90px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="network in options.socialNetworks" :key="network" :class="{ 'is-off': !socialOn[network] }">
                                    <td data-label="Social Media">
                                        <span class="cl-form-table__name">
                                            <i class="fab" :class="socialIcon(network)"></i> {{ socialLabel(network) }}
                                        </span>
                                    </td>
                                    <td data-label="Link">
                                        <input v-if="socialOn[network]" v-model="form.social_links[network]" type="url"
                                               class="cl-form-table__input" :placeholder="`https://${network === 'x' ? 'x' : network}.com/...`"
                                               :class="{ 'is-invalid': form.errors[`social_links.${network}`] }">
                                        <span v-else class="cl-form-table__muted">Not used</span>
                                        <div v-if="form.errors[`social_links.${network}`]" class="cl-field__error">{{ form.errors[`social_links.${network}`] }}</div>
                                    </td>
                                    <td class="is-center" data-label="Action">
                                        <ui-switch :model-value="socialOn[network]" @update:model-value="toggleSocial(network, $event)" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ui-form-section>
            </template>

            <!-- 4. Stay & policies -->
            <template #stay>
                <ui-form-section>
                    <ui-date-picker v-model="form.check_in_time" mode="time" label="Check-in from" placeholder="e.g. 3:00 PM" :error="form.errors.check_in_time" />
                    <ui-date-picker v-model="form.check_out_time" mode="time" label="Check-out by" placeholder="e.g. 10:00 AM" :error="form.errors.check_out_time" />
                    <ui-input v-model="form.reception_hours" label="Reception / guest services hours" :error="form.errors.reception_hours"
                              placeholder="e.g. 24 hours" class="is-full" />
                    <ui-rich-editor v-model="form.late_arrival_note" label="Early / late arrival" :error="form.errors.late_arrival_note" :height="130" class="is-full"
                                 placeholder="e.g. Bookings not claimed by 11pm on arrival are released and the first night charged." />
                    <ui-rich-editor v-model="form.cancellation_policy" label="Cancellation policy" :error="form.errors.cancellation_policy" :height="130" class="is-full" />
                    <ui-rich-editor v-model="form.house_rules" label="House rules" :error="form.errors.house_rules" :height="130" class="is-full"
                                 hint="Visitors, curfew, pets, smoking, minimum age..." />
                </ui-form-section>
            </template>

            <!-- 5. Parking & payment -->
            <template #payment>
                <ui-form-section>
                    <ui-switch v-model="form.parking_available" text="On-site parking available" class="is-full" />
                    <template v-if="form.parking_available">
                        <ui-input v-model="form.parking_fee" label="Parking fee (per vehicle / night)" type="number" step="0.01" min="0" :error="form.errors.parking_fee" />
                        <ui-input v-model="form.parking_clearance" label="Height clearance (m)" type="number" step="0.01" min="0" :error="form.errors.parking_clearance" />
                        <ui-rich-editor v-model="form.parking_notes" label="Parking notes" :error="form.errors.parking_notes" :height="130" class="is-full"
                                     placeholder="e.g. Undercover, entry via Herschel Street, may reach capacity." />
                    </template>

                    <div class="cl-field is-full">
                        <label class="cl-field__label">Payment methods accepted</label>
                        <p class="cl-note">
                            <i class="fas fa-exclamation-circle"></i>
                            <span>Add or switch off methods for all hotels in <Link href="/admin/payment-methods">Settings › Payment Methods</Link>.</span>
                        </p>
                        <!-- methods come from Settings › Payment Methods (enabled ones) -->
                        <ui-toggle-table v-model="form.payment_methods" :rows="paymentRows" title="Payment Methods"
                                         empty-text="No payment methods enabled in Settings." />
                    </div>
                </ui-form-section>
            </template>

            <!-- 6. Facilities -->
            <template #facilities>
                <ui-form-section>
                    <div class="cl-field is-full">
                        <label class="cl-field__label">Facilities available</label>
                        <p class="cl-note">
                            <i class="fas fa-exclamation-circle"></i>
                            <span>Add or rename facilities in <Link href="/admin/room-facilities">Rooms › Room Facilities</Link>.</span>
                        </p>
                        <ui-toggle-table v-model="form.facility_ids" :rows="facilityRows" title="Facilities"
                                         empty-text="No facilities yet." />
                    </div>
                </ui-form-section>
            </template>

            <!-- 7. Nearby places -->
            <template #nearby>
                <ui-form-section description="Attractions, transport, dining and hospitals near the hotel.">
                    <div class="cl-field is-full">
                        <table class="cl-form-table">
                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th style="width: 26%">Type</th>
                                    <th style="width: 120px">Distance (km)</th>
                                    <th class="is-center" style="width: 80px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(place, i) in form.nearby_places" :key="i">
                                    <td data-label="Place">
                                        <input v-model="place.name" class="cl-form-table__input" placeholder="e.g. King George Square"
                                               :class="{ 'is-invalid': form.errors[`nearby_places.${i}.name`] }">
                                        <div v-if="form.errors[`nearby_places.${i}.name`]" class="cl-field__error">{{ form.errors[`nearby_places.${i}.name`] }}</div>
                                    </td>
                                    <td data-label="Type">
                                        <ui-select v-model="place.category" :options="options.placeCategories" size="sm" class="cl-form-table__select" />
                                    </td>
                                    <td data-label="Distance">
                                        <input v-model="place.distance_km" type="number" step="0.1" min="0" inputmode="decimal"
                                               class="cl-form-table__input" placeholder="km"
                                               :class="{ 'is-invalid': form.errors[`nearby_places.${i}.distance_km`] }">
                                    </td>
                                    <td class="is-center" data-label="Action">
                                        <ui-icon-button icon="fas fa-trash" title="Remove" variant="soft-danger" size="sm" @click="form.nearby_places.splice(i, 1)" />
                                    </td>
                                </tr>
                                <tr v-if="!form.nearby_places.length">
                                    <td colspan="4" class="cl-form-table__empty">No places yet.</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4">
                                        <button type="button" class="cl-form-table__add"
                                                @click="form.nearby_places.push({ name: '', category: 'attraction', distance_km: '' })">
                                            <i class="fas fa-plus"></i> Add place
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </ui-form-section>
            </template>

            <template #footer>
                <Link :href="backUrl" class="cl-btn cl-btn--light cl-btn--pill"><i class="fas fa-chevron-left"></i> Back</Link>
                <button type="submit" class="cl-btn cl-btn--gradient cl-btn--pill" :disabled="form.processing || uploading">
                    <i class="fas fa-save"></i>
                    {{ uploading ? 'Uploading photo…' : form.processing ? 'Saving…' : (isEdit ? 'Save Changes' : 'Add Hotel') }}
                </button>
            </template>
        </ui-tab-layout>
    </form>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { useBreadcrumbs } from '../../composables/useBreadcrumbs';

const props = defineProps({
    hotel: Object,     // all fields, see HotelController@form
    hq: Object,        // { id, name } or null
    hotels: Array,     // switcher list: [{ id, title, subtitle, icon, tag, active, url }]
    options: Object,   // types, statuses, paymentMethods, placeCategories, socialNetworks, facilities
    submitUrl: String,
    backUrl: String,
});

const isEdit = computed(() => !!props.hotel.id);
const title = computed(() => {
    if (!isEdit.value) return props.hotel.type === 'headquarters' ? 'Add Headquarters' : 'Add Branch';
    return `Edit ${props.hotel.name}`;
});
// Hotels › Add Branch   |   Hotels › Meriton Suites Herschel Street › Edit
if (isEdit.value) useBreadcrumbs(props.hotel.name, 'Edit');
else useBreadcrumbs(title.value);

const starOptions = [1, 2, 3, 4, 5].map((n) => ({ value: n, label: '★'.repeat(n) }));
const socialIcon = (network) => ({ x: 'fa-twitter', linkedin: 'fa-linkedin', youtube: 'fa-youtube', tiktok: 'fa-tiktok' }[network] ?? `fa-${network}`);
const socialLabel = (network) => ({ x: 'X (Twitter)', linkedin: 'LinkedIn', youtube: 'YouTube', tiktok: 'TikTok' }[network]
    ?? network.charAt(0).toUpperCase() + network.slice(1));

// ---- tabs ----
// which form fields live on which tab (for the red error counts)
const TAB_FIELDS = {
    general:    ['type', 'status', 'name', 'brand', 'star_rating', 'tagline', 'description', 'legal_name', 'registration_no'],
    location:   ['address_line1', 'address_line2', 'city', 'state', 'postcode', 'country', 'latitude', 'longitude', 'map_url'],
    contact:    ['phones', 'email', 'website', 'social_links'],
    stay:       ['check_in_time', 'check_out_time', 'reception_hours', 'late_arrival_note', 'cancellation_policy', 'house_rules'],
    payment:    ['parking_available', 'parking_fee', 'parking_clearance', 'parking_notes', 'payment_methods'],
    facilities: ['facility_ids'],
    nearby:     ['nearby_places'],
    photo:      ['photo'], // shown on the General tab badge (photo sits above the menu)
};
const TAB_INFO = {
    general:    ['General', 'fas fa-hotel'],
    location:   ['Location', 'fas fa-map-marker-alt'],
    contact:    ['Contact', 'fas fa-phone-alt'],
    stay:       ['Stay & Policies', 'fas fa-concierge-bell'],
    payment:    ['Parking & Payment', 'fas fa-car'],
    facilities: ['Facilities', 'fas fa-swimming-pool'],
    nearby:     ['Nearby Places', 'fas fa-map-signs'],
};

const tab = ref('general');

// number of errors on a tab: 'phones.0.number' belongs to 'phones', etc.
const errorsOn = (key) => Object.keys(form.errors)
    .filter((field) => [...TAB_FIELDS[key], ...(key === 'general' ? TAB_FIELDS.photo : [])].includes(field.split('.')[0]))
    .length;

const tabs = computed(() => Object.entries(TAB_INFO).map(([key, [label, icon]]) => ({ key, label, icon, errors: errorsOn(key) })));

// card under the photo: name, brand, live status dot
const switcherCurrent = computed(() => ({
    title: form.name || (props.hotel.type === 'headquarters' ? 'New headquarters' : 'New branch'),
    subtitle: form.brand || (props.hotel.type === 'headquarters' ? 'Headquarters' : `Branch of ${props.hq?.name ?? ''}`),
    icon: props.hotel.type === 'headquarters' ? 'fas fa-building' : 'fas fa-hotel',
    active: form.status === 'active',
}));

const h = props.hotel;
const uploading = ref(false); // true while FilePond is still uploading

const form = useForm({
    ...h,
    star_rating: h.star_rating ?? '',
    phones: (h.phones || []).map((p) => ({ ...p })),
    social_links: { ...(h.social_links || {}) },
    payment_methods: [...(h.payment_methods || [])],
    facility_ids: [...(h.facility_ids || [])],
    nearby_places: (h.nearby_places || []).map((p) => ({ ...p })),
    // [] = no photo, [{ id: 'current', url }] = existing, [{ upload }] = new (FilePond)
    photo: (h.photo || []).map((p) => ({ ...p })),
});

// Social media switches: on = show the link box. Off clears the link (not saved),
// but remembers it in case the switch is turned back on before saving.
const socialOn = reactive(Object.fromEntries(props.options.socialNetworks.map((n) => [n, !!form.social_links[n]])));
const socialBackup = {};
const toggleSocial = (network, on) => {
    socialOn[network] = on;
    if (on) {
        form.social_links[network] = socialBackup[network] ?? '';
    } else {
        socialBackup[network] = form.social_links[network];
        form.social_links[network] = '';
    }
};

// rows for the switch tables (<ui-toggle-table>)
const paymentRows = props.options.paymentMethods.flatMap((group) => group.items.map((m) => ({
    key: m.key,
    name: m.name,
    logo: m.logo_url,
    category: { label: group.label, color: group.color },
    note: m.disabled ? 'Disabled' : null, // switched off in Settings but still on this hotel
})));

const facilityRows = props.options.facilities.flatMap((group) => group.items.map((f) => ({
    key: f.id,
    name: f.name,
    category: { label: group.label },
})));

// Files are already uploaded by FilePond, so this is a normal JSON request.
const submit = () => {
    form
        .transform((data) => ({
            ...data,
            photo: data.photo.map(({ id, upload }) => ({ id: id ?? null, upload: upload ?? null })),
        }))
        [isEdit.value ? 'put' : 'post'](props.submitUrl, {
            preserveScroll: true,
            // jump to the first tab that has a problem
            onError: () => { tab.value = tabs.value.find((t) => t.errors)?.key ?? tab.value; },
        });
};
</script>
