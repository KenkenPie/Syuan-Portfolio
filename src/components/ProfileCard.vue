<template>
  <section class="profile-card">
    <div class="profile-text">
      <p class="hello">FRONTEND PORTFOLIO</p>

      <h1>Syuan</h1>

      <h2>Frontend Developer</h2>

      <p>
        我喜歡透過程式解決問題，並將想法轉化為實際產品。專注於 Vue 3
        前端開發，重視使用者體驗、資訊架構與介面細節，持續透過專案實作累積開發經驗。
      </p>

      <div class="hero-buttons">
        <RouterLink to="/projects" class="hero-btn"> VIEW MY WORKS </RouterLink>
      </div>
    </div>

    <div class="profile-photo-box">
      <img src="../assets/img/profile.jpg" alt="profile image" />
    </div>
  </section>
</template>

<style scoped>
.profile-card {
  background: transparent;
}
</style>
