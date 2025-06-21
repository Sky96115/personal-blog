import comp from "F:/gitObject/blog-theme-hope/blog/src/.vuepress/.temp/pages/md/dev-log/day02.html.vue"
const data = JSON.parse("{\"path\":\"/md/dev-log/day02.html\",\"title\":\"Day02\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Day02\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"开发笔记\",\"学习记录\"],\"description\":\"任务 表设计 抽奖领域模块开发 学习过程 查询分库分表相关知识点，了解到垂直和水平分库分表，主要是为了解决数据量过大导致 MySQL 查询慢、单体容量过大问题 开始写代码 编写基础的持久化对象 (PO) 编写 Mapper 接口 编写对应的 Mapper.xml 设计抽奖策略顶级接口，主要是入参出参，如何封装，要封装哪些数据 编写顶级接口的基础实现，实...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Day02\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/md/dev-log/day02.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Day02\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"任务 表设计 抽奖领域模块开发 学习过程 查询分库分表相关知识点，了解到垂直和水平分库分表，主要是为了解决数据量过大导致 MySQL 查询慢、单体容量过大问题 开始写代码 编写基础的持久化对象 (PO) 编写 Mapper 接口 编写对应的 Mapper.xml 设计抽奖策略顶级接口，主要是入参出参，如何封装，要封装哪些数据 编写顶级接口的基础实现，实...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":3.53,\"words\":1059},\"filePathRelative\":\"md/dev-log/day02.md\",\"excerpt\":\"<h2>任务</h2>\\n<ul class=\\\"task-list-container\\\">\\n<li class=\\\"task-list-item\\\"><input type=\\\"checkbox\\\" class=\\\"task-list-item-checkbox\\\" id=\\\"task-item-0\\\" checked=\\\"checked\\\" disabled=\\\"disabled\\\"><label class=\\\"task-list-item-label\\\" for=\\\"task-item-0\\\"> 表设计</label></li>\\n<li class=\\\"task-list-item\\\"><input type=\\\"checkbox\\\" class=\\\"task-list-item-checkbox\\\" id=\\\"task-item-1\\\" checked=\\\"checked\\\" disabled=\\\"disabled\\\"><label class=\\\"task-list-item-label\\\" for=\\\"task-item-1\\\"> 抽奖领域模块开发</label></li>\\n</ul>\",\"autoDesc\":true}")
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
