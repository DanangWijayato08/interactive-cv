// src/directives/animateOnScroll.js

const animatedScrollObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-visible');
        entry.target.classList.remove('scroll-hidden');
        // jika hanya mau animasi sekali, unobserve
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1, // bisa diatur kalau mau
  }
);

export default {
  mounted(el) {
    el.classList.add('scroll-hidden');
    animatedScrollObserver.observe(el);
  }
};
