<script setup>
import { ref, onMounted } from 'vue'
import myPhoto from '@/assets/img/pp.jpg'

// Dynamic subtitle
const titles = ['Frontend Developer', 'UI/UX Enthusiast', 'Web Designer', 'Backend Developer']
const currentTitle = ref(titles[0])
let titleIndex = 0

onMounted(() => {
  setInterval(() => {
    titleIndex = (titleIndex + 1) % titles.length
    currentTitle.value = titles[titleIndex]
  }, 2500)
})

function scrollToSection(id) {
  const section = document.getElementById(id)
  if (section) {
    const yOffset = -70
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="profil"
    class="relative overflow-hidden py-24 md:py-32 transition-colors duration-500
           bg-gradient-to-br from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
  >
    <!-- Blob Background -->
    <svg class="absolute w-[450px] h-[450px] -z-10 opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
         viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#3b82f6" d="M53.7,-58.6C68.8,-46.5,78.2,-23.3,75.3,-2.4C72.3,18.4,57.1,36.8,42.1,49.5C27.1,62.2,13.5,69.1,-3.7,73.2C-20.9,77.3,-41.8,78.6,-55.6,68.3C-69.4,57.9,-76,36,-74.6,16.2C-73.2,-3.6,-63.7,-21.3,-51.3,-34.6C-39,-47.8,-24,-56.6,-6.5,-61.3C11.1,-65.9,22.2,-66.9,53.7,-58.6Z" transform="translate(100 100)" />
    </svg>

    <div class="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
      <!-- Text -->
      <div class="md:w-1/2 text-center md:text-left animate-slide-in-left">
        <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Halo, Saya Brodin
        </h1>

        <!-- Subtitle -->
        <Transition name="fade-scale" mode="out-in">
          <p
            :key="currentTitle"
            class="text-xl text-gray-500 dark:text-gray-400 mb-2"
          >
            <span class="font-semibold text-blue-600 dark:text-blue-400">
              {{ currentTitle }}
            </span>
          </p>
        </Transition>

        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Mahasiswa Teknik Informatika yang bersemangat dalam
          <span class="font-semibold text-blue-500 dark:text-blue-300">pengembangan web</span> dan
          <span class="font-semibold text-pink-500 dark:text-pink-400">desain antarmuka</span>.
        </p>

        <div class="flex justify-center md:justify-start gap-4 flex-wrap">
          <button
            aria-label="Scroll ke bagian kontak"
            @click="scrollToSection('kontak')"
            class="bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-100 font-medium py-3 px-6 rounded-xl
                   hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg animate-pulse-glow"
          >
            📩 Hubungi Saya
          </button>

          <button
            aria-label="Scroll ke bagian proyek"
            @click="scrollToSection('proyek')"
            class="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 font-medium py-3 px-6 rounded-xl
                   hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300"
          >
            💼 Lihat Proyek
          </button>
        </div>
      </div>

      <!-- Foto -->
      <div class="md:w-1/2 flex justify-center relative animate-slide-in-right">
        <div class="relative group">
          <img
            loading="lazy"
            :src="myPhoto"
            alt="Foto Izzuddin Akmal Ramadhan, Mahasiswa Informatika"
            class="w-72 h-72 sm:w-80 sm:h-80 rounded-full object-cover shadow-xl ring-4 ring-white dark:ring-gray-700
                   transform group-hover:scale-105 transition duration-500 ease-in-out"
          />
          <div
            class="absolute inset-0 rounded-full ring-4 ring-blue-400 dark:ring-blue-600 animate-pulse opacity-0
                   group-hover:opacity-100 transition-opacity duration-700"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slide-in-left {
  0% { transform: translateX(-50px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes slide-in-right {
  0% { transform: translateX(50px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246, 0.6); }
  50% { box-shadow: 0 0 15px 8px rgba(59,130,246, 0.3); }
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out both;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out both;
}

.animate-pulse-glow {
  animation: pulse-glow 2s infinite;
}

.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all 0.5s ease;
}

.fade-scale-enter-from, .fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
