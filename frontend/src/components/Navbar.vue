<template>
  <div>
    <!-- Overlay saat mobile menu terbuka -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        @click="toggleMenu"
      ></div>
    </transition>

    <!-- Navbar -->
    <header
      :class="[
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md',
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md' : 'bg-transparent'
      ]"
    >
      <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo -->
        <div
          class="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Danang Wijayanto
        </div>

        <!-- Mobile Toggle -->
        <div class="md:hidden flex items-center gap-4 z-50">
          <button
            @click="toggleDarkMode"
            aria-label="Toggle Dark Mode"
            class="text-gray-700 dark:text-gray-200 text-xl"
          >
            <span v-if="isDark">☀</span>
            <span v-else>🌙</span>
          </button>
          <button @click="toggleMenu" aria-label="Toggle Menu">
            <svg
              :class="[
                'w-7 h-7 transition-transform duration-300',
                menuOpen ? 'rotate-90 scale-110' : ''
              ]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="text-gray-800 dark:text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              />
            </svg>
          </button>
        </div>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center gap-8 font-medium">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="'#' + item.id"
              @click.prevent="scrollTo(item.id)"
              :class="[
                'relative nav-item transition-all duration-300',
                activeSection === item.id ? 'active' : ''
              ]"
            >
              {{ item.label }}
            </a>
          </li>
          <li>
            <button
              @click="toggleDarkMode"
              aria-label="Toggle Dark Mode"
              class="text-gray-700 dark:text-gray-200 text-xl"
            >
              <span v-if="isDark">☀</span>
              <span v-else>🌙</span>
            </button>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div
          v-if="menuOpen"
          class="md:hidden px-6 pb-6 pt-4 bg-white dark:bg-gray-900 shadow-md rounded-b-lg z-50"
        >
          <ul class="flex flex-col space-y-4 text-gray-800 dark:text-gray-200">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="'#' + item.id"
                @click.prevent="scrollTo(item.id); toggleMenu()"
                :class="[
                  'block text-lg transition-all duration-200',
                  activeSection === item.id ? 'text-blue-500 font-semibold' : ''
                ]"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuOpen = ref(false)
const isDark = ref(false)
const scrolled = ref(false)
const activeSection = ref('')

const navItems = [
  { id: 'profil', label: 'Profil' },
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'skill', label: 'Skills' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'kontak', label: 'Kontak' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function scrollTo(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
  let found = false
  for (const item of navItems) {
    const sec = document.getElementById(item.id)
    if (sec) {
      const rect = sec.getBoundingClientRect()
      const offset = 120
      if (rect.top <= offset && rect.bottom >= offset) {
        activeSection.value = item.id
        found = true
        break
      }
    }
  }
  if (!found) activeSection.value = ''
}

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-item::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: -4px;
  background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
  transition: width 0.3s ease;
}
.nav-item:hover::after,
.nav-item.active::after {
  width: 100%;
}
.nav-item.active {
  @apply text-blue-600 dark:text-blue-400 font-semibold;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
