<template>
  <div>
    <ScrollProgress />
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterSection />
    <GdprBanner />
  </div>
</template>

<script setup>
import ScrollProgress from './components/ScrollProgress.vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import GdprBanner from './components/GdprBanner.vue'
</script>

<style>
/* Route transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
