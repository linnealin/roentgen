import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Radiologi för AT-läkare',
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
                { text: 'DT strokelarm', link: '/dt-strokelarm' },
                { text: 'DT hjärna', link: '/dt-hjarna' },
                { text: 'DT angiografi', link: '/dt-angiografi#dt-angiografi-tia-utredning' },
                { text: 'DT venografi sinustrombos', link: '/dt-venografi-sinustrombos' },
                { text: 'DT ansiktsskelett', link: '/dt-ansiktsskelett' },
                { text: 'DT hjärna med kontrast', link: '/dt-hjarna-kontrast' },
              ]
            }
          ],
        footer: {
            message: 'hallå',
            copyright: 'Copyright © 2022 Linnea Lin'
        },
      },
  })


