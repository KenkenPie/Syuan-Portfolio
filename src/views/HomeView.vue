<script setup>
import ProfileCard from "../components/ProfileCard.vue";
</script>

<template>
  <main class="home-page">
    <div class="shooting-star star-1"></div>
    <div class="shooting-star star-2"></div>
    <div class="shooting-star star-3"></div>
    <div class="shooting-star star-4"></div>
    <div class="shooting-star star-5"></div>
    <div class="shooting-star star-6"></div>
    <div class="star twinkle-1"></div>
    <div class="star twinkle-2"></div>
    <div class="star twinkle-3"></div>
    <div class="star twinkle-4"></div>
    <div class="star twinkle-5"></div>
    <div class="star twinkle-6"></div>
    <ProfileCard />
  </main>
</template>

<style scoped>
.home-page {
  position: relative;
  overflow: hidden;

  width: min(1180px, calc(100% - 64px));
  margin: 0 auto;
  padding: 0;

  display: flex;
  align-items: center;
}

.home-page > :deep(*) {
  width: 100%;
}

/* 背景光暈 */
.home-page::before {
  content: "";
  position: fixed;
  left: -16%;
  bottom: -18%;
  z-index: -1;

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
  pointer-events: none;
  animation: auraFloat 9s ease-in-out infinite alternate;
}

.home-page::after {
  content: "";
  position: fixed;
  top: 6%;
  right: -18%;
  z-index: -1;

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
  pointer-events: none;
  animation: auraFloatReverse 11s ease-in-out infinite alternate;
}

/* 文字淡入 */
.home-page :deep(.profile-text),
.home-page :deep(.hello),
.home-page :deep(.profile-card h1),
.home-page :deep(.profile-card h2),
.home-page :deep(.profile-card p),
.home-page :deep(.hero-buttons) {
  opacity: 0;
  animation: fadeUp 0.8s ease both;
}

.home-page :deep(.profile-card h1) {
  animation-delay: 0.08s;
}

.home-page :deep(.profile-card h2) {
  animation-delay: 0.16s;
}

.home-page :deep(.profile-card p) {
  animation-delay: 0.24s;
}

.home-page :deep(.hero-buttons) {
  animation-delay: 0.32s;
}

/* 照片淡入 */
.home-page :deep(.profile-photo-box) {
  opacity: 0;
  animation: photoFade 0.9s ease 0.18s both;
  transition: filter 0.45s ease;
}

.home-page :deep(.profile-photo-box:hover) {
  filter: brightness(1.03);
}

/* 流星 */
.shooting-star {
  position: fixed;
  z-index: 1;
  pointer-events: none;

  width: 180px;
  height: 2px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(200, 164, 106, 0.75)
  );

  border-radius: 999px;
  filter: blur(0.7px);
  opacity: 0;
}

.star-1 {
  top: 15%;
  right: -220px;
  animation: shootingStar 7s linear infinite;
}

.star-2 {
  top: 35%;
  right: -220px;
  animation: shootingStar 11s linear infinite;
  animation-delay: 3s;
}

.star-3 {
  top: 65%;
  right: -220px;
  animation: shootingStar 13s linear infinite;
  animation-delay: 6s;
}

.star-4 {
  top: 22%;
  right: -220px;

  animation: shootingStar 9s linear infinite;
  animation-delay: 1s;
}

.star-5 {
  top: 52%;
  right: -220px;

  animation: shootingStar 8s linear infinite;
  animation-delay: 4s;
}

.star-6 {
  top: 78%;
  right: -220px;

  animation: shootingStar 10s linear infinite;
  animation-delay: 7s;
}

/* 動畫 */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(22px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes photoFade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
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

@keyframes shootingStar {
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(-25deg);
  }

  8% {
    opacity: 0.65;
  }

  22% {
    opacity: 0;
    transform: translate(-1200px, 550px) rotate(-25deg);
  }

  100% {
    opacity: 0;
    transform: translate(-1200px, 550px) rotate(-25deg);
  }
}

/* =========================
   Tiny Twinkle Stars
========================= */

.star {
  position: fixed;
  z-index: 0;
  pointer-events: none;

  width: 3px;
  height: 3px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.95);

box-shadow:
  0 0 8px rgba(255,255,255,1),
  0 0 18px rgba(255,255,255,0.8),
  0 0 30px rgba(255,255,255,0.4);

  animation: twinkle 3s ease-in-out infinite;
}

/* 位置 */

.twinkle-1 {
  top: 22%;
  left: 10%;
}

.twinkle-2 {
  top: 35%;
  left: 18%;
  animation-delay: 0.8s;
}

.twinkle-3 {
  top: 48%;
  left: 7%;
  animation-delay: 1.5s;
}

.twinkle-4 {
  top: 60%;
  left: 20%;
  animation-delay: 2.2s;
}

.twinkle-5 {
  top: 72%;
  left: 12%;
  animation-delay: 1.1s;
}

.twinkle-6 {
  top: 80%;
  left: 24%;
  animation-delay: 2.8s;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.15;
    transform: scale(0.8);
  }

50% {
  opacity: 1;
  transform: scale(2);
}
  
}


/* RWD */
@media (max-width: 900px) {
  .home-page {
    width: min(100% - 40px, 1180px);
    min-height: auto;
    padding: 48px 0 36px;
  }

  .home-page::before {
    width: 500px;
    height: 500px;
  }

  .home-page::after {
    width: 520px;
    height: 520px;
  }
}

@media (max-width: 600px) {
  .home-page {
    width: calc(100% - 28px);
    padding: 32px 0 24px;
    justify-content: center;
  }

  .home-page :deep(.profile-card) {
    text-align: center;
  }

  .home-page :deep(.profile-text) {
    align-items: center;
    text-align: center;
  }

  .home-page :deep(.hero-buttons) {
    justify-content: center;
  }

  .home-page :deep(.profile-photo-box) {
    margin-left: auto;
    margin-right: auto;
  }

  .home-page::before {
    width: 320px;
    height: 320px;
    left: -35%;
    bottom: -10%;
    opacity: 0.5;
  }

  .home-page::after {
    width: 340px;
    height: 340px;
    right: -40%;
    top: 8%;
    opacity: 0.35;
  }

  .shooting-star {
    width: 120px;
  }
}

@media (max-width: 420px) {
  .home-page {
    width: calc(100% - 20px);
    padding-top: 24px;
  }

  .home-page::before {
    width: 260px;
    height: 260px;
  }

  .home-page::after {
    width: 280px;
    height: 280px;
  }
}
</style>
