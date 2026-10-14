import { defineStore } from 'pinia';

export const useFacilitiesAndServicesStore = defineStore({
  id: 'facilitiesAndServices',

  state: () => ({
    categories: [
      {
        name: 'Kitchen',
        items: [
          { id: 1, name: 'Electric kettle' }
        ]
      },
      {
        name: 'Bathroom and Toilets',
        items: [
          { id: 2, name: 'Hair dryer' },
          { id: 3, name: 'Open air bath privileges' },
          { id: 4, name: 'Mirror' },
          { id: 5, name: 'Toiletries' },
          { id: 6, name: 'Towels' }
        ]
      },
      {
        name: 'Entertainment',
        items: [
          { id: 7, name: 'Free wifi in all rooms' },
          { id: 8, name: 'Telephone' },
          { id: 9, name: 'Satellite/cable channels' }
        ]
      },
      {
        name: 'Comforts',
        items: [
          { id: 10, name: 'Air conditioning' },
          { id: 11, name: 'Wake-up service' },
          { id: 12, name: 'Slippers' }
        ]
      },
      {
        name: 'Dining,Drinking and snacking',
        items: [
          { id: 13, name: 'coffee/tea maker' },
          { id: 14, name: 'full kitchen' },
          { id: 15, name: 'mini bar' },
          { id: 16, name: 'refrigenerator' },
          { id: 17, name: 'free bottlled water' },
          { id: 18, name: 'microwave' },
        ]
      },
      {
        name: 'Services and coveniences',
        items: [
          { id: 19, name: 'Daily housekeeping' },
        ]
      },
      {
        name: 'Layout and furnishing',
        items: [
          { id: 20, name: 'Carpeting' },
          { id: 21, name: 'Tile/marble flooring' },
          { id: 22, name: 'Wooden/parquted flooring' },
          { id: 23, name: 'Desk' },
          { id: 24, name: 'Trash cans' },
          { id: 25, name: 'fold-up bed' },
          { id: 26, name: 'window' },
          { id: 27, name: 'interconnecting rooms available' },
          { id: 28, name: 'high floor' },
        ]
      },
      {
        name: 'Clothing and laundry',
        items: [
          { id: 29, name: 'closet' },
          { id: 30, name: 'ironing facilities' },
        ]
      },
    ]
  }),

  getters: {
    getCategories: state => state.categories
  }
});
