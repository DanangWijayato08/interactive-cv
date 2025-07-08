<script setup>
defineProps({
  title: String,
  color: { type: String, default: '' },
  align: { type: String, default: 'center' }, // 'left' | 'center' | 'right'
});
</script>

<template>
  <div :class="`mb-12 text-${align}`">
    <h2
      class="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white transition-colors duration-300"
      :class="color"
    >
      {{ title }}
    </h2>
    <div
      class="mt-3 h-1 w-24 mx-auto rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      :class="{
        'mx-auto': align === 'center',
        'ml-0': align === 'left',
        'mr-0': align === 'right'
      }"
    ></div>
  </div>
</template>

<style scoped>
/* Optional: animasi garis bawah saat muncul */
div > .h-1 {
  animation: grow-bar 0.6s ease-out forwards;
}
@keyframes grow-bar {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 6rem; /* 24 Tailwind = 6rem */
    opacity: 1;
  }
}
</style>
