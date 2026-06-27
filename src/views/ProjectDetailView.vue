<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import communityImg from '../assets/img/projects/community-college.jpg'
import nekoImg from '../assets/img/projects/paw-to-crown.jpg'

const route = useRoute()

const projects = {
  'community-college': {
    label: 'VUE 3 TEAM PROJECT',
    title: '北屯社區大學網站改版',
    englishTitle: 'Beitun Community College Website Redesign',
    type: '團隊專題',
    role: 'Front-end Developer',
    duration: '4 Weeks',
    year: '2026',
    tech: ['Vue 3', 'Vue Router', 'Swiper', 'Ant Design Vue', 'RWD'],
    image: communityImg,
    demoUrl: 'https://nchu-11503-taichung-ymca.dev-hub.io/',
    githubUrl: 'https://github.com/KenkenPie/NCHU-11503-TaichungYMCA',
    overview:
      '以北屯社區大學官方網站為改版對象，重新規劃資訊架構與課程查詢流程，提升使用者瀏覽、搜尋與報名課程的體驗。',
    problems: [
      '原網站資訊層級較混亂，使用者不容易快速理解內容重點。',
      '課程資料以表格呈現，缺少清楚的搜尋與篩選流程。',
      '行動裝置閱讀與操作體驗較不直覺。',
    ],
    roleItems: [
      '負責課程查詢頁與課程詳情頁開發',
      '實作搜尋、分類篩選、分頁與列表切換',
      '規劃 Vue Router 動態路由與 query 狀態保留',
      '完成 RWD 響應式版面調整',
    ],
    solutions: [
      {
        title: '課程搜尋與篩選',
        text: '使用 computed 即時篩選課程資料，讓使用者能依關鍵字與分類快速找到課程。',
      },
      {
        title: 'Router 狀態保留',
        text: '透過 query 保留搜尋條件與頁碼，從詳情頁返回列表時可維持原本瀏覽狀態。',
      },
      {
        title: '響應式設計',
        text: '針對桌機、平板與手機尺寸重新調整卡片、列表與詳情頁排版。',
      },
    ],
    reflection:
      '這次專案讓我參與從網站企劃到前端開發的完整流程。我負責課程資料整理、課程查詢功能與課程詳情頁開發，並協助重新規劃網站資訊架構。過程中整理大量課程資料，思考如何透過分類、搜尋與篩選功能降低使用者查找資訊的成本。透過實作 Vue Router、元件化開發與 RWD 設計，我更理解前端開發除了畫面呈現之外，也需要兼顧資料結構、使用者流程與整體體驗。同時，作為第一次參與多人協作專案，也讓我學習到如何與團隊共同討論需求、協調開發進度，以及在整合階段解決不同頁面之間的銜接問題。',
  },

  'paw-to-crown': {
  label: 'PERSONAL PROJECT',
  title: '喵喵消消樂',
  englishTitle: 'Paw to Crown',
  type: '個人專題',
  role: 'Front-end Developer / Designer',
  duration: '3 Days',
  year: '2026',
  tech: ['Vue 3', 'Matter.js', 'Vite', 'GitHub Pages', 'CSS','RWD'],
  image: nekoImg,
  demoUrl: 'https://kenkenpie.github.io/neko_merge_game/',
  githubUrl: 'https://github.com/KenkenPie/neko_merge_game',
  overview:
    '以水果合成遊戲為靈感，結合貓咪主題與 Matter.js 物理引擎，製作具有碰撞、合成、分數、Next 預告與 Game Over 機制的網頁小遊戲。除了完成基本玩法，也針對手機操作、物理參數與部署問題進行多次調整。',

  problems: [
    'Matter.js 的球體碰撞會連續觸發，導致相同等級的貓咪在合成時可能重複生成。',
    '不同尺寸的貓咪圖片與實際碰撞圓形不完全一致，容易出現視覺空隙或堆疊不自然。',
    '手機版拖曳位置、預覽線與實際落下位置容易偏移，需要另外處理觸控座標。',
    '當球體堆疊到紅線附近時，不能只用瞬間高度判定，否則容易誤觸 Game Over。',
    '部署到 GitHub Pages 時，需要處理 Vite base 路徑與圖片資源路徑，避免上線後畫面空白或圖片失效。',
  ],

  roleItems: [
    '獨立完成遊戲規劃、畫面設計與前端開發',
    '使用 Matter.js 建立物理世界、牆壁、地板、球體與碰撞事件',
    '設計 12 階貓咪合成等級與 Next 預告機制',
    '調整球體尺寸、摩擦力、彈力與合成手感',
    '處理手機版拖曳操作與 RWD 顯示問題',
    '部署至 GitHub Pages 作為線上 Demo',
  ],

  solutions: [
    {
      title: '碰撞合成機制',
      text: '監聽 Matter.js collisionStart，判斷兩個物件是否為相同 level，符合條件時移除舊球並在碰撞位置生成下一階貓咪。',
    },
    {
      title: '防止重複合成',
      text: '在球體資料中加入 isMerging 狀態，當物件正在合成時先鎖定，避免同一組碰撞在短時間內重複觸發。',
    },
    {
      title: '球體尺寸與視覺校正',
      text: '依照每個貓咪圖像重新設定 BALL_SIZES，讓圖片大小與碰撞範圍更接近，減少圖片外緣空白造成的違和感。',
    },
    {
      title: '手機操作優化',
      text: '將滑鼠與觸控操作分開處理，透過 touch event 計算相對於遊戲容器的位置，改善手機拖曳預覽與實際落點偏移。',
    },
    {
      title: 'Game Over 判定',
      text: '不是球體一碰到紅線就結束，而是判斷球體停止後，若最上緣超過紅線並持續約 1.5 秒，才觸發 Game Over，降低誤判機率。',
    },
    {
      title: 'GitHub Pages 部署',
      text: '調整 Vite 專案的 base 設定與圖片 import 路徑，確保打包後的靜態資源能在 GitHub Pages 正常載入。',
    },
  ],

  reflection:
    '這個作品是利用團體專題告一段落後的時間完成的，這個作品我第一次完整處理遊戲邏輯、物理引擎、手機互動與部署流程。過程中遇到最多問題的不是畫面，而是狀態判斷與事件觸發，例如碰撞重複觸發、Game Over 誤判、手機座標偏移等。透過這次專案，我更理解前端開發不只是完成 UI，也需要處理資料狀態、使用者操作、效能與實際上線後的環境差異。',
},
}

const project = computed(() => projects[route.params.slug])
</script>
<template>
  <main v-if="project" class="project-detail-page">
    <RouterLink to="/projects" class="back-link">
      ← 返回作品列表
    </RouterLink>

    <!-- Hero -->
    <section class="detail-hero">
      <div class="hero-text">
        <p class="project-label">{{ project.label }}</p>

        <h1>{{ project.title }}</h1>

        <p class="english-title">
          {{ project.englishTitle }}
        </p>

        <div class="hero-actions">
          <a
            :href="project.demoUrl"
            target="_blank"
            class="primary-btn"
          >
            Live Demo ↗
          </a>

          <a
            :href="project.githubUrl"
            target="_blank"
            class="secondary-btn"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div class="hero-image">
        <img
          :src="project.image"
          :alt="project.title"
        />
      </div>
    </section>

    <!-- Project Info -->
    <section class="project-info">
      <div>
        <span>Role</span>
        <strong>{{ project.role }}</strong>
      </div>

      <div>
        <span>Type</span>
        <strong>{{ project.type }}</strong>
      </div>

      <div>
        <span>Duration</span>
        <strong>{{ project.duration }}</strong>
      </div>

      <div>
        <span>Year</span>
        <strong>{{ project.year }}</strong>
      </div>
    </section>

    <!-- Overview -->
    <section class="detail-section split-section">
      <div class="section-title">
        <span>01</span>

        <h2>
          Project Overview
          <small>專案概述</small>
        </h2>
      </div>

      <div class="section-content">
        <p>{{ project.overview }}</p>

        <div class="tech-list">
          <span
            v-for="item in project.tech"
            :key="item"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </section>

    <!-- Problem -->
    <section class="detail-section split-section">
      <div class="section-title">
        <span>02</span>

        <h2>
          Problem
          <small>問題分析</small>
        </h2>
      </div>

      <div class="card-grid">
        <article
          v-for="(item, index) in project.problems"
          :key="item"
          class="info-card"
        >
          <span class="card-number">
            0{{ index + 1 }}
          </span>

          <p>{{ item }}</p>
        </article>
      </div>
    </section>

    <!-- My Role -->
    <section class="detail-section split-section">
      <div class="section-title">
        <span>03</span>

        <h2>
          My Role
          <small>負責項目</small>
        </h2>
      </div>

      <div class="section-content">
        <ul class="check-list">
          <li
            v-for="item in project.roleItems"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Solution -->
    <section class="detail-section split-section">
      <div class="section-title">
        <span>04</span>

        <h2>
          Technical Solution
          <small>技術解法</small>
        </h2>
      </div>

      <div class="solution-list">
        <article
          v-for="item in project.solutions"
          :key="item.title"
          class="solution-card"
        >
          <h3>{{ item.title }}</h3>

          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <!-- Reflection -->
    <section class="detail-section split-section">
      <div class="section-title">
        <span>05</span>

        <h2>
          Reflection
          <small>專案心得</small>
        </h2>
      </div>

      <div class="section-content">
        <p>{{ project.reflection }}</p>
      </div>
    </section>
  </main>

  <main
    v-else
    class="project-detail-page"
  >
    <p>找不到此作品。</p>

    <RouterLink
      to="/projects"
      class="back-link"
    >
      ← 返回作品列表
    </RouterLink>
  </main>
</template>

<style scoped>
.project-detail-page {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 72px 0 120px;
  color: #374151;
}

.back-link {
  display: inline-block;
  margin-bottom: 36px;
  color: #6f7d63;
  text-decoration: none;
  font-size: 15px;
}

.detail-hero {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 48px;
}

.project-label {
  margin: 0 0 14px;
  color: #8f9d83;
  font-size: 13px;
  letter-spacing: 0.16em;
  font-weight: 700;
}

.hero-text h1 {
  margin: 0;
  font-size: clamp(36px, 5vw, 64px);
  line-height: 1.08;
  color: #374151;
}

.english-title {
  margin: 18px 0 0;
  color: #6b7280;
  font-size: 20px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 22px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: 0.25s ease;
}

.primary-btn {
  background: #8f9d83;
  color: #ffffff;
}

.secondary-btn {
  background: #ffffff;
  color: #6f7d63;
  border: 1px solid #d8e0d1;
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-3px);
}

.hero-image {
  overflow: hidden;
  border-radius: 32px;
  background: #ffffff;
  box-shadow: 0 24px 60px rgba(111, 125, 99, 0.16);
}

.hero-image img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.project-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 96px;
}

.project-info div {
  padding: 22px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid #d8e0d1;
}

.project-info span {
  display: block;
  margin-bottom: 8px;
  color: #8f9d83;
  font-size: 13px;
  font-weight: 700;
}

.project-info strong {
  color: #374151;
  font-size: 16px;
}

.detail-section {
  margin-top: 96px;
}

.split-section {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 56px;
}

.section-title span {
  display: block;
  margin-bottom: 10px;
  color: #8f9d83;
  font-size: 14px;
  font-weight: 700;
}

.section-title h2 {
  margin: 0;
  color: #374151;
  font-size: 28px;
  line-height: 1.25;
}

.section-content p {
  margin: 0;
  color: #4b5563;
  font-size: 18px;
  line-height: 1.9;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.tech-list span {
  padding: 8px 14px;
  border-radius: 999px;
  background: #e7ece2;
  color: #6f7d63;
  font-size: 13px;
  font-weight: 700;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.info-card,
.solution-card {
  padding: 26px;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid #d8e0d1;
  box-shadow: 0 18px 40px rgba(111, 125, 99, 0.1);
}

.card-number {
  display: block;
  margin-bottom: 28px;
  color: #8f9d83;
  font-size: 14px;
  font-weight: 700;
}

.info-card p,
.solution-card p {
  margin: 0;
  color: #4b5563;
  font-size: 16px;
  line-height: 1.75;
}

.check-list {
  display: grid;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.check-list li {
  position: relative;
  padding-left: 30px;
  color: #4b5563;
  font-size: 18px;
  line-height: 1.7;
}

.check-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: #8f9d83;
  font-weight: 700;
}

.solution-list {
  display: grid;
  gap: 18px;
}

.solution-card h3 {
  margin: 0 0 12px;
  color: #374151;
  font-size: 20px;
}

/* RWD */
@media (max-width: 900px) {
  .detail-hero {
    grid-template-columns: 1fr;
  }

  .project-info {
    grid-template-columns: repeat(2, 1fr);
  }

  .split-section {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .project-detail-page {
    width: min(100% - 28px, 1120px);
    padding-top: 48px;
  }

  .project-info {
    grid-template-columns: 1fr;
  }

  .detail-section {
    margin-top: 72px;
  }

  .hero-image {
    border-radius: 24px;
  }

  .info-card,
  .solution-card {
    border-radius: 22px;
    padding: 22px;
  }
}
</style>