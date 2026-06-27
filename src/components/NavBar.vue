<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="navbar">
    <RouterLink class="navbar-logo" to="/">
      <span>SYUAN LIAO</span>
    </RouterLink>

    <nav class="navbar-links">
      <RouterLink to="/projects">作品</RouterLink>
      <RouterLink to="/about">關於我</RouterLink>
    </nav>
  </header>
</template>

<style scoped>

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  transform: translateZ(0);
  isolation: isolate;

  width: 100%;
  min-height: 92px;

  padding: 0 max(28px, calc((100vw - 1200px) / 2));

  display: flex;
  justify-content: space-between;
  align-items: center;

  background:
    radial-gradient(
      circle at 15% 0%,
      rgba(135, 154, 126, 0.18),
      transparent 35%
    ),
    radial-gradient(
      circle at 85% 0%,
      rgba(135, 154, 126, 0.12),
      transparent 40%
    ),
    linear-gradient(
      180deg,
      rgba(244, 247, 245, 0.95) 0%,
      rgba(244, 247, 245, 0.75) 58%,
      rgba(244, 247, 245, 0) 100%
    );

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* ========================================
   Logo
======================================== */

/* ========================================
   Logo
======================================== */

.navbar-logo {
  position: relative;

  color: var(--text-main);
  text-decoration: none;

  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.12em;

  transition:
    color 0.3s ease,
    text-shadow 0.3s ease;
}

.navbar-logo span {
  position: relative;
  display: inline-block;
}

/* 金色底線（預設隱藏） */
.navbar-logo span::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -8px;

  width: 100%;
  height: 2px;

  border-radius: 999px;

  background: linear-gradient(
    90deg,
    rgba(135, 154, 126, 0.15),
    #c8a46a,
    rgba(135, 154, 126, 0.15)
  );

  opacity: 0;

  transform: scaleX(0);
  transform-origin: left center;

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  box-shadow:
    0 0 8px rgba(200, 164, 106, 0.3),
    0 0 16px rgba(135, 154, 126, 0.18);
}

/* Hover 才出現 */
.navbar-logo:hover {
  color: var(--sage-green);

  text-shadow:
    0 0 10px rgba(135, 154, 126, 0.18);
}

.navbar-logo:hover span::after {
  opacity: 1;
  transform: scaleX(1);
}

/* 強制移除 Vue Router Active 樣式 */
.navbar-logo.router-link-active,
.navbar-logo.router-link-exact-active {
  border-bottom: none !important;
}

.navbar-logo.router-link-active::before,
.navbar-logo.router-link-active::after,
.navbar-logo.router-link-exact-active::before,
.navbar-logo.router-link-exact-active::after {
  display: none !important;
}
/* ========================================
   Navigation
======================================== */

.navbar-links {
  display: flex;
  align-items: center;

  gap: 48px;
}

.navbar-links a {
  position: relative;

  color: var(--text-main);
  text-decoration: none;

  font-size: 0.95rem;
  font-weight: 600;

  transition:
    color 0.3s ease,
    text-shadow 0.3s ease;
}

.navbar-links a::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -8px;

  width: 100%;
  height: 2px;

  border-radius: 999px;

  background: linear-gradient(
    90deg,
    rgba(135, 154, 126, 0.2),
    #c8a46a,
    rgba(135, 154, 126, 0.2)
  );

  transform: scaleX(0);
  transform-origin: left center;

  opacity: 0;

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  box-shadow:
    0 0 8px rgba(200, 164, 106, 0.3),
    0 0 16px rgba(135, 154, 126, 0.18);
}
 
.navbar-links a:hover,
.navbar-links a.router-link-active {
  color: var(--sage-green);
  text-shadow: 0 0 10px rgba(135, 154, 126, 0.18);
}

.navbar-links a:hover::after, 
.navbar-links a.router-link-active::after {
  transform: scaleX(1);
  opacity: 1;
}

/* ========================================
   Tablet
======================================== */

@media (max-width: 768px) {
  .navbar {
    min-height: 78px;
    padding: 0 24px;
  }

  .navbar-links {
    gap: 28px;
  }
}

/* ========================================
   Mobile
======================================== */

@media (max-width: 576px) {
  .navbar {
    min-height: 72px;
    padding: 0 18px;
  }

  .navbar-logo {
    font-size: 0.9rem;
  }

  .navbar-links {
    gap: 18px;
  }

  .navbar-links a {
    font-size: 0.86rem;
  }
}
</style>
