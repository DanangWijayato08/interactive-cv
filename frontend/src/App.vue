<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white font-sans antialiased min-h-screen transition-colors duration-500"
  >
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>