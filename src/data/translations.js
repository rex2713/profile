export const translations = {
  zh: {
    nav: {
      about: '關於我',
      skills: '技能',
      experience: '經歷',
      projects: '專案',
      contact: '聯絡',
    },
    hero: {
      greeting: '嗨，我是',
      description: '結合教育思維與前端技術，打造流暢的數位體驗',
      roles: ['前端工程師', 'UI / UX 愛好者', '問題解決者'],
    },
    about: {
      title: 'About Me',
      subtitle: '跨領域背景，專注前端開發',
      bio1: '我是 Rex，一名前端工程師，具備教育與科技跨領域背景。',
      bio2: '過去在教育領域累積了近五年的課程設計與學習體驗優化經驗，現專注於使用 React、Next.js、TailwindCSS 等技術打造高互動性產品。擅長結合教育思維與前端技術，從使用者需求出發，創造流暢的數位體驗。',
      downloadResume: '下載履歷',
      contactMe: '聯絡我',
    },
    skills: {
      title: 'Skills',
      subtitle: '前端為主，全端為輔',
      categories: {
        frontend: 'Front End',
        backend: 'Back End',
        cloud: 'Cloud & Tools',
      },
    },
    experience: {
      title: 'Experience',
      subtitle: '從教育到科技的跨域旅程',
      present: '至今',
      items: [
        {
          company: '翰林出版',
          role: '前端工程師',
          period: '2024/11 ~ 至今',
          highlights: [
            '快答派：Firebase 即時搶答平台 (React + Zustand + Framer Motion)',
            'English Go：Phaser 遊戲引擎 + React 英文互動學習遊戲',
            'AI 圖片生成平台：Next.js 全端 + PostgreSQL + pgvector + Gemini API',
            'AI 英文批改：OIDC 認證 + 師生雙端系統',
            '漢字筆順學習：HanziWriter 互動書寫系統',
            'CI/CD：GitHub Actions + S3 + CloudFront 自動部署',
          ],
        },
        {
          company: '財團法人人工智慧科技基金會',
          role: '前端工程師',
          period: '2024/5 ~ 2024/11',
          highlights: [
            'React + Zustand 打造 AI Chatbot 平台',
            'Next.js SSR + SEO 優化 (OG、Sitemap)',
          ],
        },
        {
          company: '台北商業大學',
          role: '互動式網頁前端設計課程',
          period: '2023/11 ~ 2024/2',
          highlights: [
            '掌握 React 及 MERN 全端開發',
          ],
        },
        {
          company: 'Evolution',
          role: '教師 / 共同創辦人 / 企劃',
          period: '2019/2 ~ 2023/9',
          highlights: [
            '教育領域跨域轉職前的核心經歷',
            '課程規劃、教材設計、活動企劃',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: '精選近期專案作品',
      items: [
        {
          title: '快答派',
          subtitle: '即時互動搶答平台',
          description: '類似 Kahoot 的教育互動平台，支援教師即時搶答、學生自測、課後複習。Firebase Realtime Database 即時同步，含計分系統、QR Code 加入、canvas-confetti 慶祝特效。',
          highlights: ['即時通訊架構', '遊戲化計分邏輯', '含後台管理系統'],
        },
        {
          title: 'English Go',
          subtitle: '英文互動學習遊戲',
          description: '結合 Phaser 遊戲引擎與 React 的英文學習遊戲，以小雞角色 "小G" 在村莊中進行冒險學習。包含 Flashcard、配對、聽力、排行榜、挑戰塔等多種遊戲場景。',
          highlights: ['遊戲引擎整合 React', 'Manager 架構模式', 'Sprite 動畫系統'],
        },
        {
          title: 'AI 圖片生成平台',
          subtitle: '翰林內部 AI 全端平台',
          description: '支援風格/角色模板生成、圖片微調標註、公開圖庫瀏覽、管理後台。pgvector 向量搜尋實現以圖搜圖。',
          highlights: ['全端架構 (Next.js API Routes)', 'AI 深度整合 + 向量搜尋', 'RBAC 三級權限系統'],
        },
        {
          title: 'AI 英文作文批改系統',
          subtitle: 'AI 批改 + 師生雙端',
          description: 'AI 英文作文批改平台，學生上傳作文照片進行 AI 批改，教師端可查看批改紀錄與班級管理。企業級 OIDC 認證整合。',
          highlights: ['師生雙端完整功能', '企業級認證架構', '圖片上傳處理'],
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: '歡迎聯繫，一起交流',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      description: 'Combining educational thinking with frontend technology to create seamless digital experiences',
      roles: ['FRONT-END DEVELOPER', 'UI / UX ENTHUSIAST', 'PROBLEM SOLVER'],
    },
    about: {
      title: 'About Me',
      subtitle: 'Cross-disciplinary background, focused on frontend development',
      bio1: "I'm Rex, a frontend engineer with a cross-disciplinary background in education and technology.",
      bio2: 'With nearly five years of experience in curriculum design and learning experience optimization in education, I now focus on building highly interactive products using React, Next.js, and TailwindCSS. I excel at combining educational thinking with frontend technology to create seamless user experiences.',
      downloadResume: 'Download Resume',
      contactMe: 'Contact Me',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Frontend-focused, full-stack capable',
      categories: {
        frontend: 'Front End',
        backend: 'Back End',
        cloud: 'Cloud & Tools',
      },
    },
    experience: {
      title: 'Experience',
      subtitle: 'A cross-domain journey from education to tech',
      present: 'Present',
      items: [
        {
          company: 'Hanlin Publishing',
          role: 'Frontend Engineer',
          period: '2024/11 ~ Present',
          highlights: [
            'QuickAnswer: Firebase real-time quiz platform (React + Zustand + Framer Motion)',
            'English Go: Phaser game engine + React English learning game',
            'AI Image Generation Platform: Next.js full-stack + PostgreSQL + pgvector + Gemini API',
            'AI Essay Grading: OIDC auth + teacher-student dual system',
            'Chinese Stroke Learning: HanziWriter interactive writing system',
            'CI/CD: GitHub Actions + S3 + CloudFront auto deployment',
          ],
        },
        {
          company: 'AI Technology Foundation (AIF)',
          role: 'Frontend Engineer',
          period: '2024/5 ~ 2024/11',
          highlights: [
            'Built AI Chatbot platform with React + Zustand',
            'Next.js SSR + SEO optimization (OG, Sitemap)',
          ],
        },
        {
          company: 'National Taipei University of Business',
          role: 'Interactive Web Frontend Design Course',
          period: '2023/11 ~ 2024/2',
          highlights: [
            'Mastered React and MERN full-stack development',
          ],
        },
        {
          company: 'Evolution',
          role: 'Teacher / Co-founder / Planner',
          period: '2019/2 ~ 2023/9',
          highlights: [
            'Core experience before transitioning to tech',
            'Curriculum planning, material design, event planning',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected recent works',
      items: [
        {
          title: 'QuickAnswer',
          subtitle: 'Real-time Interactive Quiz Platform',
          description: 'A Kahoot-like educational platform supporting real-time quizzes, self-testing, and review. Firebase Realtime Database sync with scoring system, QR Code join, and canvas-confetti effects.',
          highlights: ['Real-time communication', 'Gamified scoring logic', 'Admin management system'],
        },
        {
          title: 'English Go',
          subtitle: 'English Interactive Learning Game',
          description: 'An English learning game combining Phaser engine with React. Features a chicken character "Little G" adventuring through a village. Includes Flashcard, matching, listening, leaderboard, and challenge tower.',
          highlights: ['Game engine + React integration', 'Manager architecture pattern', 'Sprite animation system'],
        },
        {
          title: 'AI Image Generation Platform',
          subtitle: 'Internal AI Full-stack Platform',
          description: 'Supports style/character template generation, image annotation, public gallery browsing, and admin dashboard. pgvector for image similarity search.',
          highlights: ['Full-stack (Next.js API Routes)', 'AI integration + vector search', 'RBAC 3-tier permission system'],
        },
        {
          title: 'AI Essay Grading System',
          subtitle: 'AI Grading + Teacher-Student Dual System',
          description: 'AI English essay grading platform where students upload essay photos for AI grading. Teachers can view grading records and manage classes. Enterprise OIDC authentication.',
          highlights: ['Complete teacher-student features', 'Enterprise auth architecture', 'Image upload processing'],
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's connect and chat",
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};
