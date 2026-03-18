/* ==========================================================================
   Lee Ambrose Park — Portfolio JS
   Default: dark mode. Toggle with sun/moon.
   ========================================================================== */

(function () {
  'use strict';

  // --- State — defaults to dark (set in HTML data-theme="dark") ---
  let isDarkMode = true;

  // --- Initialize ---
  document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initNavScroll();
    initMobileNav();
    initScrollRevealFallback();
    initSmoothScroll();
    updateThemeIcons();
  });

  // --- Update sun/moon icon visibility ---
  function updateThemeIcons() {
    var sun = document.querySelector('.theme-icon-sun');
    var moon = document.querySelector('.theme-icon-moon');
    if (sun && moon) {
      // In dark mode, show sun (click to go light); in light mode, show moon (click to go dark)
      sun.style.display = isDarkMode ? '' : 'none';
      moon.style.display = isDarkMode ? 'none' : '';
    }
  }

  // --- Dark Mode Toggle ---
  function initThemeToggle() {
    var btn = document.querySelector('.nav__toggle-theme');
    if (!btn) return;

    btn.addEventListener('click', function () {
      isDarkMode = !isDarkMode;
      document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : '');
      updateThemeIcons();
    });
  }

  // --- Navbar Scroll Behavior ---
  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    var lastScrollY = 0;
    var ticking = false;

    function onScroll() {
      var currentScrollY = window.scrollY;

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
    var toggle = document.querySelector('.nav__mobile-toggle');
    var links = document.querySelector('.nav__links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
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

    var elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
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
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          var navHeight = document.querySelector('.nav')
            ? document.querySelector('.nav').offsetHeight
            : 0;
          var y = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });
  }

})();
