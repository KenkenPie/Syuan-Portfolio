import htmlLogo from "../assets/img/skills/html.svg";
import cssLogo from "../assets/img/skills/css.svg";
import javascriptLogo from "../assets/img/skills/javascript.svg";
import vueLogo from "../assets/img/skills/vue.svg";
import githubLogo from "../assets/img/skills/github.svg";

export const skills = [
  {
    id: 1,
    title: "HTML",
    description: "語意化結構、SEO 基礎與網頁架構設計",
    logo: htmlLogo,
  },
  {
    id: 2,
    title: "CSS",
    description: "Flexbox、Grid、動畫效果與 RWD 響應式設計",
    logo: cssLogo,
  },
  {
    id: 3,
    title: "JavaScript",
    description: "ES6+、DOM 操作、事件處理與資料邏輯",
    logo: javascriptLogo,
  },
  {
    id: 4,
    title: "Vue 3",
    description: "Composition API、Router、Component 開發",
    logo: vueLogo,
  },
  {
    id: 5,
    title: "Git & GitHub",
    description: "版本控制、團隊協作與 GitHub Pages 部署",
    logo: githubLogo,
  },
];

export const projects = [
  {
    id: "cat-food",
    title: "貓罐罐評論館",
    icon: "🐱",
    description: "記錄三隻貓對不同罐頭的喜好與評分。",
    detail: "這個作品練習了表單輸入、資料新增、卡片呈現與篩選功能。",
    tech: ["Vue 3", "JavaScript", "CSS"],
    favorite: false,
  },
  {
    id: "kyoto",
    title: "京都旅遊網站",
    icon: "⛩️",
    description: "以京都景點為主題的旅遊網站。",
    detail: "這個作品練習 Vue Router、動態路由與多頁面資料呈現。",
    tech: ["Vue Router", "Vue 3", "CSS"],
    favorite: false,
  },
  {
    id: "rps",
    title: "猜拳遊戲",
    icon: "🤲",
    description: "剪刀、石頭、布互動小遊戲。",
    detail: "這個作品練習 JavaScript 條件判斷、隨機數與畫面更新。",
    tech: ["JavaScript", "HTML", "CSS"],
    favorite: false,
  },
  {
    id: "color-game",
    title: "色弱挑戰",
    icon: "🎨",
    description: "在多個色塊中找出顏色不同的一格。",
    detail: "這個作品練習 Vue 的 ref、computed、事件處理與遊戲狀態控制。",
    tech: ["Vue 3", "JavaScript", "CSS"],
    favorite: false,
  },
  {
    id: "product-card",
    title: "商品卡片展示",
    icon: "🛍️",
    description: "使用元件製作商品卡片列表。",
    detail: "這個作品練習 props、v-for、圖片呈現與元件拆分。",
    tech: ["Vue 3", "Props", "CSS"],
    favorite: false,
  },
];