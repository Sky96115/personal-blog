import comp from "F:/gitObject/blog-theme-hope/blog/src/.vuepress/.temp/pages/md/project/index.html.vue"
const data = JSON.parse("{\"path\":\"/md/project/\",\"title\":\"项目库\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"项目库\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"自我介绍\",\"专业技能\",\"项目经验\"],\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"项目库\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"cheniy\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/md/project/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"项目库\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"md/project/README.md\",\"excerpt\":\"\"}")
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
