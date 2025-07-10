<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const educationHistory = ref([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data pendidikan:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
    <div id="pendidikan" class="scroll-mt-28">
      <SectionTitle title="Pendidikan" />

      <div class="max-w-3xl mx-auto mt-12 relative border-l-4 border-blue-300 dark:border-blue-500 pl-6">

        <!-- Loading -->
        <div v-if="isLoading" class="text-center py-12 text-gray-500 dark:text-gray-400 flex justify-center">
          <svg class="animate-spin w-6 h-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
          Memuat data pendidikan...
        </div>

        <!-- Fallback jika kosong -->
        <div v-else-if="educationHistory.length === 0" class="text-center text-gray-500 dark:text-gray-400">
          Tidak ada data pendidikan untuk ditampilkan.
        </div>

        <!-- Timeline Pendidikan -->
        <ul v-else class="space-y-12">
          <li
            v-for="(item, index) in educationHistory"
            :key="item.id"
            class="relative group animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Titik timeline -->
            <span
              class="timeline-dot absolute -left-[29px] top-1 w-6 h-6 rounded-full border-4 border-blue-400 dark:border-blue-500 bg-white dark:bg-gray-900 z-10 shadow"
            ></span>

            <!-- Card -->
            <div
              class="card-hover bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md transition hover:shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div class="flex flex-wrap items-start gap-4">
                <!-- Logo -->
                <img
                  :src="item.image"
                  @error="event => event.target.src = '/default-school.png'"
                  alt="Logo Institusi"
                  class="fade-in-image w-14 h-14 rounded-full object-contain ring-2 ring-blue-300 dark:ring-blue-500 shrink-0"
                />

                <!-- Info -->
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2 transition-colors">
                    🎓 {{ item.institution }}
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-1 break-words transition-colors">
                    {{ item.major }}
                  </p>
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full transition-colors"
                    :class="item.period.toLowerCase().includes('sekarang')
                      ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100'"
                  >
                    {{ item.period }}
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out both;
}

@keyframes fade-image {
  to {
    opacity: 1;
  }
}
.fade-in-image {
  opacity: 0;
  animation: fade-image 0.5s ease forwards;
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.timeline-dot {
  opacity: 0;
  animation: pop-in 0.4s ease-out forwards;
}
@keyframes pop-in {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
