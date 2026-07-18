# 🚀 KC AlphaMedia — Digital Growth & Revenue Engineering Agency Platform

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Google Gemini AI](https://img.shields.io/badge/AI_Engine-Gemini_2.0-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Motion](https://img.shields.io/badge/Animation-Framer_Motion-F24E1E?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge)](LICENSE)

> **The Alpha Standard in Digital Growth**. A production-grade agency web application built for **KC AlphaMedia** — a legacy growth firm managing over **₹50Cr+ in ad spend** across 10 years of market dominance. Powered by **19 AI-specialized growth departments** and integrated real-time Gemini AI strategy audits.

---

## ⚡ Key Highlights & Core Capabilities

- 📊 **₹50Cr+ Ad Spend Track Record**: High-converting web experience presenting agency track record, case studies, and performance data.
- 🤖 **Gemini AI Audit Engine (`@google/genai`)**: Integrated AI strategy engine that generates real-time, customized growth audits based on client budget, industry sector, and existing ROAS bottlenecks.
- ⚡ **19 AI-Specialized Growth Departments**: Interactive Growth Arsenal grid detailing agency execution teams (Performance Marketing, AI Creative Operations, Funnel Engineering, Retention & LTV, Organic Search Dominance, etc.).
- 🎨 **Modern Futuristic UI**: Built with TailwindCSS v4, dark glassmorphism, glowing neon accents, and GPU-accelerated Motion animations.
- 📈 **Interactive Proof of Work Dashboard**: Dynamic case study cards featuring ROAS multipliers, revenue growth metrics, and sector breakdowns.

---

## 🏗 System Architecture & Component Structure

```text
kc-alphamedia/
├── index.html                # Entry HTML with custom SEO metadata & Google Fonts
├── package.json              # Project dependencies & script configuration
├── vite.config.ts            # Vite 6 bundler configuration
├── tsconfig.json             # TypeScript 5.8 strict compiler options
└── src/
    ├── App.tsx               # Main application container & layout structure
    ├── main.tsx              # React 19 root entry point
    ├── index.css             # Tailwind v4 theme utility declarations & custom animations
    └── components/
        ├── Navbar.tsx        # Responsive sticky glassmorphic navigation
        ├── Hero.tsx          # High-impact Hero with dynamic gradient text & CTAs
        ├── StatsBar.tsx      # Agency metric counter (10 Yrs, ₹50Cr+ Spend, 99.2% Retention)
        ├── Marquee.tsx       # Continuous brand logo ticker
        ├── About.tsx         # Agency mission, vision, & competitive positioning
        ├── Sectors.tsx       # Target industry verticals (D2C, B2B SaaS, E-Commerce, Healthcare)
        ├── Problem.tsx       # Problem statement showcase vs. traditional agencies
        ├── Arsenal.tsx       # 19 AI Growth Departments interactive filter grid
        ├── Advantage.tsx     # Competitive advantage metrics & technology edge
        ├── ProofOfWork.tsx   # Verified client case studies & ROAS growth graphs
        ├── FAQ.tsx           # Interactive accordions addressing client objections
        ├── Insights.tsx      # Gemini AI Strategy Engine for instant growth audits
        └── Footer.tsx        # Full contact section, consultation booking, & legal
```

---

## 🛠 Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | **React 19** | Component-driven UI architecture with latest React compiler features |
| **Language** | **TypeScript 5.8** | Full static type safety across components and API models |
| **Styling** | **TailwindCSS v4** | Modern utility-first CSS framework with custom glassmorphism design tokens |
| **Build Tool** | **Vite 6** | Instant HMR development server and optimized production bundle compilation |
| **AI Integration** | **@google/genai (Gemini API)** | Direct integration with Gemini 2.0 Flash for automated marketing strategy reports |
| **Animations** | **Motion (Framer Motion)** | Fluid scroll-triggered animations, page entry transitions, and micro-interactions |
| **Iconography** | **Lucide React** | Modern vector icon set |
| **Server/Database** | **Express + Better-SQLite3** | Backend endpoints for local strategy lead management and caching |

---

## 🚀 Quick Start & Local Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **yarn**

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Bhanu-teja-VCE/kc-alphamedia.git
cd kc-alphamedia
npm install
```

### 3. Environment Setup (Optional for AI Audit Features)
Create a `.env.local` file in the project root:
```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 💼 Resume & Portfolio Showcase

If you are reviewing this repository as part of a technical portfolio, here are key engineering accomplishments demonstrated in this project:

- **React 19 & Modern Web Architecture**: Architected a production-ready agency web application utilizing React 19 component design patterns, TypeScript interfaces, and Vite 6 build pipelines.
- **AI API Integration (`@google/genai`)**: Engineered a dynamic client audit tool leveraging Google Gemini AI to generate structured, contextual marketing insights in real time based on user inputs.
- **Advanced UI/UX & Micro-Interactions**: Implemented a responsive dark glassmorphism design system using TailwindCSS v4 and Framer Motion for GPU-accelerated, 60fps animations.
- **Performance & SEO Optimization**: Optimized bundle size (sub-400kB total JS bundle) with dynamic component splitting, custom typography preloading, and complete OpenGraph social card metadata.

---

## 📄 License & Credits

Built with ❤️ by **Bhanu Teja** for **KC AlphaMedia**.  
Released under the [Apache 2.0 License](LICENSE).
