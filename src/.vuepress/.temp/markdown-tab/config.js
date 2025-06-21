import { CodeTabs } from "F:/gitObject/blog-theme-hope/blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_067983ffeb53c36dd139d189ce3bbf12/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "F:/gitObject/blog-theme-hope/blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_067983ffeb53c36dd139d189ce3bbf12/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "F:/gitObject/blog-theme-hope/blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_067983ffeb53c36dd139d189ce3bbf12/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
