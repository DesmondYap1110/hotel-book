<!-- Breadcrumb bar:  (home) › Rooms › Room Types › Edit -->
<template>
    <nav class="cl-breadcrumb" aria-label="Breadcrumb">
        <ol class="cl-breadcrumb__list">
            <li class="cl-breadcrumb__item">
                <Link href="/admin" class="cl-breadcrumb__link" title="Home"><i class="fas fa-tachometer-alt"></i></Link>
            </li>

            <li
                v-for="(crumb, i) in trail"
                :key="i"
                class="cl-breadcrumb__item"
                :class="{ 'is-current': i === trail.length - 1 }"
                :aria-current="i === trail.length - 1 ? 'page' : null"
            >
                <Link v-if="crumb.url && i !== trail.length - 1" :href="crumb.url" class="cl-breadcrumb__link">{{ crumb.label }}</Link>
                <template v-else>{{ crumb.label }}</template>
            </li>
        </ol>
    </nav>
</template>

<script setup>
defineProps({ trail: { type: Array, default: () => [] } });
</script>
