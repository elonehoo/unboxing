import { defineConfig } from "vitepress";
import { version } from "../../package.json";

export default defineConfig({
  title: "unboxing",
  description: "Fast, small and purely functional utility library for TypeScript.",
  head: [
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }]
  ],
  themeConfig:{
    logo:"/logo.svg",
    editLink: {
      repo: 'elonehoo/unboxing',
      branch: 'main',
      dir: 'docs',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/elonehoo/unboxing' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Elone Hoo'
    },
    nav:nav(),
  }
})

function nav(){
  return [
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
  ]
}
