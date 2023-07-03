<template>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.name" scope="col">{{ column.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.room_no }}</td>
          <td>{{ row.room_floor }}</td>
          <td>{{ row.room_type }}</td>
          <td>{{ row.is_available }}</td>
          <td>
            <a href="#" @click.prevent="$emit('editUser', row.id)">
              <i class="fa fa-edit mr-2"></i>
            </a>
            <a href="#"  @click.prevent="$emit('confirmUserDeletion', row.id)">
              <i class="fa fa-trash text-danger"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </template>

  <script setup>
  import { ref } from 'vue';
  import { defineProps } from 'vue';

  const emit = defineEmits(['editUser', 'confirmUserDeletion']);

  const props = defineProps({
    columns: {
      type: Object,
      required: true,
    },
    rows: {
      type: Object,
      required: true,
    },
  });

  </script>
