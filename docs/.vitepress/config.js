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
              collapsible: true,
              items: [
                // This shows `/guide/index.md` page.
                { text: 'DT strokelarm', link: '/dt-strokelarm' },
                { text: 'DT hjärna', link: '/dt-hjarna' },
                { text: 'DT angiografi', link: '/dt-angiografi' },
                { text: 'DT venografi', link: '/dt-venografi-sinustrombos' },
                { text: 'DT ansiktsskelett', link: '/dt-ansiktsskelett' },
                { text: 'DT hjärna med kontrast', link: '/dt-hjarna-kontrast' },
              ],
            },
            {
              text: 'Thorax',
              collapsible: true,
              items: [
                { text: 'Lungundersökningar', link: '/thorax' },
                { text: 'Lungröntgen', link: '/lungrontgen' },
                { text: 'DT thorax utan kontrast', link: '/dt-thorax' },
                { text: 'DT thorax med kontrast', link: '/dt-thorax-kontrast' },
                { text: 'DT lungartärer', link: '/dt-lungartarer' },
                { text: 'Lungscintigrafi', link: '/lungscintigrafi' },
                { text: 'DT kranskärl', link: '/dt-kranskarl' },
                { text: 'DT aorta', link: 'dt-aorta'},
              ],
            }
          ],
        footer: {
            message: 'hallå',
            copyright: 'Copyright © 2022 Linnea Lin'
        },
      },
  })


