import comp from "F:/gitObject/blog-theme-hope/blog/src/.vuepress/.temp/pages/md/code/java/juc/index.html.vue"
const data = JSON.parse("{\"path\":\"/md/code/java/juc/\",\"title\":\"JUC\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"JUC\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"自我介绍\",\"专业技能\",\"项目经验\"]},\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"md/code/java/juc/README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
