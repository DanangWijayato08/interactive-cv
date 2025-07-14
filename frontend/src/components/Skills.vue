<template>
  <section id="skill" class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 scroll-mt-28">
    <SectionTitle title="Skills" />

    <!-- Loading -->
    <div v-if="isLoading" class="text-center py-10 text-gray-500 dark:text-gray-400 animate-pulse">
      Memuat keahlian...
    </div>

    <!-- Empty -->
    <div v-else-if="skills.length === 0" class="text-center py-10 text-gray-500 dark:text-gray-400">
      Tidak ada data keahlian untuk ditampilkan.
    </div>

    <!-- Skill Cards -->
    <div
      v-else
      class="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6"
    >
      <div
        v-for="(skill, index) in skills"
        :key="index"
        :ref="observeVisibility(index)"
        class="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-1
               hover:ring hover:ring-blue-400 dark:hover:ring dark:hover:ring-blue-400 dark:hover:shadow-blue-500/20
               transition-all duration-300 relative transform opacity-0 translate-y-8"
        :class="{ 'opacity-100 translate-y-0': visibleItems[index] }"
      >
        <!-- Header -->
        <div class="flex items-center gap-4 mb-5">
          <img
            :src="skill.image"
            loading="lazy"
            @error="handleImageError"
            :alt="`Logo ${skill.name}`"
            class="w-12 h-12 object-contain rounded-full ring-2 ring-blue-300 dark:ring-blue-500"
          />
          <div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ skill.name }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-300">{{ skill.level }}</p>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="relative w-full h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div
            class="h-2.5 rounded-full transition-all duration-1000 ease-in-out"
            :class="{
              'bg-gradient-to-r from-blue-500 to-blue-400': skill.percent >= 70,
              'bg-gradient-to-r from-yellow-400 to-yellow-300': skill.percent >= 40 && skill.percent < 70,
              'bg-gradient-to-r from-red-400 to-red-300': skill.percent < 40
            }"
            :style="{ width: visibleItems[index] ? skill.percent + '%' : '0%' }"
          ></div>
        </div>

        <p class="text-xs font-medium text-right mt-2 text-gray-600 dark:text-gray-300">
          {{ skill.percent }}%
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])
const isLoading = ref(true)
const visibleItems = ref([])

function handleImageError(event) {
  event.target.src = '/default-skill.png'
}

function observeVisibility(index) {
  return (el) => {
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visibleItems.value[index] = true
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
  }
}

const API_URL = import.meta.env.PROD ? '/api/skills' : 'http://localhost:3000/api/skills'

onMounted(async () => {
  try {
    const response = await axios.get(API_URL)
    skills.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data skill:', error)
  }
  isLoading.value = false
})
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out both;
}
</style>
