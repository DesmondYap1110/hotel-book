import { reactive } from 'vue';

const state = reactive({
  beds: [
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
  ],
});

export default {
  state,
  // Other store actions, mutations, getters...
  // ...
};
