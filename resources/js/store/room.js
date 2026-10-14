import { defineStore } from 'pinia';
import axios from 'axios';

// Create a store
export const userRoomsStore = defineStore({
  id: 'room',

  state: () => ({
    rooms: {
      data: [],
      pagination: {
        links: {},
        meta: {}
      }
    },
    isLoading: false
  }),

  getters: {
    getRooms: state => state.rooms,
    // isLoading: state => state.isLoading,
  },

  actions: {
    async fetchRooms(page = 1) {
      this.toggleLoading();
      try {
        const response = await axios.get(`/api/rooms?page=${page}`);
        this.rooms.data.push(...response.data.data); // Append fetched data
        this.rooms.pagination.links = response.data.links;
        this.rooms.pagination.meta = response.data.meta;

        // If there are more pages, fetch next page
        if (this.rooms.pagination.links.next) {
          await this.fetchRooms(page + 1);
        }
      } catch (error) {
        console.error('An error occurred while fetching rooms:', error);
      } finally {
        this.toggleLoading();
      }
    },

    clearData() {
        this.rooms.data = []; // Clear the fetched room types data
        this.rooms.pagination.links = {};
        this.rooms.pagination.meta = {};
      },


    toggleLoading() {
      this.isLoading = !this.isLoading;
    }
  }
});
