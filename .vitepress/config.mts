import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Athena的博客',
  description: '这是我的第一个VitePress网站',
  themeConfig: {
    //页脚
   footer: {
     message: '基于 VitePress 构建 | 认知的世界，即世界的边界',
     copyright: '© 2026 Athena的学习笔记'
    },

    //导航栏
    nav: [
     { text: '首页', link: '/' },
     { text: '学习笔记', link: '/markdown-examples' },
     { text: '关于我', link: '/about' }
    ],

    //社交链接（GitHub 图标）
    socialLinks: [
     { icon: 'github', link: 'https://github.com/Athena66688888' }
    ],

    //侧边栏
    sidebar: [
  { text: '前端笔记', items: [] },
  { text: '算法笔记', items: [] },

    {text: '入门指南',items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      },
    ]
  }
})