import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  dest: "./dev/nginx/html",
  base: "/",

  lang: "zh-CN",
  title: "个人博客",
  description: "陈梦肖的个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
