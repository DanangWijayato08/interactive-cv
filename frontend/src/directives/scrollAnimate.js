// src/directives/scrollAnimate.js

export default {
  mounted(el) {
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          el.classList.add('scroll-visible')
          el.classList.remove('scroll-hidden')
          observerInstance.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1, // Seberapa banyak elemen terlihat sebelum animasi dimulai
      }
    )

    // Tambahkan class awal sebelum animasi
    el.classList.add('scroll-hidden')

    observer.observe(el)
  }
}
