import comp from "F:/gitObject/blog-theme-hope/blog/src/.vuepress/.temp/pages/md/index.html.vue"
const data = JSON.parse("{\"path\":\"/md/\",\"title\":\"文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文档\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"自我介绍\",\"专业技能\",\"项目经验\"],\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"文档\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"cheniy\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/md/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"文档\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"md/README.md\",\"excerpt\":\"\"}")
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
