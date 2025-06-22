import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  //   "/": [
  //   "",
  //   {
  //     text: "Lottery 项目开发日志",
  //     icon: "laptop-code",
  //     link: "md/dev-log/",
  //   },
  // ],

  // ------------------------代码笔记 -----------------------------
  "/md/code/": 
  [
    "",
    // 申明一级目录
    "java/",
  ],
  "/md/code/java/": "structure",
  // 申明二级目录
  // [
  //   "",
  //   {
  //     text: "多线程",
  //     icon: "laptop-code",
  //     link: "juc/",
  //     prefix: "juc/",
  //     collapsible: true,
  //     children: ["dome.md"],
  //   }
  // ],

  // ------------------------教程手册-----------------------------
  "/md/guide/": 
  [
    // 申明一级目录
    "",
    "mygit/",
  ],
  "/md/guide/mygit/": "structure",
  // 申明二级目录
  // [
  //   "",
  //   {
  //     text: "码云",
  //     icon: "laptop-code",
  //     link: "giteee/",
  //     prefix: "giteee/",
  //     collapsible: true,
  //     children: ["dome.md"],
  //   }
  // ],

  // ------------------------学习笔记-----------------------------
  "/md/study/": 
  [
    // 申明一级目录
    "",
  ],

  // ------------------------项目库-----------------------------
  "/md/project/": 
  [
    // 申明一级目录
    "",
    "java/",
  ],
  "/md/project/market/": "structure",
  // 申明二级目录
  // [
  //   "",
  //   {
  //     text: "设计开发",
  //     icon: "laptop-code",
  //     link: "design/",
  //     prefix: "design/",
  //     collapsible: true,
  //   },
  //   {
  //     text: "开发日志",
  //     icon: "laptop-code",
  //     link: "log/",
  //     prefix: "log/",
  //     collapsible: true,
  //   },
  //   {
  //     text: "BUG笔记",
  //     icon: "laptop-code",
  //     link: "bug/",
  //     prefix: "bug/",
  //     collapsible: true,
  //   },
  // ],

  
  
});