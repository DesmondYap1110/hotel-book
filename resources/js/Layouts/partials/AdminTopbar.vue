<!-- Top bar: menu toggle, fullscreen, user menu -->
<template>
    <header class="cl-topbar">
        <button type="button" class="cl-topbar__btn" data-admin-toggle aria-label="Toggle menu" @click="$emit('toggle-menu')">
            <!-- CSS shows one icon: bars when open, arrow when collapsed -->
            <svg class="cl-line-icon cl-topbar__icon-open" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 5h18M3 12h12M3 19h18" />
            </svg>
            <svg class="cl-line-icon cl-topbar__icon-collapsed" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 12h20M15 5l7 7-7 7" />
            </svg>
        </button>

        <div class="cl-topbar__spacer"></div>

        <button type="button" class="cl-topbar__btn" data-admin-fullscreen aria-label="Fullscreen" @click="toggleFullscreen">
            <svg class="cl-line-icon cl-line-icon--bold" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" />
            </svg>
        </button>

        <div class="cl-topbar__user" :class="{ 'is-open': menuOpen }" ref="userBox">
            <button type="button" class="cl-topbar__user-toggle" aria-haspopup="true" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
                <svg class="cl-line-icon cl-line-icon--bold cl-topbar__chevron" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 9l7 7 7-7" />
                </svg>
                <span>
                    <span class="cl-topbar__user-name">{{ user?.name ?? 'Guest' }}</span>
                    <span class="cl-topbar__user-role">Admin</span>
                </span>
            </button>

            <div class="cl-topbar__menu" :class="{ 'is-open': menuOpen }">
                <Link href="/admin/password" class="cl-topbar__menu-item" @click="menuOpen = false">
                    <svg class="cl-line-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <path d="M8 11V8a4 4 0 018 0v3" />
                    </svg>
                    Change Password
                </Link>

                <Link href="/logout" method="post" as="button" class="cl-topbar__menu-item">
                    <svg class="cl-line-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M14 4H6a1 1 0 00-1 1v14a1 1 0 001 1h8" />
                        <path d="M10 12h10M17 9l3 3-3 3" />
                    </svg>
                    Logout
                </Link>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

defineProps({ user: { type: Object, default: null } });
defineEmits(['toggle-menu']);

const menuOpen = ref(false);
const userBox = ref(null);

// close the user menu when clicking anywhere else
const onDocClick = (e) => { if (userBox.value && !userBox.value.contains(e.target)) menuOpen.value = false; };
onMounted(() => document.addEventListener('click', onDocClick));
onBeforeUnmount(() => document.removeEventListener('click', onDocClick));

const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
};
</script>
