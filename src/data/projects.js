import communityCollegeImg from '../assets/img/projects/community-college.jpg'
import pawToCrownImg from '../assets/img/projects/paw-to-crown.jpg'
import catFoodReviewImg from '../assets/img/projects/cat-food-review.jpg'
import rockPaperScissorsImg from '../assets/img/projects/rock-paper-scissors.jpg'
import kyotoGuideImg from '../assets/img/projects/kyoto-guide.jpg'
export const projects = [
   {
    id: 2,
    slug: 'paw-to-crown',
    group: 'featured',
    category: 'VUE 3 WEB GAME 個人專案',
    title: '喵喵消消樂',
    englishTitle: 'Paw to Crown',
    summary:
      '使用 Vue 3 與 Matter.js 製作的物理合成遊戲，玩家將不同等級的貓咪與肉球逐步合成，最終進化成貓貓大王。',
    features: ['物理碰撞與合成判定', '分數與下一顆預告', 'Game Over 狀態判斷'],
    technologies: ['Vue 3', 'Matter.js', 'JavaScript', 'CSS', 'GitHub Pages'],
    cover: pawToCrownImg,
    year: '2026',
  },
{
    id: 1,
    slug: 'community-college',
    group: 'featured',
    category: 'VUE 3 團體專案',
    title: '北屯社區大學網站改版',
    englishTitle: 'Beitun Community College Website Redesign',
    summary:
      '重新規劃社區大學網站的資訊架構與課程查找流程，改善原網站內容分散、課程難以搜尋與行動版閱讀不便的問題。',
    features: ['課程搜尋與分類', '動態課程詳情頁', '分頁與瀏覽狀態保留'],
    technologies: ['Vue 3', 'Vue Router', 'JavaScript', 'RWD', 'Figma'],
    cover: communityCollegeImg,
    year: '2026',   
  },

 
  {
    id: 3,
    slug: 'cat-food-review',
    group: 'playground',
    category: 'VUE 3 PERSONAL PROJECT',
    title: '貓罐罐評論館',
    englishTitle: 'Cat Food Review',
    summary:
      '整理不同品牌、肉類與食品類型的貓罐罐資料，並記錄三隻貓咪的喜好、評分與個人收藏。',
    features: ['多條件搜尋篩選', '收藏功能', '三隻貓咪喜好紀錄'],
    technologies: ['Vue 3', 'JavaScript', 'LocalStorage', 'CSS'],
    cover: catFoodReviewImg,
    year: '2026',
    demoUrl:
  "https://kenkenpie.github.io/cat-food-review/"
  },

  {
    id: 4,
    slug: 'rock-paper-scissors',
    group: 'playground',
    category: 'JAVASCRIPT MINI PROJECT',
    title: '猜拳遊戲',
    englishTitle: 'Rock Paper Scissors',
    summary:
      '使用 JavaScript 製作的互動猜拳遊戲，包含電腦隨機出拳、勝負判定與分數紀錄。',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    cover: rockPaperScissorsImg,
    year: '2025',
    demoUrl:
  "https://kenkenpie.github.io/Paper-Scissor-Stone/"
  },

  {
    id: 5,
    slug: 'kyoto-guide',
    group: 'playground',
    category: 'VUE 3 MINI PROJECT',
    title: '京都旅遊網站',
    englishTitle: 'Kyoto Travel Guide',
    summary:
      '以京都地區為主題，整理景點、美食與活動資訊的旅遊導覽網站。',
    technologies: ['Vue 3', 'Vue Router', 'JavaScript', 'RWD'],
    cover: kyotoGuideImg,
    year: '2025',
    demoUrl:
  "https://kenkenpie.github.io/Kyoto-Guide/"
  },

   
]
