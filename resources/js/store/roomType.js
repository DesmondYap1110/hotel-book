import { defineStore } from 'pinia';
import axios from 'axios';

// Create a store
export const userRoomTypeStore = defineStore({
  id: 'roomType',

  state: () => ({
    roomTypes: {
      data: [],
      pagination: {
        links: {},
        meta: {}
      }
    },
    isLoading: false
  }),

  getters: {
    getRoomTypes: state => state.roomTypes,
    // isLoading: state => state.isLoading,
  },

  actions: {
    async fetchRoomTypes(page = 1) {
      this.toggleLoading();
      try {
        const response = await axios.get(`/api/room-types?page=${page}`);
        this.roomTypes.data.push(...response.data.data); // Append fetched data
        this.roomTypes.pagination.links = response.data.links;
        this.roomTypes.pagination.meta = response.data.meta;

        // If there are more pages, fetch next page
        if (this.roomTypes.pagination.links.next) {
          await this.fetchRoomTypes(page + 1);
        }
      } catch (error) {
        console.error('An error occurred while fetching room types:', error);
      } finally {
        this.toggleLoading();
      }
    },

    clearData() {
      this.roomTypes.data = []; // Clear the fetched room types data
      this.roomTypes.pagination.links = {};
      this.roomTypes.pagination.meta = {};
    },

    toggleLoading() {
      this.isLoading = !this.isLoading;
    }
  }
});
