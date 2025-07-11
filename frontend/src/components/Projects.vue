<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const projects = ref([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects')
    projects.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data projects:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section
    id="proyek"
    class="py-24 bg-white dark:bg-gray-900 transition-colors duration-500 scroll-mt-28"
  >
    <SectionTitle title="Proyek" />

    <div class="max-w-6xl mx-auto mt-12 px-6">
      <!-- Loading -->
      <div v-if="isLoading" class="text-center py-10 text-gray-500 dark:text-gray-400 animate-pulse">
        Memuat daftar proyek...
      </div>

      <!-- Fallback jika kosong -->
      <div v-else-if="projects.length === 0" class="text-center text-gray-500 dark:text-gray-400">
        Tidak ada proyek yang tersedia.
      </div>

      <!-- Card Grid -->
      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(project, index) in projects"
          :key="index"
          v-scroll-animate
          class="group bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 flex flex-col scroll-hidden"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <!-- Gambar -->
          <div class="h-56 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Konten -->
          <div class="p-6 flex flex-col justify-between flex-1">
            <div class="mb-4">
              <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {{ project.title }}
              </h3>

              <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, i) in project.tech"
                  :key="i"
                  class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 text-xs rounded-full font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Tombol Lihat -->
            <a
              :href="project.link"
              target="_blank"
              class="inline-block text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors mt-auto"
            >
              🔗 Lihat Proyek
            </a>
          </div>
        </div>
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
