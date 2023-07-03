<template>
    <div class="card">
        <div class="card-body">
            <Form>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="room_no">Room No</label>
                            <input v-model="form.room_no" type="text" class="form-control flatpickr" id="room_no">

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="room_type">Room Type</label>
                            <select v-model="form.room_type" id="client" class="form-control">
                                <!-- <option v-for="client in clients" :value="client.id" :key="client.id">{{ client.first_name }} {{ client.last_name }}</option> -->
                            </select>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="room_floor">Room Floor</label>
                            <input v-model="form.room_floor" type="text" class="form-control flatpickr" id="room_floor">

                        </div>
                    </div>

                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea v-model="form.is_available" class="form-control" id="description" rows="3"
                        placeholder="Enter Description"></textarea>

                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </Form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const form = reactive({
    title: '',
    client_id: '',
    start_time: '',
    end_time: '',
    description: '',
});
</script>
