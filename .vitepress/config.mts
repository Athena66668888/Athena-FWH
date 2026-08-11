import { defineConfig } from 'vitepress'

export default defineConfig({

   base: '/Athena-FWH/',
   
  title: 'Athena的学习笔记',
  description: '记录思考，沉淀技术',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '学习笔记', link: '/markdown-examples' },
      { text: '关于我', link: '/about' }
    ],

    // 侧边栏
    sidebar: [
  {
    text: '📖 入门指南',
    items: [
      { text: 'Markdown 示例', link: '/markdown-examples' },
      { text: 'API 示例', link: '/api-examples' }
    ]
  },
  {
    text: '💻 前端笔记',
    items: [
      { text: 'Vue 基础', link: '/notes/vue' },
      { text: 'React 基础', link: '/notes/react' }
    ]
  },
  {
    text: '🔧 工具效率',
    items: [
      { text: 'Git 常用命令', link: '/tools/git' },
      { text: '终端技巧', link: '/tools/terminal' }
    ]
  }
],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名' }
    ],

    // 页脚
    footer: {
      message: '基于 VitePress 构建 | 认知的世界，即世界的边界',
      copyright: '© 2026 Athena的学习笔记'
    },

    // 本地搜索
    search: {
      provider: 'local'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于'
    }
  }, 
  }
)