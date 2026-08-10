import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Athena的学习笔记',
  description: '认知的边界即世界的边界',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习笔记', link: '/notes' },
      { text: '关于我', link: '/about' },
    ],
    sidebar: [
      {
        text: '入门指南',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'API 示例', link: '/api-examples' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '编程基础', link: '/编程基础' },
          { text: '前端开发', link: '/前端开发' },
        ],
      },
    ],
  },
})