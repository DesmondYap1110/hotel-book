<!--
  UiAddress - Malaysian address fields (the system is Malaysia only: Country is shown but disabled).

  <ui-address :form="form" />

  Uses these form fields: address_line1, address_line2, postcode, city, state
  (errors come from form.errors). The server always saves country = Malaysia.

    - State and City are dropdowns (from /admin/locations/malaysia/...)
    - typing a 5-digit postcode fills in State and City automatically
-->
<template>
    <ui-input v-model="form.address_line1" label="Address" :error="form.errors.address_line1" required
              placeholder="e.g. No. 12, Jalan Ampang" class="is-full" />
    <ui-input v-model="form.address_line2" label="Address line 2" :error="form.errors.address_line2" class="is-full" />

    <!-- shown for clarity, cannot be changed (the server always saves Malaysia) -->
    <ui-input model-value="Malaysia" label="Country" disabled title="This system is for Malaysia only" />

    <div class="cl-field">
        <label class="cl-field__label">Postcode</label>
        <input v-model.trim="form.postcode" class="cl-input" :class="{ 'is-invalid': form.errors.postcode }"
               inputmode="numeric" maxlength="5" placeholder="e.g. 50450 - fills State and City">
        <div v-if="form.errors.postcode" class="cl-field__error">{{ form.errors.postcode }}</div>
        <div v-else-if="postcodeNote" class="cl-field__hint" :class="{ 'is-warning': postcodeNote.warning }">
            <i class="fas" :class="postcodeNote.warning ? 'fa-exclamation-circle' : 'fa-check-circle'"></i> {{ postcodeNote.text }}
        </div>
    </div>

    <div class="cl-field">
        <label class="cl-field__label">State</label>
        <ui-select v-model="form.state" :options="states" placeholder="Choose a state" :invalid="!!form.errors.state" />
        <div v-if="form.errors.state" class="cl-field__error">{{ form.errors.state }}</div>
    </div>

    <div class="cl-field">
        <label class="cl-field__label">City</label>
        <ui-select v-model="form.city" :options="cityOptions" :disabled="!form.state"
                   :placeholder="form.state ? 'Choose a city' : 'Choose a state first'" :invalid="!!form.errors.city" />
        <div v-if="form.errors.city" class="cl-field__error">{{ form.errors.city }}</div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import axios from 'axios';

const props = defineProps({
    form: { type: Object, required: true }, // useForm() object
});

const API = '/admin/locations/malaysia';

// small cache shared by every <ui-address> on the page
const cache = window.__clMyAddressCache ||= { states: null, cities: {} };

const states = ref(cache.states || []);
const cities = ref([]);
const postcodeCities = ref(null); // cities limited by a postcode that covers several
const postcodeNote = ref(null);

// city list: the state's cities, or only the ones the postcode covers
const cityOptions = computed(() => {
    const list = postcodeCities.value || cities.value;
    // keep a saved city visible even if it is not in the list
    return props.form.city && !list.includes(props.form.city) ? [props.form.city, ...list] : list;
});

const loadStates = async () => {
    if (!cache.states) cache.states = (await axios.get(`${API}/states`)).data;
    states.value = cache.states;
};

const loadCities = async (state) => {
    if (!state) { cities.value = []; return; }
    if (!cache.cities[state]) cache.cities[state] = (await axios.get(`${API}/cities`, { params: { state } })).data;
    cities.value = cache.cities[state];
};

loadStates();

// ---- state change -> its cities ----
watch(() => props.form.state, async (state, previous) => {
    await loadCities(state);
    // user picked another state by hand: clear a city that does not belong to it
    if (previous !== undefined && state !== previous && props.form.city && !cities.value.includes(props.form.city)) {
        props.form.city = '';
    }
}, { immediate: true });

// ---- postcode -> state + city ----
let lookupId = 0;
watch(() => props.form.postcode, async (postcode) => {
    postcodeCities.value = null;
    postcodeNote.value = null;
    if (!/^\d{5}$/.test(postcode || '')) return;

    const id = ++lookupId;
    const { data } = await axios.get(`${API}/postcodes/${postcode}`);
    if (id !== lookupId) return; // a newer postcode was typed

    if (!data.length) {
        postcodeNote.value = { warning: true, text: 'Postcode not found in the Malaysia list - choose State and City yourself.' };
        return;
    }

    props.form.state = data[0].state;
    await loadCities(data[0].state);

    if (data.length === 1) {
        props.form.city = data[0].city;
        postcodeNote.value = { text: `${data[0].city}, ${data[0].state}` };
    } else {
        postcodeCities.value = data.map((m) => m.city);
        if (!postcodeCities.value.includes(props.form.city)) props.form.city = '';
        postcodeNote.value = { text: `This postcode covers ${data.length} areas - choose the city.` };
    }
});
</script>
