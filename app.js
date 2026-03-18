/* ==========================================================================
   Lee Ambrose Park — Portfolio JS
   All state is kept in memory variables only.
   ========================================================================== */

(function () {
  'use strict';

  // --- State (in-memory only) ---
  let isDarkMode = false;

  // --- Initialize Lucide icons ---
  document.addEventListener('DOMContentLoaded', function () {
    if (window.lucide) {
      lucide.createIcons();
    }
    initThemeToggle();
    initNavScroll();
    initMobileNav();
    initScrollRevealFallback();
    initSmoothScroll();
  });

  // --- Dark Mode Toggle ---
  function initThemeToggle() {
    const btn = document.querySelector('.nav__toggle-theme');
    const lightIcon = document.querySelector('.theme-icon-light');
    const darkIcon = document.querySelector('.theme-icon-dark');

    if (!btn) return;

    btn.addEventListener('click', function () {
      isDarkMode = !isDarkMode;
      document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : '');

      if (lightIcon && darkIcon) {
        lightIcon.style.display = isDarkMode ? 'none' : '';
        darkIcon.style.display = isDarkMode ? '' : 'none';
      }

      // Re-create icons since Lucide rendered them
      if (window.lucide) {
        lucide.createIcons();
        // Re-apply visibility after re-creation
        const newLightIcon = document.querySelector('.theme-icon-light');
        const newDarkIcon = document.querySelector('.theme-icon-dark');
        if (newLightIcon) newLightIcon.style.display = isDarkMode ? 'none' : '';
        if (newDarkIcon) newDarkIcon.style.display = isDarkMode ? '' : 'none';
      }
    });
  }

  // --- Navbar Scroll Behavior ---
  function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScrollY = 0;
    let ticking = false;

    function onScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        nav.classList.add('nav--hidden');
      } else {
        nav.classList.remove('nav--hidden');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  // --- Mobile Nav ---
  function initMobileNav() {
    const toggle = document.querySelector('.nav__mobile-toggle');
    const links = document.querySelector('.nav__links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Scroll Reveal Fallback (for browsers without scroll-driven animations) ---
  function initScrollRevealFallback() {
    if (CSS.supports && CSS.supports('animation-timeline', 'scroll()')) {
      return; // Native support — CSS handles it
    }

    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Smooth Scroll for Nav Links ---
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const navHeight = document.querySelector('.nav')
            ? document.querySelector('.nav').offsetHeight
            : 0;
          const y = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });
  }

})();
