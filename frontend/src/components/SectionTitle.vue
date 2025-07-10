<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'text-gray-900 dark:text-white',
  },
})
</script>

<template>
  <div class="text-center animate-fade-in-up opacity-0 animate-delay">
    <!-- Judul -->
    <h2
      :class="`text-3xl sm:text-4xl font-bold tracking-tight ${props.color}`"
    >
      {{ props.title }}
    </h2>

    <!-- Garis bawah -->
    <div
      class="mt-2 w-16 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"
    ></div>

    <!-- Slot deskripsi (opsional) -->
    <div class="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-delay {
  animation-delay: 0.3s;
}
</style>
