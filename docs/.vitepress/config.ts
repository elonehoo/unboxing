import { defineConfig } from "vitepress";
import { version } from "../../package.json";

export default defineConfig({
  title: "unboxing",
  description: "Fast, small and purely functional utility library for TypeScript.",
  head: [
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }]
  ],
  themeConfig:{
    repo:"elonehoo/unboxing",
    logo:"/logo.svg",
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',
    nav:[
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes ',
            link: 'https://github.com/elonehoo/unboxing/releases',
          },
        ],
      },
    ],
    sidebar:{
      '/api/': 'auto',
      '/': [
        {
          text: 'Guide',
          children: [
            {
              text: 'Getting Started',
              link: '/guide/',
            },
          ],
        }
      ]
    }
  }
})

