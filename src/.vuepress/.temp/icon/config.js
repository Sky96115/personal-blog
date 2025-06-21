import { hasGlobalComponent } from "F:/gitObject/blog-theme-hope/blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_47789790c9bff09a01056a76b05eda50/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "F:/gitObject/blog-theme-hope/blog/node_modules/.pnpm/@vueuse+core@13.4.0_vue@3.5.17/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "F:/gitObject/blog-theme-hope/blog/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_395a1ec6975c4ea4d7b899a0dcb4dc00/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
