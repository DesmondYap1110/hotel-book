<script setup>
import Multiselect from '@vueform/multiselect'
import Toggle from '@vueform/toggle'
import { ref, inject, reactive, getCurrentInstance, watch } from 'vue';
const options = inject('options');

const selectedBeds = ref([]);
const beds = ref([
    {
        id: 1,
        name: 'Single',
        isSelected: false,
        quantity: '',
    },
    {
        id: 2,
        name: 'Queen',
        isSelected: false,
        quantity: '',
    },
    {
        id: 3,
        name: 'King',
        isSelected: false,
        quantity: '',
    },

]);


const toggleBedSelection = (bed) => {
    // const index = selectedBeds.value.indexOf(bed.id);
    const selected = bed.isSelected;
    if (selected) {
        selectedBeds.value.push(bed);
    } else {
        const index = selectedBeds.value.findIndex(b => b.id === bed.id);
        if (index !== -1) {
            selectedBeds.value.splice(index, 1);
        }
    }
    // console.log(selectedBeds.value);
}

const form = reactive({
    price: '',
    selectedBeds: selectedBeds.value,
    max_adult: '',
    max_child: '',
    area: '',
    status: '',
});
const { emit } = getCurrentInstance();

watch(form, (newForm) => {
    emit('DetailChanged', newForm);
}, { deep: true });

</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<template>

            <form action="">

                <div class="card">
                    <div class="card-body">

                    </div>
                </div>
                
            </form>

</template>

