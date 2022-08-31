import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Röntgenhandbok',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
          { text: 'Om', link: '/about' },
          { text: 'Statistik', link: '/statistics' },
        ],
        sidebar: [
            {
              text: 'Huvud',
              items: [
                // This shows `/guide/index.md` page.
                { text: 'DT-strokelarm', link: '/dt-strokelarm' },
                { text: 'DT-hjärna', link: '/dt-hjarna' }
              ]
            }
          ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Linnea Lin'
        },
        search: true
      }
  })