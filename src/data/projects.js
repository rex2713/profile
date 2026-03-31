const projects = [
  {
    title: '快答派',
    subtitle: '即時互動搶答平台',
    description:
      '類似 Kahoot 的教育互動平台，支援教師即時搶答、學生自測、課後複習。Firebase Realtime Database 即時同步，含計分系統、QR Code 加入、canvas-confetti 慶祝特效。',
    tags: ['React 19', 'TypeScript', 'Zustand', 'Firebase', 'Framer Motion'],
    highlights: ['即時通訊架構', '遊戲化計分邏輯', '含後台管理系統'],
  },
  {
    title: 'English Go',
    subtitle: '英文互動學習遊戲',
    description:
      '結合 Phaser 遊戲引擎與 React 的英文學習遊戲，以小雞角色 "小G" 在村莊中進行冒險學習。包含 Flashcard、配對、聽力、排行榜、挑戰塔等多種遊戲場景。',
    tags: ['React 19', 'TypeScript', 'Phaser 3', 'Tailwind CSS'],
    highlights: ['遊戲引擎整合 React', 'Manager 架構模式', 'Sprite 動畫系統'],
  },
  {
    title: 'AI 圖片生成平台',
    subtitle: '翰林內部 AI 全端平台',
    description:
      '支援風格/角色模板生成、圖片微調標註、公開圖庫瀏覽、管理後台。pgvector 向量搜尋實現以圖搜圖。',
    tags: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Gemini API', 'AWS S3'],
    highlights: ['全端架構 (Next.js API Routes)', 'AI 深度整合 + 向量搜尋', 'RBAC 三級權限系統'],
  },
  {
    title: 'AI 英文作文批改系統',
    subtitle: 'AI 批改 + 師生雙端',
    description:
      'AI 英文作文批改平台，學生上傳作文照片進行 AI 批改，教師端可查看批改紀錄與班級管理。企業級 OIDC 認證整合。',
    tags: ['React 19', 'TypeScript', 'MUI', 'OIDC', 'Axios'],
    highlights: ['師生雙端完整功能', '企業級認證架構', '圖片上傳處理'],
  },
];

export default projects;
