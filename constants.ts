
import { NavLink, Category, PetSkin, BuiltInGame } from './types';

// Enhanced Pixel Art SVG Library
export const PIXEL_ICONS: Record<string, string> = {
  ALL: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M7 0h2v2H7V0zM5 2h6v2H5V2zM3 4h10v2H3V4zM1 6h14v6H1V6zm2 6h10v2H3v-2zm2 2h6v2H5v-2z" /></svg>`,
  COLLECTION: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M7 2h2v2H7V2zM5 4h6v2H5V4zM3 6h10v2H3V6zM1 8h14v2H1V8zm2 2h10v2H3v-2zm2 2h6v2H5v-2zm2 2h2v2H7v-2z" /></svg>`,
  AI: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 0h8v2H4V0zM2 2h12v2H2V2zM0 4h16v8H0V4zm2 8h12v2H2v-2zm2 2h8v2H4v-2zm1-8h2v2H5V6zm4 0h2v2H9V6zm-4 4h6v2H5v-2z" /></svg>`,
  DESIGN: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M10 0h4v2h-4V0zM8 2h4v2H8V2zM6 4h4v2H6V4zM4 6h4v2H4V6zM2 8h4v2H2V8z" /></svg>`,
  FRONTEND: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M0 2h16v12H0V2zm2 2v8h12V4H2zm2 1h2v2H4V5zm0 4h2v2H4V9zm4-4h4v2H8V5zm0 4h4v2H8V9z" /></svg>`,
  MEDIA: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 2h12v8H2V2zm0 10h12v2H2v-2zM4 4h4v4H4V4zm6 0h2v2h-2V4zm0 4h2v2h-2V8z" /></svg>`,
  TOOLS: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M10 0h6v6h-2V2h-4V0zM0 0h6v2H2v4H0V0zm0 10h2v4h4v2H0v-6zm10 6v-2h4v-4h2v6h-6zM6 6h4v4H6V6z" /></svg>`,
  GAME: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M3 4h10v6H3V4zm-2 2h2v2H1V6zm12 0h2v2h-2V6zm-9 6h8v2H4v-2z" /></svg>`,
  SCISSORS: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 2h2v2H4V2zm6 0h2v2h-2V2zM3 4h4v2H3V4zm6 0h4v2H9V4zM7 6h2v2H7V6zm-1 2h4v2H6V8zm-2 2h2v2H4v-2zm6 0h2v2h-2v-2zm-8 2h4v2H2v-2zm8 0h4v2h-4v-2z"/></svg>`,
  BOT: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M6 0h4v2H6V0zM4 2h8v2H4V2zM2 4h12v8H2V4zm2 2h2v2H4V6zm6 0h2v2h-2V6zm-4 4h4v2H6v-2z"/></svg>`,
  BRUSH: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M10 0h6v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2H4v2H0v-4h2v-2h2v-2h2v-2h2v-2h2v-2h2V0z"/></svg>`,
  SEARCH: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M6 2h4v2H6V2zM4 4h8v6H4V4zm2 6h4v2H6v-2zm6 0h2v2h-2v-2zm2 2h2v2h-2v-2z"/></svg>`,
  BOOK: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 2h12v12H2V2zm2 2v8h8V4H4zm1 2h6v1H5V6zm0 2h6v1H5V8z"/></svg>`,
  PLAY: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 2h2v12H4V2zm2 2h2v8H6V4zm2 2h2v4H8V6zm2 2h2v2h-2V8z"/></svg>`,
};

export const SANTA_CAT_SVG = `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 5C15 5 5 18 5 38C5 54 18 61 32 61C46 61 59 54 59 38C59 18 49 5 32 5Z" fill="white"/><path d="M32 14C20 14 11 24 11 40C11 52 20 58 32 58C44 58 53 52 53 40C53 24 44 14 32 14Z" fill="#FDBA74"/><path d="M18 30 L10 12 L26 26 Z" fill="#FDBA74" /><path d="M46 30 L54 12 L38 26 Z" fill="#FDBA74" /><circle cx="23" cy="42" r="5" fill="#1C1917"/><circle cx="24.5" cy="40.5" r="1.5" fill="white"/><circle cx="41" cy="42" r="5" fill="#1C1917"/><circle cx="42.5" cy="40.5" r="1.5" fill="white"/><path d="M30 48 L34 48 L32 50 Z" fill="#FCA5A5"/><path d="M30 52 Q32 54 34 52" stroke="#1C1917" stroke-width="1.5" fill="none"/><path d="M22 24 Q32 4 52 16 L55 25 L12 25 Z" fill="#EF4444"/><rect x="10" y="22" width="44" height="8" rx="4" fill="white"/><circle cx="52" cy="16" r="5" fill="white"/></svg>`;

export const COLORS = ['bg-jinx-pink', 'bg-jinx-blue', 'bg-neon-green', 'bg-purple-500', 'bg-yellow-400', 'bg-gray-800', 'bg-red-500', 'bg-blue-500'];

export const CATEGORIES: { id: Category; icon: string }[] = [
  { id: 'ALL', icon: PIXEL_ICONS.ALL },
  { id: 'COLLECTION', icon: PIXEL_ICONS.COLLECTION },
  { id: 'AI', icon: PIXEL_ICONS.AI },
  { id: 'DESIGN', icon: PIXEL_ICONS.DESIGN },
  { id: 'FRONTEND', icon: PIXEL_ICONS.FRONTEND },
  { id: 'MEDIA', icon: PIXEL_ICONS.MEDIA },
  { id: 'TOOLS', icon: PIXEL_ICONS.TOOLS },
  { id: 'GAME', icon: PIXEL_ICONS.GAME },
];

export const PET_SKINS: PetSkin[] = [
  { id: 'girl-white', name: '暴走蓝发', avatarColor: '#00E5FF', description: '蓝发双马尾的疯狂少女' },
  { id: 'girl-pink', name: '星之使者', avatarColor: '#0F172A', description: '披着白袍的神秘少女' },
  { id: 'goth-bunny', name: '暗夜兔', avatarColor: '#18181B', description: '酷酷的暗黑系兔耳少女' },
  { id: 'cat-orange', name: '墨水猫', avatarColor: '#FDBA74', description: '打翻了墨水瓶' },
];

export const BUILT_IN_GAMES: BuiltInGame[] = [
  { id: 'tetris3d', name: '微型积木', description: 'BUILDER', icon: '🧱', color: 'bg-yellow-400' },
  { id: 'snake', name: '贪吃蛇', description: 'CLASSIC', icon: '🐍', color: 'bg-neon-green' },
  { id: '2048', name: '2048', description: 'PUZZLE', icon: '🔢', color: 'bg-orange-400' },
  { id: 'minesweeper', name: '扫雷', description: 'LOGIC', icon: '💣', color: 'bg-gray-600' },
];

export const SEARCH_ENGINES = [
  { id: 'google', name: 'GO', url: 'https://www.google.com/search?q=', color: '#4285F4' },
  { id: 'baidu', name: 'BD', url: 'https://www.baidu.com/s?wd=', color: '#2932E1' },
  { id: 'bilibili', name: 'BILI', url: 'https://search.bilibili.com/all?keyword=', color: '#FB7299' },
  { id: 'github', name: 'GIT', url: 'https://github.com/search?q=', color: '#171515' },
];

export const DEFAULT_LINKS: NavLink[] = [
  // --- AI ZONE ---
  { id: 'ai-doubao', title: '豆包', url: 'https://www.doubao.com', color: 'bg-jinx-pink text-white', icon: PIXEL_ICONS.BOT, category: 'AI' },
  { id: 'ai-yiyan', title: '文心一言', url: 'https://yiyan.baidu.com', color: 'bg-blue-500 text-white', icon: PIXEL_ICONS.BOT, category: 'AI' },
  { id: 'ai-spark', title: '讯飞星火', url: 'https://xinghuo.xfyun.cn', color: 'bg-orange-500 text-white', icon: PIXEL_ICONS.BOT, category: 'AI' },
  { id: 'ai-tongyi', title: '通义千问', url: 'https://tongyi.aliyun.com', color: 'bg-purple-500 text-white', icon: PIXEL_ICONS.BOT, category: 'AI' },
  { id: 'ai-pangu', title: '盘古', url: 'https://pangu.huaweicloud.com', color: 'bg-gray-800 text-white', icon: PIXEL_ICONS.BOT, category: 'AI' },
  { id: 'ai-deepseek', title: 'deepseek', url: 'https://chat.deepseek.com', color: 'bg-jinx-blue text-black', icon: PIXEL_ICONS.BOT, category: 'AI' },
  { id: 'ai-prompthero', title: 'prompthero', url: 'https://prompthero.com', color: 'bg-yellow-400 text-black', icon: PIXEL_ICONS.SEARCH, category: 'AI' },
  { id: 'ai-chatgpt', title: 'ChatGPT', url: 'https://chat.openai.com', color: 'bg-neon-green text-black', icon: PIXEL_ICONS.BOT, category: 'AI' },
  { id: 'ai-picwish', title: 'Picwish', url: 'https://picwish.com', color: 'bg-jinx-pink text-white', icon: PIXEL_ICONS.SCISSORS, category: 'AI' },
  { id: 'ai-dalle', title: 'DALL·E 2', url: 'https://labs.openai.com', color: 'bg-white text-black', icon: PIXEL_ICONS.BRUSH, category: 'AI' },
  { id: 'ai-anthropic', title: 'Anthropic', url: 'https://claude.ai', color: 'bg-orange-100 text-black', icon: PIXEL_ICONS.BOT, category: 'AI' },
  { id: 'ai-you', title: 'YOU', url: 'https://you.com', color: 'bg-blue-400 text-white', icon: PIXEL_ICONS.SEARCH, category: 'AI' },
  { id: 'ai-midjourney', title: 'midjourney', url: 'https://www.midjourney.com', color: 'bg-gray-900 text-white', icon: PIXEL_ICONS.BRUSH, category: 'AI' },
  { id: 'ai-dreamlike', title: 'Dreamlike.art', url: 'https://dreamlike.art', color: 'bg-purple-600 text-white', icon: PIXEL_ICONS.BRUSH, category: 'AI' },
  { id: 'ai-nightcafe', title: 'NightCafe', url: 'https://creator.nightcafe.studio', color: 'bg-orange-600 text-white', icon: PIXEL_ICONS.BRUSH, category: 'AI' },
  { id: 'ai-tiamat', title: 'Tiamat', url: 'https://tiamat.world', color: 'bg-cyan-500 text-white', icon: PIXEL_ICONS.BRUSH, category: 'AI' },
  { id: 'ai-huggingface', title: 'HuggingFace', url: 'https://huggingface.co', color: 'bg-yellow-500 text-black', icon: PIXEL_ICONS.BOT, category: 'AI' },
  { id: 'ai-lexica', title: 'Lexica', url: 'https://lexica.art', color: 'bg-jinx-pink text-white', icon: PIXEL_ICONS.BRUSH, category: 'AI' },
  { id: 'ai-scribble', title: 'Scribble Diffusion', url: 'https://scribblediffusion.com', color: 'bg-green-400 text-black', icon: PIXEL_ICONS.BRUSH, category: 'AI' },
  { id: 'ai-leonardo', title: 'Leonardo', url: 'https://leonardo.ai', color: 'bg-purple-400 text-white', icon: PIXEL_ICONS.BRUSH, category: 'AI' },
  { id: 'ai-promptbase', title: 'Promptbase', url: 'https://promptbase.com', color: 'bg-blue-600 text-white', icon: PIXEL_ICONS.BOOK, category: 'AI' },
  { id: 'ai-waifulabs', title: 'waifulabs', url: 'https://waifulabs.com', color: 'bg-pink-300 text-black', icon: PIXEL_ICONS.BRUSH, category: 'AI' },
  { id: 'ai-galileo', title: 'Galileo AI', url: 'https://www.usegalileo.ai', color: 'bg-gray-700 text-white', icon: PIXEL_ICONS.DESIGN, category: 'AI' },

  // --- DESIGN ZONE ---
  { id: 'des-figma', title: 'Figma', url: 'https://www.figma.com', color: 'bg-purple-500 text-white', icon: PIXEL_ICONS.DESIGN, category: 'DESIGN' },
  { id: 'des-bigpixel', title: '千亿像素看中国', url: 'https://pf.bigpixel.cn', color: 'bg-red-500 text-white', icon: PIXEL_ICONS.MEDIA, category: 'DESIGN' },
  { id: 'des-airpano', title: '环游世界', url: 'https://www.airpano.org.cn', color: 'bg-blue-400 text-white', icon: PIXEL_ICONS.MEDIA, category: 'DESIGN' },
  { id: 'des-catfun', title: '猫趣', url: 'https://catfun.org', color: 'bg-jinx-pink text-white', icon: PIXEL_ICONS.BOT, category: 'DESIGN' },

  // --- FRONTEND ZONE ---
  { id: 'fe-csdn', title: 'CSDN', url: 'https://www.csdn.net', color: 'bg-red-600 text-white', icon: PIXEL_ICONS.FRONTEND, category: 'FRONTEND' },
  { id: 'fe-github', title: 'Github', url: 'https://github.com', color: 'bg-black text-white', icon: PIXEL_ICONS.FRONTEND, category: 'FRONTEND' },
  { id: 'fe-gitcode', title: 'Gitcode', url: 'https://gitcode.com', color: 'bg-blue-600 text-white', icon: PIXEL_ICONS.FRONTEND, category: 'FRONTEND' },
  { id: 'fe-runoob', title: '菜鸟工具', url: 'https://c.runoob.com', color: 'bg-green-500 text-white', icon: PIXEL_ICONS.TOOLS, category: 'FRONTEND' },
  { id: 'fe-oschina', title: '开源中国', url: 'https://www.oschina.net', color: 'bg-red-500 text-white', icon: PIXEL_ICONS.FRONTEND, category: 'FRONTEND' },

  // --- MEDIA ZONE ---
  { id: 'med-bilibili', title: 'Bilibili', url: 'https://www.bilibili.com', color: 'bg-jinx-blue text-black', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-youtube', title: 'YouTube', url: 'https://www.youtube.com', color: 'bg-red-600 text-white', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-sakura', title: '樱花动漫', url: 'http://www.yhss19.com', color: 'bg-pink-400 text-white', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-orange', title: '橘子动漫', url: 'https://www.jzacg.com', color: 'bg-orange-400 text-white', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-agedm', title: 'AGE动漫', url: 'https://www.agedm.org', color: 'bg-jinx-pink text-white', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-isekai', title: '异世界动漫', url: 'https://www.dmmiyu.com', color: 'bg-purple-400 text-white', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-mwcy', title: '喵物次元', url: 'https://www.mwcy.net', color: 'bg-yellow-400 text-black', icon: PIXEL_ICONS.BOT, category: 'MEDIA' },
  { id: 'med-anime1', title: '动画线上看', url: 'https://anime1.me', color: 'bg-blue-500 text-white', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-xfani', title: '稀饭动漫', url: 'https://www.xfani.com', color: 'bg-pink-300 text-black', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-acgfta', title: '饭团动漫', url: 'https://www.acgfta.com', color: 'bg-gray-800 text-white', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-skr2', title: '樱之空动漫', url: 'https://www.skr2.cc', color: 'bg-pink-500 text-white', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-zhizixuan', title: '栀子次元文学网', url: 'https://www.zhizixuan.com', color: 'bg-green-400 text-black', icon: PIXEL_ICONS.BOOK, category: 'MEDIA' },
  { id: 'med-jjwxc', title: '晋江文学城', url: 'https://www.jjwxc.net', color: 'bg-green-600 text-white', icon: PIXEL_ICONS.BOOK, category: 'MEDIA' },
  { id: 'med-fanqie', title: '番茄小说', url: 'https://fanqienovel.com', color: 'bg-red-400 text-white', icon: PIXEL_ICONS.BOOK, category: 'MEDIA' },
  { id: 'med-qimao', title: '七猫小说', url: 'https://www.qimao.com', color: 'bg-yellow-500 text-black', icon: PIXEL_ICONS.BOOK, category: 'MEDIA' },
  { id: 'med-faloo', title: '飞卢小说', url: 'https://www.faloo.com', color: 'bg-blue-600 text-white', icon: PIXEL_ICONS.BOOK, category: 'MEDIA' },
  { id: 'med-manman', title: '漫画漫画', url: 'https://www.manmanapp.com', color: 'bg-pink-400 text-white', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-dm5', title: '动漫屋', url: 'https://www.dm5.com', color: 'bg-blue-400 text-white', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },
  { id: 'med-kuaikan', title: '快看漫画', url: 'https://www.kuaikanmanhua.com', color: 'bg-yellow-400 text-black', icon: PIXEL_ICONS.PLAY, category: 'MEDIA' },

  // --- TOOLS ZONE ---
  { id: 'cat-memo', title: '猫猫备忘录', url: 'https://270820855-create.github.io/CatTxt.github.io', color: 'bg-jinx-blue text-white', icon: SANTA_CAT_SVG, category: 'TOOLS' },
  { id: 'tool-wikihow', title: 'wikiHow', url: 'https://zh.wikihow.com', color: 'bg-white text-black', icon: PIXEL_ICONS.BOOK, category: 'TOOLS' },
  { id: 'tool-chishenme', title: '中午吃什么', url: 'https://chishenme.xyz', color: 'bg-gray-100 text-black', icon: PIXEL_ICONS.SEARCH, category: 'TOOLS' },
  { id: 'tool-emojimix', title: 'emojimix', url: 'https://tikolu.net/emojimix', color: 'bg-yellow-400 text-black', icon: PIXEL_ICONS.SEARCH, category: 'TOOLS' },
  { id: 'tool-dxzy', title: '大学资源网', url: 'https://www.dxzy163.com', color: 'bg-blue-400 text-white', icon: PIXEL_ICONS.BOOK, category: 'TOOLS' },
  { id: 'tool-oeasy', title: 'Oeasy', url: 'https://oeasy.org', color: 'bg-green-500 text-white', icon: PIXEL_ICONS.FRONTEND, category: 'TOOLS' },
  { id: 'tool-mikutap', title: 'Mikutap', url: 'https://aidn.jp/mikutap', color: 'bg-jinx-blue text-white', icon: PIXEL_ICONS.PLAY, category: 'TOOLS' },
  { id: 'tool-idiom', title: '为所欲为成语', url: 'https://lab.bangbang93.com/chinese-idiom-maker', color: 'bg-pink-400 text-white', icon: PIXEL_ICONS.BOOK, category: 'TOOLS' },
  { id: 'tool-facecards', title: '说话表情包', url: 'https://facecards.com', color: 'bg-orange-400 text-white', icon: PIXEL_ICONS.SEARCH, category: 'TOOLS' },
  { id: 'tool-picrew', title: '动漫捏脸', url: 'https://picrew.me', color: 'bg-pink-300 text-black', icon: PIXEL_ICONS.DESIGN, category: 'TOOLS' },
  { id: 'tool-ehow', title: 'eHow', url: 'https://www.ehow.com', color: 'bg-yellow-500 text-black', icon: PIXEL_ICONS.BOOK, category: 'TOOLS' },
  { id: 'tool-removebg', title: '在线抠图', url: 'https://www.remove.bg', color: 'bg-purple-400 text-white', icon: PIXEL_ICONS.SCISSORS, category: 'TOOLS' },
  { id: 'tool-youquhome', title: '有趣网址之家', url: 'https://youquhome.com', color: 'bg-orange-500 text-white', icon: PIXEL_ICONS.TOOLS, category: 'TOOLS' },
  { id: 'tool-voicv', title: 'Voicv', url: 'https://voicv.com', color: 'bg-jinx-pink text-white', icon: PIXEL_ICONS.MEDIA, category: 'TOOLS' },
  { id: 'tool-autohandling', title: '凹凸工坊', url: 'https://autohandling.com', color: 'bg-gray-700 text-white', icon: PIXEL_ICONS.DESIGN, category: 'TOOLS' },
  { id: 'tool-docsmall', title: 'docsmall', url: 'https://docsmall.com', color: 'bg-blue-500 text-white', icon: PIXEL_ICONS.TOOLS, category: 'TOOLS' },

  // --- GAME ZONE ---
  { id: 'game-maze', title: 'MAZE TOYS', url: 'https://maze.toys', color: 'bg-yellow-400 text-black', icon: PIXEL_ICONS.GAME, category: 'GAME' },
  { id: 'game-yikm', title: 'yikm.net', url: 'https://yikm.net', color: 'bg-purple-500 text-white', icon: PIXEL_ICONS.GAME, category: 'GAME' },
  { id: 'game-farter', title: 'farter', url: 'https://farter.cn', color: 'bg-gray-400 text-black', icon: PIXEL_ICONS.GAME, category: 'GAME' },
  { id: 'game-crazygames', title: 'crazygames', url: 'https://www.crazygames.com', color: 'bg-purple-600 text-white', icon: PIXEL_ICONS.GAME, category: 'GAME' },
  { id: 'game-dos', title: '在线 DOS 游戏', url: 'https://dos.zcrc.cz', color: 'bg-black text-white', icon: PIXEL_ICONS.GAME, category: 'GAME' },
  { id: 'game-emoji', title: '到底是谁没动', url: 'https://emojiandearthporn.com', color: 'bg-orange-400 text-white', icon: PIXEL_ICONS.GAME, category: 'GAME' },
  { id: 'game-mofang', title: '在线拼魔方', url: 'https://tools.bqrdh.com/mofang/', color: 'bg-blue-400 text-white', icon: PIXEL_ICONS.GAME, category: 'GAME' },
  { id: 'game-chp', title: '彩虹皮生成器', url: 'https://chp.shadiao.app', color: 'bg-pink-400 text-white', icon: PIXEL_ICONS.GAME, category: 'GAME' },
  { id: 'game-ame', title: '雨声生成器', url: 'https://gogoame.sumibi.org', color: 'bg-blue-600 text-white', icon: PIXEL_ICONS.GAME, category: 'GAME' },
];
