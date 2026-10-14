<script setup>
import { useSlots, ref , provide} from 'vue'
const slots = useSlots()
const tabTitles = ref(slots.default().map(tab => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])
provide('selectedTitle', selectedTitle)
</script>

<template>
    <div class="tabs">
        <ul class="nav nav-tabs">
            <li
                v-for="title in tabTitles"
                :key="title"
                class="nav-item"
               
                @click="selectedTitle = title"
            >
            <a class="nav-link" :class="{ active: selectedTitle === title}" aria-current="page" href="#">{{title}}</a>
            </li>
          </ul>
        <slot />
    </div>
</template>
