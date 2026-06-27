<script setup>
import NavBar from "./components/NavBar.vue";
</script>
<template>
  <div class="app-shell">
    <div class="site-background"></div>

    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: visible;
  background: #f4f7f5;
}

.site-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.site-background::before,
.site-background::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.site-background::before {
  left: -16%;
  bottom: -18%;

  width: 760px;
  height: 760px;

  background: radial-gradient(
    circle,
    rgba(135, 154, 126, 0.26) 0%,
    rgba(135, 154, 126, 0.14) 32%,
    rgba(135, 154, 126, 0.06) 52%,
    transparent 72%
  );

  filter: blur(34px);
  animation: auraFloat 9s ease-in-out infinite alternate;
}

.site-background::after {
  top: 6%;
  right: -18%;

  width: 820px;
  height: 820px;

  background: radial-gradient(
    circle,
    rgba(200, 164, 106, 0.2) 0%,
    rgba(200, 164, 106, 0.1) 34%,
    rgba(200, 164, 106, 0.04) 54%,
    transparent 74%
  );

  filter: blur(38px);
  animation: auraFloatReverse 11s ease-in-out infinite alternate;
}


:deep(main),
:deep(.projects-page),
:deep(.about-page),
:deep(.project-detail-page) {
  position: relative;
  z-index: 1;
}

@keyframes auraFloat {
  from {
    transform: translate(0, 0) scale(1);
  }

  to {
    transform: translate(90px, -60px) scale(1.12);
  }
}

@keyframes auraFloatReverse {
  from {
    transform: translate(0, 0) scale(1);
  }

  to {
    transform: translate(-90px, 64px) scale(1.1);
  }
}
</style>