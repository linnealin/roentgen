import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Radiologi för AT-läkare',
    description: 'Just playing around.',
    base: '/roentgen/',
    lastUpdated: true,
    themeConfig: {
        nav: [
          { text: 'Om', link: '/about' },
          { text: 'Länkar', link: '/links' },
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
                { text: 'Skelettundersökningar', link: '/skelett' },
                { text: 'DT halsrygg', link: '/dt-halsrygg' },
                { text: 'DT bröstrygg', link: '/dt-brostrygg' },
                { text: 'DT ländrygg', link: '/dt-landrygg' },
                { text: 'RTG bäcken', link: '/rtg-backen' },
                { text: 'RTG protesbäcken', link: '/rtg-protesbacken' },
                { text: 'RTG höft', link: '/rtg-hoft' },
                { text: 'UL leder', link: '/ul-leder' },
              ],
            },
            {
              text: 'Övrigt',
              collapsible: true,
              items: [
                { text: 'UL thorax punktion/biopsi', link: '/ul-thorax-punktion' },
                { text: 'UL buk punktion/biopsi', link: '/ul-buk-punktion' },
                { text: 'Nefrostomi', link: '/nefrostomi' },
              ],
            },
          ],
        footer: {
            message: 'hallå',
            copyright: 'Copyright © 2022 Linnea Lin'
        },
      },
  })


