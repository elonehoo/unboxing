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
  }
})
