<template>
    <div class="row">
    <div class="card col-md-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title mb-2">Bedroom Amenities
                <span class="pl-3">
                    <Toggle v-model="selectAll" @change="toggleSelectAll()" />
                </span>
            </h5>

            <div class="card-text p-2">
                <div class="d-flex" v-for="item in items" :key="item.id">
                    <p class="pr-3">
                        <Toggle :value="item.id" v-model="item.isSelected" />
                        <span class="pl-3">{{ item.name }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="card col-md-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title mb-2">Bathroom Amenities
                <span class="pl-3">
                    <Toggle v-model="selectAll" @change="toggleSelectAll()" />
                </span>
            </h5>

            <div class="card-text p-2">
                <div class="d-flex" v-for="item in bathrooms" :key="item.id">
                    <p class="pr-3">
                        <Toggle :value="item.id" v-model="item.isSelected" />
                        <span class="pl-3">{{ item.name }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="card col-md-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title mb-2">Outside
                <span class="pl-3">
                    <Toggle v-model="selectAll" @change="toggleSelectAll()" />
                </span>
            </h5>

            <div class="card-text p-2">
                <div class="d-flex" v-for="item in outsides" :key="item.id">
                    <p class="pr-3">
                        <Toggle :value="item.id" v-model="item.isSelected" />
                        <span class="pl-3">{{ item.name }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="card col-md-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title mb-2">Luxury Amenities
                <span class="pl-3">
                    <Toggle v-model="selectAll" @change="toggleSelectAll()" />
                </span>
            </h5>

            <div class="card-text p-2">
                <div class="d-flex" v-for="item in luxuries" :key="item.id">
                    <p class="pr-3">
                        <Toggle :value="item.id" v-model="item.isSelected" />
                        <span class="pl-3">{{ item.name }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="card col-md-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title mb-2">Food Amenities
                <span class="pl-3">
                    <Toggle v-model="selectAll" @change="toggleSelectAll()" />
                </span>
            </h5>

            <div class="card-text p-2">
                <div class="d-flex" v-for="item in foods" :key="item.id">
                    <p class="pr-3">
                        <Toggle :value="item.id" v-model="item.isSelected" />
                        <span class="pl-3">{{ item.name }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import Toggle from '@vueform/toggle';
import { ref, watch } from 'vue';

const selectAll = ref(false);
const items = ref([
      {
        id: 1,
        name: 'Complimentary water',
        isSelected: false,
      },
      {
        id: 2,
        name: 'TV with cable',
        isSelected: false,
      },
      {
        id: 1,
        name: 'Telephone',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Hangers',
        isSelected: false,
      },
      {
        id: 1,
        name: 'Luggages storage',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Air conditioning',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Minibar',
        isSelected: false,
      },
      {
        id: 2,
        name: 'coffee maker',
        isSelected: false,
      },
      {
        id: 2,
        name: 'microwave',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Connectors for laptops',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Coworking spaces',
        isSelected: false,
      },
    ]);

    const bathrooms = ref([
      {
        id: 1,
        name: 'Hair Dryer',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Essentially kit',
        isSelected: false,
      },
      {
        id: 1,
        name: 'Towels',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Combs',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Bathrobes',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Combs',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Slippers',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Water Header',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Bath Tubes',
        isSelected: false,
      },
    ]);

    const outsides = ref([
      {
        id: 1,
        name: 'Dining options',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Recreational activities',
        isSelected: false,
      },
      {
        id: 1,
        name: 'Swimming pool',
        isSelected: false,
      },
      {
        id: 1,
        name: 'Sauna',
        isSelected: false,
      },
      {
        id: 2,
        name: 'High speed wi-fi',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Charging stations',
        isSelected: false,
      },
      {
        id: 2,
        name: 'Gym or fitness center',
        isSelected: false,
      },

    ]);

    const luxuries = ref([
      {
        id: 1,
        name: 'spa experience',
        isSelected: false,
      },
      {
        id: 1,
        name: 'Kids equipment.',
        isSelected: false,
      },
      {
        id: 1,
        name: 'Pet friendliness',
        isSelected: false,
      },
      {
        id: 1,
        name: 'Car services',
        isSelected: false,
      },

    ]);

    const foods = ref([
      {
        id: 1,
        name: 'Fresh fruit bowl.',
        isSelected: false,
      },
      {
        id: 1,
        name: 'Welcome with a champagne bottle',
        isSelected: false,
      },
      {
        id: 1,
        name: 'Treat',
        isSelected: false,
      },

    ]);

watch(items, (newItems) => {
      selectAll.value = newItems.every((item) => item.isSelected);
    }, { deep: true });

const toggleSelectAll = () =>{
    items.value.forEach((item)=>{
        item.isSelected = selectAll.value;
    });
};

//   export default {
//     components: {
//       Toggle,
//     },
//     data() {
//       return {
//         items: [
//           { id: 1, name: 'Complimentary water', isSelected: false },
//           { id: 2, name: 'TV with cable', isSelected: false },
//           { id: 3, name: 'Ironing capabilities', isSelected: false },
//           { id: 4, name: 'Telephone', isSelected: false },
//           { id: 5, name: 'Hangers', isSelected: false },
//           { id: 6, name: 'Luggages storage', isSelected: false },
//           { id: 7, name: 'Air conditioning', isSelected: false },
//           { id: 8, name: 'Minibar', isSelected: false },
//           { id: 9, name: 'coffee maker ', isSelected: false },
//           { id: 10, name: 'microwave', isSelected: false },
//           // Add more items as needed
//         ],
//         selectAll: false,
//       };
//     },
//     watch: {
//       items: {
//         deep: true,
//         handler() {
//           this.selectAll = this.items.every(item => item.isSelected);
//         },
//       },
//     },
//     methods: {
//       toggleSelectAll() {
//         this.items.forEach(item => {
//           item.isSelected = this.selectAll;
//         });
//       },
//     },
//   };



</script>

<style>
@import '~@vueform/toggle/themes/default.css';
</style>
