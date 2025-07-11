<script setup>
import SectionTitle from './SectionTitle.vue'
import { Github, Instagram, Facebook, Mail } from 'lucide-vue-next'
</script>

<template>
  <footer
    id="kontak"
    class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 transition-colors duration-500"
  >
    <div class="container mx-auto px-4 sm:px-6">
      <SectionTitle title="Kontak" color="text-white" />

      <!-- Konten Grid -->
      <div
        class="grid gap-10 md:grid-cols-3 text-center md:text-left mt-10 animate-fade-up"
        style="animation-delay: 200ms;"
      >
        <!-- Info Kontak -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Hubungi Saya</h3>
          <p class="mb-2 text-gray-300 text-sm leading-relaxed">
            <strong>Alamat:</strong><br />
            Jetis, RT01 RW25, Sendangmulyo, Minggir, Sleman, Yogyakarta 55562
          </p>
          <p class="mb-2 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2 text-gray-300 text-sm">
            <Mail class="w-5 h-5 animate-bounce" />
            <a
              href="mailto:wijayantodanang867@gmail.com"
              class="hover:text-blue-400 transition-colors"
            >
              wijayantodanang867@gmail.com
            </a>
          </p>
        </div>

        <!-- Sosial Media -->
        <div class="md:col-start-2 flex flex-col items-center md:items-center">
          <h3 class="text-xl font-semibold mb-4">Sosial Media</h3>
          <div class="flex gap-6 justify-center">
            <a
              href="https://github.com/DanangWijayato08"
              target="_blank"
              class="text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-125"
              aria-label="GitHub"
            >
              <Github class="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/danungg_/"
              target="_blank"
              class="text-gray-300 hover:text-pink-500 transition-transform transform hover:scale-125"
              aria-label="Instagram"
            >
              <Instagram class="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/danang.wijayanto.1865/"
              target="_blank"
              class="text-gray-300 hover:text-blue-600 transition-transform transform hover:scale-125"
              aria-label="Facebook"
            >
              <Facebook class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Tentang Saya -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Tentang Saya</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Mahasiswa Teknik Informatika yang antusias membangun aplikasi web modern serta mendalami desain antarmuka interaktif untuk menghadirkan pengalaman pengguna yang optimal.
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        &copy; 2025 Danang Wijayanto. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.8s ease-out forwards;
}
</style>
