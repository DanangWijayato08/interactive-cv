<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])
const isLoading = ref(true)
const visibleItems = ref([]) // Untuk animasi scroll

// Fungsi observer untuk animasi scroll
function observeVisibility(index) {
  return (el) => {
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleItems.value[index] = true
            observer.unobserve(el) // animasi hanya sekali
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
  }
}

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data keahlian:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section
    id="skill"
    class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 scroll-mt-28"
  >
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
        :class="[
          'group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 relative',
          visibleItems[index] ? 'scroll-visible' : 'scroll-hidden'
        ]"
        :style="{ transitionDelay: `${index * 0.1}s` }"
      >
        <!-- Header -->
        <div class="flex items-center gap-4 mb-5">
          <img
            :src="skill.image"
            @error="event => event.target.src = '/default-skill.png'"
            :alt="skill.name"
            class="w-12 h-12 object-contain rounded-full ring-2 ring-blue-300 dark:ring-blue-500 transition"
          />
          <div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ skill.name }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-300">{{ skill.level }}</p>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="relative w-full h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden group">
          <div
            class="h-2.5 rounded-full transition-all duration-700 ease-out"
            :class="{
              'bg-gradient-to-r from-blue-500 to-blue-400': skill.percent >= 70,
              'bg-gradient-to-r from-yellow-400 to-yellow-300': skill.percent >= 40 && skill.percent < 70,
              'bg-gradient-to-r from-red-400 to-red-300': skill.percent < 40,
            }"
            :style="{ width: skill.percent + '%' }"
          ></div>
        </div>

        <!-- Percent -->
        <p class="text-xs font-medium text-right mt-2 text-gray-600 dark:text-gray-300">
          {{ skill.percent }}%
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll-hidden {
  opacity: 0;
  transform: translateY(30px);
}
.scroll-visible {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease-out;
}
</style>
