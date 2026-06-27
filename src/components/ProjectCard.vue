<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },

  variant: {
    type: String,
    default: "featured",
    validator: (value) => ["featured", "compact"].includes(value),
  },
});

const isFeatured = computed(() => props.variant === "featured");

const projectSubtitle = computed(() => {
  return props.project.chineseTitle || props.project.englishTitle || "";
});

const hasTechnologies = computed(() => {
  return (
    Array.isArray(props.project.technologies) &&
    props.project.technologies.length > 0
  );
});
</script>

<template>
  <article class="project-card" :class="`project-card--${variant}`">
    <!-- 作品圖片區 -->
    <div class="project-image-panel">
      <div class="project-screen">
        <img
          v-if="project.cover"
          class="project-image"
          :src="project.cover"
          :alt="`${project.title}專案畫面`"
          loading="lazy"
        />

        <div v-else class="project-image-placeholder">
          <span>PROJECT PREVIEW</span>
        </div>
      </div>
    </div>

    <!-- 作品文字區 -->
    <div class="project-content">
      <div class="project-top">
        <p class="project-category">
          {{ project.category }}

          <span v-if="project.year"> ・ {{ project.year }} </span>
        </p>

        <h2 class="project-title">
          {{ project.title }}
        </h2>

        <p v-if="projectSubtitle" class="project-subtitle">
          {{ projectSubtitle }}
        </p>
      </div>

      <p class="project-summary">
        {{ project.summary }}
      </p>

      <!-- 只有精選作品顯示功能重點 -->
      <ul
        v-if="isFeatured && project.features && project.features.length"
        class="project-features"
      >
        <li v-for="feature in project.features" :key="feature">
          {{ feature }}
        </li>
      </ul>

      <!-- 技術標籤 -->
      <div v-if="hasTechnologies" class="project-technologies">
        <span
          v-for="technology in project.technologies"
          :key="technology"
          class="technology-tag"
        >
          {{ technology }}
        </span>
      </div>

      <!-- 查看作品 -->
      <div class="project-actions">
        <!-- 精選作品 -->
        <RouterLink
          v-if="isFeatured"
          class="project-link"
          :to="{
            name: 'project-detail',
            params: {
              slug: project.slug,
            },
          }"
        >
          <span>查看專案</span>
          <span class="project-link-arrow">→</span>
        </RouterLink>

        <!-- Playground -->
        <a
          v-else
          class="project-link"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Live Demo</span>  <span class="project-link-arrow">→</span>
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
/* ========================================
   01. 卡片共同設定
======================================== */
.project-link {
  cursor: pointer;
  font-size: 18px;
}

.project-card {
  position: relative;
  min-width: 0;
  overflow: hidden;

  border: 0.5px solid rgba(168, 174, 164, 0.3);
  border-radius: 32px;

  background:
    radial-gradient(
      circle at 10% 12%,
      rgba(188, 205, 198, 0.24),
      transparent 34%
    ),
    radial-gradient(
      circle at 90% 88%,
      rgba(232, 223, 198, 0.22),
      transparent 34%
    ),
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.94),
      rgba(246, 248, 244, 0.88)
    );

  box-shadow:
    0 18px 52px rgba(73, 78, 69, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);

  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(135, 154, 126, 0.5);

  box-shadow:
    0 26px 68px rgba(73, 78, 69, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.96);
}

/* ========================================
   02. 精選作品卡片
   保留原本設定
======================================== */

.project-card--featured {
  width: 100%;
  height: 100%;

  aspect-ratio: 16 / 9;

  display: grid;

  grid-template-columns:
    minmax(0, 48%)
    minmax(0, 52%);

  gap: clamp(18px, 2vw, 30px);
  padding: clamp(16px, 1.8vw, 28px);

  box-sizing: border-box;
}

/* ========================================
   03. 圖片區共同設定
======================================== */

.project-image-panel {
  position: relative;

  min-width: 0;

  width: 100%;
  height: auto;

  align-self: center;

  padding: 0;

  overflow: visible;

  background: transparent;
  border: 0;
}

/* ========================================
   04. Demo 縮圖框
======================================== */

.project-screen {
  position: relative;

  width: 100%;
  height: auto;

  aspect-ratio: 16 / 9;

  overflow: hidden;

  border: 1px solid rgba(139, 151, 137, 0.24);
  border-radius: 18px;

  background: #f3f5f1;

  box-shadow:
    0 14px 34px rgba(69, 77, 69, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.project-screen::after {
  content: "";

  position: absolute;
  inset: 0;
  z-index: 1;

  pointer-events: none;

  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.14),
    transparent 38%
  );
}

/* ========================================
   05. 實際作品圖片
======================================== */

.project-image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: top center;

  transition: transform 0.55s ease;
}

.project-card:hover .project-image {
  transform: scale(1.025);
}

.project-image-placeholder {
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;

  background:
    radial-gradient(
      circle at 24% 24%,
      rgba(172, 202, 192, 0.34),
      transparent 36%
    ),
    radial-gradient(
      circle at 82% 76%,
      rgba(233, 211, 164, 0.3),
      transparent 38%
    ),
    #edf1ec;

  color: rgba(68, 75, 67, 0.52);

  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
}

/* ========================================
   06. 文字內容區
======================================== */

.project-content {
  min-width: 0;
  min-height: 0;
  height: 100%;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0;
}

.project-top {
  min-width: 0;

  display: grid;
  align-content: start;
}

/* ========================================
   07. 類型與年份
======================================== */

.project-category {
  margin: 0 0 10px;

  color: #9a7444;

  font-size: clamp(0.62rem, 0.68vw, 0.75rem);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.14em;

  text-transform: uppercase;
}

/* ========================================
   08. 標題
======================================== */

.project-title {
  margin: 0;

  color: #29322e;

  font-family: Georgia, "Noto Serif TC", serif;

  font-size: clamp(1.45rem, 1.8vw, 2.15rem);
  font-weight: 750;
  line-height: 1.25;

  word-break: keep-all;
  overflow-wrap: normal;
}

/* ========================================
   09. 副標題
======================================== */

.project-subtitle {
  margin: 8px 0 0;

  color: #7b817a;

  font-size: clamp(0.76rem, 0.86vw, 0.95rem);
  font-weight: 400;
  line-height: 1.6;

  word-break: keep-all;
}

/* ========================================
   10. 專案說明
======================================== */

.project-summary {
  display: -webkit-box;

  max-width: 46rem;
  margin: clamp(14px, 1.5vw, 22px) 0 0;

  overflow: hidden;

  color: #5e655f;

  font-size: clamp(0.88rem, 1vw, 1rem);
  line-height: 1.85;

  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

/* ========================================
   11. 功能重點
======================================== */

.project-features {
  display: flex;
  flex-wrap: wrap;

  gap: 8px 20px;

  padding: 0;
  margin: clamp(12px, 1.4vw, 20px) 0 0;

  list-style: none;
}

.project-features li {
  position: relative;

  padding-left: 17px;

  color: #424944;

  font-size: clamp(0.8rem, 0.9vw, 0.92rem);
  font-weight: 600;
  line-height: 1.6;
}

.project-features li::before {
  content: "✓";

  position: absolute;
  top: 0;
  left: 0;

  color: #a67c47;
  font-weight: 700;
}

/* ========================================
   12. 技術標籤
======================================== */

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-top: clamp(8px, 1.2vw, 16px);
}

.technology-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 25px;
  padding: 4px 9px;

  border: 1px solid rgba(141, 151, 137, 0.3);
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.62);
  color: #626a63;

  font-size: clamp(0.58rem, 0.65vw, 0.68rem);
  font-weight: 600;
  line-height: 1;
}

/* ========================================
   13. 按鈕
======================================== */

.project-actions {
  margin-top: clamp(10px, 1.3vw, 20px);
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  min-width: 124px;
  min-height: 40px;

  padding: 8px 15px;

  border-radius: 13px;

  background: #879a7e;
  color: #ffffff;

  font-size: clamp(1rem, 0.72vw, 0.76rem);
  font-weight: 700;
  letter-spacing: 0.05em;
  text-decoration: none;

  box-shadow: 0 9px 20px rgba(91, 111, 84, 0.15);

  transition:
    background 0.22s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease;
}

.project-link:hover {
  background: #718569;
  transform: translateY(-2px);

  box-shadow: 0 13px 28px rgba(91, 111, 84, 0.22);
}

.project-link-arrow {
  font-size: 1rem;
  transition: transform 0.22s ease;
}

.project-link:hover .project-link-arrow {
  transform: translateX(4px);
}


/* ==================================================
   14. Playground 小作品卡片

   只有這一區重新設計。
================================================== */

.project-card--compact {
  width: 100%;
  min-width: 0;
  min-height: 560px;

  display: flex;
  flex-direction: column;

  padding: 0;

  border-radius: 26px;
}

/* ==================================================
   小作品上方展示底板

   先建立統一的中性色展示區，
   不讓作品圖片本身直接決定卡片上方色彩。
================================================== */

.project-card--compact .project-image-panel {
  width: 100%;
  height: auto;

  align-self: auto;

  display: grid;
  place-items: center;

  padding: 20px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 14% 16%,
      rgba(190, 207, 199, 0.2),
      transparent 36%
    ),
    radial-gradient(
      circle at 86% 82%,
      rgba(230, 216, 188, 0.18),
      transparent 38%
    ),
    linear-gradient(
      145deg,
      rgba(242, 245, 241, 0.96),
      rgba(249, 247, 241, 0.92)
    );

  border: 0;
  border-bottom: 1px solid rgba(168, 174, 164, 0.16);
}

/* ==================================================
   小作品 Screen

   圖片不是填滿整個上半部，
   而是放在獨立的 16:9 螢幕框裡。
================================================== */

.project-card--compact .project-screen {
  width: 100%;
  height: auto;

  aspect-ratio: 16 / 9;

  overflow: hidden;

  border: 1px solid rgba(137, 148, 135, 0.24);
  border-radius: 15px;

  background: #ffffff;

  box-shadow:
    0 12px 30px rgba(69, 77, 69, 0.11),
    inset 0 1px 0 rgba(255, 255, 255, 0.94);
}

/*
  小作品用 contain，
  優先完整呈現作品畫面。

  不同作品即使色彩不同，
  外圍仍有一致的白色 Screen 和中性底板。
*/
.project-card--compact .project-image {
  width: 100%;
  height: 100%;

  object-fit: contain;
  object-position: center;

  background: #ffffff;
}

/* 小作品 hover 不需要放太大 */
.project-card--compact:hover .project-image {
  transform: scale(1.015);
}

/* ==================================================
   小作品文字內容
================================================== */

.project-card--compact .project-content {
  flex: 1;

  height: auto;
  min-height: 0;

  justify-content: flex-start;

  overflow: visible;

  padding: 24px 24px 26px;
}

.project-card--compact .project-category {
  margin-bottom: 8px;

  font-size: 0.72rem;
  letter-spacing: 0.13em;
}

.project-card--compact .project-title {
  font-size: clamp(1.4rem, 1.5vw, 1.65rem);
  line-height: 1.35;
}

.project-card--compact .project-subtitle {
  margin-top: 6px;

  font-size: 0.88rem;
  line-height: 1.55;
}

/* 介紹固定三行，保持卡片一致 */
.project-card--compact .project-summary {
  display: -webkit-box;

  min-height: auto;
  margin-top: 12px;

  overflow: hidden;

  font-size: 0.94rem;
  line-height: 1.75;

  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
/* 標籤數量不同時，保留一致高度 */
.project-card--compact .project-technologies {
  min-height: auto;

  align-content: flex-start;

  gap: 7px;
  margin-top: 14px;
}

.project-card--compact .technology-tag {
  min-height: 29px;
  padding: 5px 10px;

  font-size: 0.72rem;
}

/* 按鈕固定靠底 */
.project-card--compact .project-actions {
  margin-top: 18px;
  padding-top: 0;
  display: flex;
  justify-content: center;
}
.project-card--compact .project-link {
  min-width: 136px;
  min-height: 44px;

  padding: 9px 16px;

  font-size: 1rem;
}

/* ========================================
   15. 中型桌機／兩欄
======================================== */

@media (max-width: 1100px) {
  /* 精選作品維持原本設定 */
  .project-card--featured {
    grid-template-columns:
      minmax(0, 47%)
      minmax(0, 53%);

    gap: 18px;
    padding: 18px;
  }

  .project-title {
    font-size: clamp(1.1rem, 1.65vw, 1.6rem);
  }

  .project-summary {
    -webkit-line-clamp: 3;
  }

  .project-features {
    gap: 4px 10px;
  }

  .project-features li {
    font-size: 0.64rem;
  }

  .technology-tag {
    min-height: 23px;
    padding: 3px 8px;
  }

  /* 小作品兩欄時稍微增加展示留白 */
  .project-card--compact {
    min-height: 570px;
  }

  .project-card--compact .project-image-panel {
    padding: 20px;
  }

  .project-card--compact .project-content {
    padding: 24px 24px 26px;
  }

  .project-card--compact .project-title {
    font-size: 1.55rem;
  }

  .project-card--compact .project-summary {
    font-size: 0.95rem;
  }

  .project-card--compact .technology-tag {
    min-height: 29px;
    padding: 5px 10px;

    font-size: 0.72rem;
  }
}

/* ========================================
   16. 手機／一欄
======================================== */

@media (max-width: 700px) {
  .project-card {
    border-radius: 24px;
  }

  /* 精選作品維持原本手機設定 */
  .project-card--featured {
    height: auto;

    aspect-ratio: auto;

    grid-template-columns: 1fr;

    gap: 18px;
    padding: 16px;
  }

  .project-image-panel {
    width: 100%;
    height: auto;

    align-self: auto;
  }

  .project-screen {
    width: 100%;
    height: auto;

    aspect-ratio: 16 / 9;

    border-radius: 16px;
  }

  .project-content {
    height: auto;

    overflow: visible;

    padding: 0;
  }

  .project-category {
    font-size: 0.68rem;
  }

  .project-title {
    font-size: 1.65rem;
  }

  .project-subtitle {
    font-size: 0.86rem;
  }

  .project-summary {
    display: block;

    overflow: visible;

    font-size: 0.9rem;

    -webkit-line-clamp: initial;
  }

  .project-features {
    display: grid;
    gap: 8px;
  }

  .project-features li {
    font-size: 0.76rem;
    white-space: normal;
  }

  .technology-tag {
    min-height: 28px;
    padding: 5px 10px;

    font-size: 0.68rem;
  }

  .project-link {
    width: 100%;
    min-height: 46px;

    font-size: 0.78rem;
  }

  /* 小作品手機版 */
  .project-card--compact {
    min-height: auto;

    padding: 0;

    border-radius: 22px;
  }

  .project-card--compact .project-image-panel {
    padding: 16px;
  }

  .project-card--compact .project-screen {
    border-radius: 13px;
  }

  .project-card--compact .project-content {
    padding: 23px 20px 25px;
  }

  .project-card--compact .project-title {
    font-size: 1.5rem;
  }
  .project-card--compact .project-summary {
    display: -webkit-box;
    min-height: calc(1.75em * 3);
    margin-top: 12px;
    overflow: hidden;
    font-size: 0.94rem;
    line-height: 1.75;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .project-card--compact .project-technologies {
    min-height: 0;
  }

  .project-card--compact .project-actions {
    padding-top: 22px;
  }

  .project-card--compact .project-link {
    width: 100%;
  }
}

/* ========================================
   17. 小手機
======================================== */

@media (max-width: 420px) {
  .project-card--compact .project-image-panel {
    padding: 12px;
  }

  .project-card--compact .project-content {
    padding: 21px 18px 23px;
  }

  .project-card--compact .project-title {
    font-size: 1.4rem;
  }

  .project-card--compact .project-summary {
    font-size: 0.9rem;
  }
}

/* ========================================
   18. 減少動畫
======================================== */

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-image,
  .project-link,
  .project-link-arrow {
    transition: none;
  }
}
</style>
