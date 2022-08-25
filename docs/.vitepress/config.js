import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Roentgen kompendium',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
          { text: 'Om', link: '/about' },
        ],
        sidebar: [
            {
              text: 'Huvud',
              items: [
                // This shows `/guide/index.md` page.
                { text: 'DT-strokelarm', link: '/dt-strokelarm' }
              ]
            }
          ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Linnea Lin'
        }
      }
  })