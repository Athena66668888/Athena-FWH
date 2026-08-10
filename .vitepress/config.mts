import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站基本信息
  title: 'Athena的学习笔记',
  description: '记录思考，沉淀技术 | 认知的边界，即世界的边界',

  // 1. 网站图标（Favicon）—— 先把结构加上，稍后放图片
  head: [
    ['link', { rel: 'icon', href: '/favicon.png',type:'image/png' }]
  ],

  // 2. Markdown 配置（开启代码行号，更专业）
  markdown: {
    lineNumbers: true
  },

  // 3. 主题配置（所有视觉和交互都在这里）
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
        text: '入门指南',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      }
      // 你以后可以在这里添加更多分组，比如：
      // { text: '前端笔记', items: [...] }
    ],

    // 社交链接（GitHub）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Athena66688888' }
    ],

    // 页脚
    footer: {
      message: '基于 VitePress 构建 | 认知的世界，即世界的边界',
      copyright: '© 2026 Athena的学习笔记'
    },
search: {
  provider: 'local'
},
lastUpdated: {
  text: '最后更新于'
}
  }
})