import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Radiologi för AT-läkare',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
          { text: 'Om', link: '/about' },
          { text: 'Länkar', link: '/links' },
          { text: 'Statistik', link: '/statistics' },
        ],
        sidebar: [
            {
              text: 'Huvud',
              collapsible: true,
              items: [
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
                { text: 'Lungundersökningar', link: '/lung' },
                { text: 'Lungröntgen', link: '/lungrontgen' },
                { text: 'DT thorax utan kontrast', link: '/dt-thorax' },
                { text: 'DT thorax med kontrast', link: '/dt-thorax-kontrast' },
                { text: 'DT lungartärer', link: '/dt-lungartarer' },
                { text: 'Lungscintigrafi', link: '/lungscintigrafi' },
                { text: 'DT kranskärl', link: '/dt-kranskarl' },
                { text: 'DT aorta', link: 'dt-aorta'},
              ],
            },
            {
              text: 'Buk',
              collapsible: true,
              items: [
                { text: 'Bukundersökningar', link: '/buk' },
                { text: 'UL buk', link: '/ul-buk' },
                { text: 'DT buk utan kontrast', link: '/dt-buk' },
                { text: 'DT buk med kontrast', link: '/dt-buk-kontrast' },
                { text: 'DT urinvägsöversikt', link: '/dt-uro' },
                { text: 'Passageröntgen', link: '/rtg-passage' },
              ],
            },
            {
              text: 'Skelett och leder ',
              collapsible: true,
              items: [
                { text: 'Skelettundersökningar', link: '/buk' },
                { text: 'DT halsrygg', link: '/ul-buk' },
                { text: 'DT bröstrygg', link: '/dt-buk' },
                { text: 'DT ländrygg', link: '/dt-buk-kontrast' },
                { text: 'RTG bäcken', link: '/dt-uro' },
                { text: 'RTG protesbäcken', link: '/dt-uro' },
                { text: 'RTG höft', link: '/dt-uro' },
                { text: 'UL leder', link: '/rtg-passage' },
              ],
            },
            {
              text: 'Övrigt',
              collapsible: true,
              items: [
                { text: 'UL thorax med punktion/biopsi', link: '/ul-thorax-punktion' },
                { text: 'UL buk med punktion/biopsi', link: '/ul-buk-punktion' },
                { text: 'Perkutan nefrostomi', link: '/nefrostomi' },
              ],
            },
          ],
        footer: {
            message: 'hallå',
            copyright: 'Copyright © 2022 Linnea Lin'
        },
      },
  })


