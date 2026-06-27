<script setup>
import { computed } from "vue";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const featuredProjects = computed(() => {
  return projects.filter((project) => project.group === "featured");
});

const playgroundProjects = computed(() => {
  return projects.filter((project) => project.group === "playground");
});
</script>

<template>
  <main class="projects-page">
    <!-- 精選作品 -->
    <section class="project-section">
      <div class="section-heading">
        <div>
          <p class="section-number">01 / FEATURED PROJECTS</p>
          <h2>精選作品</h2>
        </div>
      </div>

      <div class="featured-carousel">
        <Swiper
          class="featured-swiper"
          :modules="[Navigation, Pagination]"
          :slides-per-view="'auto'"
          :centered-slides="true"
          :space-between="-220"
          :loop="featuredProjects.length > 2"
          :grab-cursor="true"
          :speed="700"
          :navigation="true"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide
            v-for="project in featuredProjects"
            :key="project.id"
            class="featured-slide"
          >
            <ProjectCard :project="project" variant="featured" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <!-- 小作品 -->
    <section class="project-section playground-section">
      <div class="section-heading">
        <div>
          <p class="section-number">02 / PLAYGROUND</p>
          <h2>練習作品</h2>
        </div>
      </div>

      <div class="playground-projects">
        <ProjectCard
          v-for="project in playgroundProjects"
          :key="project.id"
          :project="project"
          variant="compact"
        />
      </div>

      <Swiper
        class="playground-mobile-swiper"
        :modules="[Pagination]"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :space-between="-24"
        :grab-cursor="true"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide
          v-for="project in playgroundProjects"
          :key="project.id"
          class="playground-mobile-slide"
        >
          <ProjectCard :project="project" variant="compact" />
        </SwiperSlide>
      </Swiper>
    </section>
  </main>
</template>

<style scoped>
/* ========================================
   01. 頁面主內容

   保持原本 1280px，不影響：
   1. 精選作品標題
   2. 小作品標題
   3. 精選大卡片
======================================== */

.projects-page {
  width: min(1280px, calc(100% - 40px));
  margin: 0 auto;
  padding: 0 0 120px;
  overflow: visible;
}

.project-section + .project-section {
  margin-top: 110px;
}

/* ========================================
   02. 區塊標題

   完全保留原本位置與尺寸
======================================== */

.section-heading {
  margin-bottom: 28px;
  margin-top: 50px;
}

.section-number {
  margin: 0 0 10px;

  color: #8f9d83;

  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.14em;
}

.section-heading h2 {
  margin: 0;

  color: #263342;

  font-family: Georgia, "Noto Serif TC", serif;

  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.35;
}

/* ========================================
   03. 精選作品輪播外框

   保留原本設定，不更動大卡片尺寸
======================================== */

.featured-carousel {
  position: relative;

  width: 100vw;
  margin-left: calc(50% - 50vw);

  padding: 0 0 12px;

  overflow: hidden;
}

/* ========================================
   04. Swiper 本體
======================================== */

.featured-swiper {
  width: 100%;
  padding: 0 0 72px;

  overflow: visible;
}

/* ========================================
   05. 精選作品 Slide

   保留原本主卡尺寸
======================================== */

.featured-slide {
  width: min(980px, 68vw, calc(80vh * 16 / 9));

  opacity: 0;
  transform: scale(0.68);
  transform-origin: center;

  filter: blur(3px) saturate(0.68);

  pointer-events: none;

  transition:
    transform 0.5s ease,
    opacity 0.5s ease,
    filter 0.5s ease;
}

/* ========================================
   06. 中間主卡
======================================== */

:deep(.featured-slide.swiper-slide-active) {
  z-index: 3;

  opacity: 1;
  transform: scale(1);

  filter: none;

  pointer-events: auto;
}

/* ========================================
   07. 左右兩張小卡
======================================== */

:deep(.featured-slide.swiper-slide-prev),
:deep(.featured-slide.swiper-slide-next) {
  z-index: 2;

  opacity: 0.5;
  transform: scale(0.68);

  filter: blur(1.6px) saturate(0.8);

  pointer-events: auto;
}

/* 其他更遠的卡片隱藏 */
:deep(
  .featured-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(
      .swiper-slide-next
    )
) {
  z-index: 1;

  opacity: 0;
  transform: scale(0.6);

  filter: blur(4px) saturate(0.55);

  pointer-events: none;
}

/* ========================================
   08. Swiper 箭頭
======================================== */

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 46px;
  height: 46px;

  margin-top: -23px;

  z-index: 8;

  border: 1px solid rgba(140, 151, 136, 0.3);
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.92);
  color: #687867;

  box-shadow:
    0 10px 24px rgba(80, 86, 76, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.92);

  backdrop-filter: blur(10px);

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  background: #879a7e;
  color: #ffffff;

  transform: scale(1.06);

  box-shadow:
    0 14px 30px rgba(80, 96, 74, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 15px;
  font-weight: 700;
}

:deep(.swiper-button-prev) {
  left: calc(50% - 520px);
}

:deep(.swiper-button-next) {
  right: calc(50% - 520px);
}

/* ========================================
   09. Swiper 分頁點
======================================== */

:deep(.swiper-pagination) {
  bottom: 10px;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;

  margin: 0 5px !important;

  border-radius: 999px;

  background: #c9d1c5;
  opacity: 1;

  transition:
    width 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;
}

:deep(.swiper-pagination-bullet:hover) {
  transform: scale(1.2);
}

:deep(.swiper-pagination-bullet-active) {
  width: 26px;
  background: #879a7e;
}

/* ========================================
   10. Playground 小作品

   重點：
   只有卡片排列區突破 1280px，
   上面的標題完全不動。
======================================== */

.playground-mobile-swiper {
  display: none;
}

.playground-projects {
  /*
    大型桌機最大 1480px。
    1920px 螢幕左右約各留 220px。
  */
  width: min(1480px, calc(100vw - 64px));

  /*
    從原本的 1280px 容器中心向外擴張，
    不會改變 section heading 的位置。
  */
  margin-left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 30px;
  align-items: stretch;
}

/* ========================================
   11. 中型桌機

   精選大卡維持原本 RWD。
   小作品在 1100px 以上仍為三欄。
======================================== */

@media (max-width: 1300px) {
  .featured-slide {
    width: min(900px, 70vw, calc(76vh * 16 / 9));
  }

  :deep(.featured-slide.swiper-slide-prev),
  :deep(.featured-slide.swiper-slide-next) {
    transform: scale(0.66);
  }

  :deep(.swiper-button-prev) {
    left: 8%;
  }

  :deep(.swiper-button-next) {
    right: 8%;
  }

  .playground-projects {
    width: calc(100vw - 48px);
    gap: 24px;
  }
}

/* ========================================
   12. 小作品中型尺寸：兩欄

   只調整小作品，不影響精選區。
======================================== */

@media (max-width: 1100px) {
  .playground-projects {
    width: calc(100vw - 40px);

    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 26px;
  }
}

/* ========================================
   13. 平板
======================================== */

@media (max-width: 960px) {
  .projects-page {
    width: min(calc(100% - 32px), 1280px);
    padding-top: 30px;
  }

  .featured-slide {
    width: 78vw;
  }

  :deep(.featured-slide.swiper-slide-prev),
  :deep(.featured-slide.swiper-slide-next) {
    opacity: 0.42;
    transform: scale(0.78);

    filter: blur(1px) saturate(0.86);
  }

  :deep(.swiper-button-prev) {
    left: 3%;
  }

  :deep(.swiper-button-next) {
    right: 3%;
  }

  .playground-projects {
    width: calc(100vw - 32px);
    gap: 22px;
  }
}

/* ========================================
   14. 手機：一欄
======================================== */

@media (max-width: 768px) {
.section-heading {
  margin-top: 8px;
  margin-bottom: 20px;
}

  .playground-projects {
    display: none;
  }

  .playground-mobile-swiper {
    display: block;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    padding: 0 0 54px;
    overflow: visible;
  }

  .playground-mobile-slide {
    width: 82%;
    opacity: 0.55;
    transform: scale(0.92);
    transition:
      transform 0.35s ease,
      opacity 0.35s ease;
  }

  :deep(.playground-mobile-slide.swiper-slide-active) {
    opacity: 1;
    transform: scale(1);
    z-index: 2;
  }

  :deep(.playground-mobile-slide.swiper-slide-prev),
  :deep(.playground-mobile-slide.swiper-slide-next) {
    opacity: 0.72;
    transform: scale(0.94);
  }

  :deep(.playground-mobile-swiper .swiper-pagination) {
    bottom: 12px;
  }

  :deep(.featured-slide.swiper-slide-active) {
    opacity: 1;
    transform: scale(1);

    filter: none;
  }

  :deep(.featured-slide.swiper-slide-prev),
  :deep(.featured-slide.swiper-slide-next) {
    opacity: 0.7;
    transform: scale(0.94);

    filter: none;
  }

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    display: none;
  }

  .playground-projects {
    width: calc(100vw - 28px);

    gap: 24px;
  }
}

/* ========================================
   15. 小手機
======================================== */
@media (max-width: 480px) {
  .playground-projects {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    gap: 16px;
    padding: 0 14px 12px;
    transform: none;
  }

  .playground-projects > * {
    flex: 0 0 88%;
  }
}

/* ========================================
   16. 減少動畫
======================================== */

@media (prefers-reduced-motion: reduce) {
  .featured-slide,
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next),
  :deep(.swiper-pagination-bullet) {
    transition: none;
  }
}
</style>
