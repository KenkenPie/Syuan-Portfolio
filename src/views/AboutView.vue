<script setup>
import aboutPhoto from "../assets/img/about/about-main.jpg";

import life01 from "../assets/img/about/life-01.jpg";
import life02 from "../assets/img/about/life-02.jpg";
import life03 from "../assets/img/about/life-03.jpg";
import life04 from "../assets/img/about/life-04.jpg";
import life05 from "../assets/img/about/life-05.jpg";
import htmlLogo from "../assets/img/skills/html.svg";
import cssLogo from "../assets/img/skills/css.svg";
import javascriptLogo from "../assets/img/skills/javascript.svg";
import vueLogo from "../assets/img/skills/vue.svg";
import githubLogo from "../assets/img/skills/github.svg";
import figmaLogo from "../assets/img/skills/figma.svg";

const experiences = [
  {
    year: "2026",
    title: "前端工程師職訓課程",
    text: "學習 Vue 3、JavaScript、RWD、Html、CSS、Git 與專題開發，並完成團體專題與個人作品。",
  },
  {
    year: "2021 - 2025",
    title: "製造業-國外業務專員",
    text: "負責代理商窗口、專案追蹤與跨部門溝通，累積需求整理與協作經驗。",
  },
  {
    year: "2019 - 2020",
    title: "日本打工渡假",
    text: "在日本生活與工作期間，累積跨文化交流經驗，並培養主動學習、獨立規劃與解決問題的能力。",
  },
  {
    year: "Before",
    title: "應用外語系畢業",
    text: "具備英文與日文基礎溝通能力，能閱讀文件並與不同背景的合作對象溝通。",
  },
];

const lifePhotos = [life01, life02, life03, life04, life05];
</script>

cript>

<template>
  <main class="about-page">
    <!-- Hero -->
    <section class="about-hero">
      <div class="about-hero-text">
        <p class="section-label">ABOUT ME</p>

        <h1>
          Frontend Learner<br />
          & Problem Solver
        </h1>

        <p class="about-intro">
          喜歡旅行、攝影與貓咪，也喜歡從生活中的觀察尋找設計靈感。我喜歡透過程式解決問題，並享受從需求分析、資訊架構規劃到介面設計與開發的完整過程。目前專注於
          Vue 3 前端開發，持續透過專題與個人作品累積實作經驗。
        </p>
      </div>

      <div class="about-photo">
        <img :src="aboutPhoto" alt="about photo" />
      </div>
    </section>

    <!-- Skills -->
    <section class="about-section">
      <div class="section-heading">
        <span>01</span>
        <h2>
          Skills
          <small>技能工具</small>
        </h2>
      </div>

      <div class="about-skills">
        <div class="skill-item">
          <img :src="vueLogo" alt="Vue" />
          <span>Vue 3</span>
        </div>

        <div class="skill-item">
          <img :src="javascriptLogo" alt="JavaScript" />
          <span>JavaScript</span>
        </div>

        <div class="skill-item">
          <img :src="htmlLogo" alt="HTML" />
          <span>HTML</span>
        </div>

        <div class="skill-item">
          <img :src="cssLogo" alt="CSS" />
          <span>CSS</span>
        </div>

        <div class="skill-item">
          <img :src="githubLogo" alt="GitHub" />
          <span>GitHub</span>
        </div>

        <div class="skill-item">
          <img :src="figmaLogo" alt="Figma" />
          <span>Figma</span>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="about-section">
      <div class="section-heading">
        <span>02</span>
        <h2>
          Experience
          <small>經歷背景</small>
        </h2>
      </div>

      <div class="timeline">
        <article
          v-for="item in experiences"
          :key="item.title"
          class="timeline-item"
        >
          <span class="timeline-year">{{ item.year }}</span>

          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Life Outside Coding -->
    <section class="about-section life-section">
      <div class="life-left">
        <div class="life-text">
          <div class="section-heading">
            <span>03</span>
            <h2>
              Life Outside Coding
              <small></small>
            </h2>
          </div>

          <p>
            除了前端開發之外，我也喜歡透過旅行與攝影觀察生活。
            記錄光線、色彩與空間的過程，也影響了我對版面配置、留白與視覺節奏的理解。
          </p>
        </div>

        <div class="life-small-photos">
          <div class="life-photo">
            <img :src="lifePhotos[3]" alt="life photo 4" />
          </div>

          <div class="life-photo">
            <img :src="lifePhotos[4]" alt="life photo 5" />
          </div>
        </div>
      </div>

      <div class="life-right">
        <div class="top-photos">
          <div class="life-photo">
            <img :src="lifePhotos[0]" alt="life photo 1" />
          </div>

          <div class="life-photo">
            <img :src="lifePhotos[1]" alt="life photo 2" />
          </div>
        </div>

        <div class="mountain-photo">
          <img :src="lifePhotos[2]" alt="life photo 3" />
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="about-contact">
      <p>LET'S BUILD SOMETHING TOGETHER</p>

      <h2>期待用前端把想法做成真實可使用的作品。</h2>

      <div class="contact-actions">
        <!-- <a href="mailto:your-email@example.com">Email ↗</a>
        <a href="https://github.com/你的帳號" target="_blank">GitHub ↗</a> -->
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  padding: 72px 0 120px;
  color: var(--text-main, #273343);
}

/* Hero */

.about-hero {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 64px;
  align-items: center;
  margin-bottom: 120px;
}

.section-label {
  margin-bottom: 18px;
  color: var(--sage-green, #879a7e);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.about-hero h1 {
  margin: 0;
  color: var(--text-main, #273343);
  font-family: var(--font-serif);
  font-size: clamp(42px, 6vw, 76px);
  line-height: 1.08;
}

.about-intro {
  max-width: 560px;
  margin-top: 28px;
  color: var(--text-muted, #6d7680);
  font-size: 18px;
  line-height: 2;
}

.about-photo {
  overflow: hidden;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 24px 60px rgba(73, 78, 69, 0.12);
}

.about-photo img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

/* Section */

.about-section {
  margin-top: 104px;
}

.section-heading {
  margin-bottom: 32px;
}

.section-heading span {
  display: block;
  margin-bottom: 10px;
  color: var(--gold, #c8a46a);
  font-size: 14px;
  font-weight: 700;
}

.section-heading h2 {
  margin: 0;
  color: var(--text-main, #273343);
  font-family: var(--font-serif);
  font-size: 34px;
  line-height: 1.25;
}

.section-heading small {
  display: block;
  margin-top: 8px;
  color: var(--sage-green, #879a7e);
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 600;
}

/* Skills */
.about-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-top: 32px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 150px;
  padding: 12px 16px;
  border: 1px solid rgba(143, 157, 131, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  color: #6f7d63;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
}

.skill-item img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(61%) sepia(18%) saturate(513%)
    hue-rotate(57deg) brightness(91%) contrast(84%);
}

/* Timeline */

.timeline {
  display: grid;
  gap: 20px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 28px;
  padding: 28px 30px;
  border: 1px solid rgba(223, 229, 223, 0.9);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.76);
}

.timeline-year {
  color: var(--gold, #c8a46a);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.timeline-item h3 {
  margin: 0 0 10px;
  color: var(--text-main, #273343);
  font-size: 22px;
}

.timeline-item p {
  margin: 0;
  color: var(--text-muted, #6d7680);
  font-size: 16px;
  line-height: 1.8;
}

/* Life Outside Coding */

.life-section {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: stretch;
}

.life-left {
  display: flex;
  flex-direction: column;
}

.life-text p {
  margin: 0;
  color: var(--text-muted, #6d7680);
  font-size: 18px;
  line-height: 2;
}

.life-small-photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: auto;
}

.life-small-photos .life-photo,
.mountain-photo {
  height: 331px;
}

.life-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.top-photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.top-photos .life-photo {
  height: 330px;
}

.life-photo,
.mountain-photo {
  overflow: hidden;
  border-radius: 24px;
  background: #e7ece2;
}

.life-photo img,
.mountain-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.life-photo:hover img,
.mountain-photo:hover img {
  transform: scale(1.05);
}

/* 個別照片裁切位置 */

.top-photos .life-photo:nth-child(1) img {
  object-position: center center;
}

.top-photos .life-photo:nth-child(2) img {
  object-position: center center;
}

.life-small-photos .life-photo:nth-child(1) img {
  object-position: center center;
}

.life-small-photos .life-photo:nth-child(2) img {
  object-position: center center;
}

.mountain-photo img {
  object-position: center center;
}

/* Contact */

.about-contact {
  margin-top: 120px;
  padding: 56px;
  border-radius: 34px;
  background:
    radial-gradient(
      circle at 12% 18%,
      rgba(135, 154, 126, 0.18),
      transparent 38%
    ),
    radial-gradient(
      circle at 88% 82%,
      rgba(200, 164, 106, 0.16),
      transparent 36%
    ),
    rgba(255, 255, 255, 0.78);
  text-align: center;
}

.about-contact p {
  margin: 0 0 16px;
  color: var(--gold, #c8a46a);
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.about-contact h2 {
  margin: 0 auto;
  color: var(--text-main, #273343);
  font-family: var(--font-serif);
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.4;
}

.contact-actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 34px;
}

/* .contact-actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 22px;
  border-radius: 999px;
  background: var(--sage-green, #879a7e);
  color: white;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease; */
/* } */

.contact-actions a:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(135, 154, 126, 0.22);
}

/* RWD */

@media (max-width: 900px) {
  .about-page {
    width: min(100% - 40px, 1120px);
    padding-top: 56px;
  }

  .about-hero {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 88px;
  }

  .about-photo {
    max-width: 420px;
  }

  .skill-grid {
    grid-template-columns: 1fr;
  }

  .life-section {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .life-small-photos {
    margin-top: 28px;
  }

  .top-photos .life-photo {
    height: 220px;
  }

  .life-small-photos .life-photo,
  .mountain-photo {
    height: 280px;
  }
}

@media (max-width: 600px) {
  .about-page {
    width: min(100% - 28px, 1120px);
    padding: 42px 0 88px;
  }

  .about-section {
    margin-top: 76px;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 24px;
  }

  .life-small-photos,
  .top-photos {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .top-photos .life-photo {
    height: 170px;
  }

  .life-small-photos .life-photo {
    height: 220px;
  }

  .mountain-photo {
    height: 210px;
  }

  .life-photo,
  .mountain-photo {
    border-radius: 18px;
  }

  .about-contact {
    margin-top: 86px;
    padding: 38px 24px;
  }
}

@media (max-width: 420px) {
  .top-photos .life-photo {
    height: 145px;
  }

  .life-small-photos .life-photo {
    height: 190px;
  }

  .mountain-photo {
    height: 180px;
  }
}
</style>
