import { defineUserConfig } from "vuepress/cli";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

const base = (process.env["BASE"] as "/" | `/${string}/`) || "/";

export default defineUserConfig({
  base,

  lang: "zh-CN",
  title: "折戟沉沙、丿",
  description: "折戟沉沙、丿の文章与导航",

  theme,

  // 和 PWA 一起启用
  shouldPrefetch: false,

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索本站",
        },
      },
      hotKeys: ["command", "k"],
      maxSuggestions: 7,
      isSearchable: (page) => page.path !== "/"
    })
  ],
});
