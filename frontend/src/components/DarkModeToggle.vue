<!-- components/DarkModeToggle.vue -->
<template>
  <button
    @click="toggleDarkMode"
    class="text-gray-700 dark:text-gray-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
    aria-label="Toggle Dark Mode"
  >
    <span v-if="isDark">☀</span>
    <span v-else>🌙</span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>
