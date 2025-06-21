import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/md/resume",
  {
    text: "代码笔记",
    icon: "book",
    link: "/md/code/",
  },
  {
    text: "教程手册",
    icon: "book",
    link: "/md/guide/"
  },
  {
    text: "学习笔记",
    icon: "book",
    link: "/md/study/"
  },
]);
