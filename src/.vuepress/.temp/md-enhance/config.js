import CodeDemo from "F:/gitObject/blog-theme-hope/blog/node_modules/.pnpm/vuepress-plugin-md-enhance@_7adc9271599cf9144c76d7b5ab7f1c3d/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "F:/gitObject/blog-theme-hope/blog/node_modules/.pnpm/vuepress-plugin-md-enhance@_7adc9271599cf9144c76d7b5ab7f1c3d/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
