import comp from "F:/gitObject/blog-theme-hope/blog/src/.vuepress/.temp/pages/md/dev-log/index.html.vue"
const data = JSON.parse("{\"path\":\"/md/dev-log/\",\"title\":\"开发日志\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"开发日志\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"自我介绍\",\"专业技能\",\"项目经验\"],\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"开发日志\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/md/dev-log/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"开发日志\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.08,\"words\":25},\"filePathRelative\":\"md/dev-log/README.md\",\"excerpt\":\"<ul>\\n<li><a href=\\\"/md/dev-log/day01.html\\\" target=\\\"_blank\\\">day01.md</a></li>\\n</ul>\\n\"}")
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
