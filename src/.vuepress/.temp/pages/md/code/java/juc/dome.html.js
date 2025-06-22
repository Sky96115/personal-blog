import comp from "F:/gitObject/blog-theme-hope/blog/src/.vuepress/.temp/pages/md/code/java/juc/dome.html.vue"
const data = JSON.parse("{\"path\":\"/md/code/java/juc/dome.html\",\"title\":\"Day1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Day1\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"开发笔记\",\"学习记录\"],\"description\":\"任务 在应用层编排抽奖过程的修改 总结 今天的内容比较简单，最主要的问题就是表改了，然后花了很多时间去改对应的 PO 以及 SQL，然后今天第一次开发 application 层，感觉就是把 domain 层各个领域进行组装，然后形成一个又一个的流程，在这里面会使用 MQ 把流程进行切片，之后写门面接口应该就是调 application 层里面各个流程...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Day1\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"cheniy\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/md/code/java/juc/dome.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Day1\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"任务 在应用层编排抽奖过程的修改 总结 今天的内容比较简单，最主要的问题就是表改了，然后花了很多时间去改对应的 PO 以及 SQL，然后今天第一次开发 application 层，感觉就是把 domain 层各个领域进行组装，然后形成一个又一个的流程，在这里面会使用 MQ 把流程进行切片，之后写门面接口应该就是调 application 层里面各个流程...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":1.15,\"words\":344},\"filePathRelative\":\"md/code/java/juc/dome.md\",\"excerpt\":\"<h3>任务</h3>\\n<ul class=\\\"task-list-container\\\">\\n<li class=\\\"task-list-item\\\"><input type=\\\"checkbox\\\" class=\\\"task-list-item-checkbox\\\" id=\\\"task-item-0\\\" checked=\\\"checked\\\" disabled=\\\"disabled\\\"><label class=\\\"task-list-item-label\\\" for=\\\"task-item-0\\\"> 在应用层编排抽奖过程的修改</label></li>\\n</ul>\\n<h3>总结</h3>\\n<p>今天的内容比较简单，最主要的问题就是表改了，然后花了很多时间去改对应的 PO 以及 SQL，然后今天第一次开发 application 层，感觉就是把 domain 层各个领域进行组装，然后形成一个又一个的流程，在这里面会使用 MQ 把流程进行切片，之后写门面接口应该就是调 application 层里面各个流程了，这样对于 Controller 层感觉挺好的，只需要简单的封装一下前端传进来的参数，然后调用 application 层执行各个流程就可以了</p>\",\"autoDesc\":true}")
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
