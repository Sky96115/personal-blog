import comp from "F:/gitObject/blog-theme-hope/blog/src/.vuepress/.temp/pages/md/dev-log/day04.html.vue"
const data = JSON.parse("{\"path\":\"/md/dev-log/day04.html\",\"title\":\"Day04\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Day04\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"开发笔记\",\"学习记录\"],\"description\":\"任务 简单工厂搭建发奖领域 学习过程 表结构变了，先导入 SQL，然后该对应的 PO 类，然后改一下 Mapper 文件 先把包结构建好 新建一个领域包，负责发奖 领域包内建三个子包，model 实体封装包、repository 提供仓储服务、service 提供具体的服务（重点内容） 看一下代码的继承关系 debug 看一下代码执行流程，了解其中的调...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Day04\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/md/dev-log/day04.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Day04\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"任务 简单工厂搭建发奖领域 学习过程 表结构变了，先导入 SQL，然后该对应的 PO 类，然后改一下 Mapper 文件 先把包结构建好 新建一个领域包，负责发奖 领域包内建三个子包，model 实体封装包、repository 提供仓储服务、service 提供具体的服务（重点内容） 看一下代码的继承关系 debug 看一下代码执行流程，了解其中的调...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":1.54,\"words\":461},\"filePathRelative\":\"md/dev-log/day04.md\",\"excerpt\":\"<h3>任务</h3>\\n<ul class=\\\"task-list-container\\\">\\n<li class=\\\"task-list-item\\\"><input type=\\\"checkbox\\\" class=\\\"task-list-item-checkbox\\\" id=\\\"task-item-0\\\" checked=\\\"checked\\\" disabled=\\\"disabled\\\"><label class=\\\"task-list-item-label\\\" for=\\\"task-item-0\\\"> 简单工厂搭建发奖领域</label></li>\\n</ul>\\n<h3>学习过程</h3>\\n<ol>\\n<li>\\n<p>表结构变了，先导入 SQL，然后该对应的 PO 类，然后改一下 Mapper 文件</p>\\n</li>\\n<li>\\n<p>先把包结构建好</p>\\n<ol>\\n<li>新建一个领域包，负责发奖</li>\\n<li>领域包内建三个子包，model 实体封装包、repository 提供仓储服务、service 提供具体的服务（重点内容）</li>\\n</ol>\\n</li>\\n<li>\\n<p>看一下代码的继承关系</p>\\n</li>\\n<li>\\n<p>debug 看一下代码执行流程，了解其中的调用关系</p>\\n<ol>\\n<li>先执行抽奖，返回抽奖结果</li>\\n<li>对抽奖结果进行判断，如果是未中奖，直接返回</li>\\n<li>中奖了就保存用户信息以及订单信息</li>\\n<li>根据中奖结果中的奖品类型获取对应的服务</li>\\n<li>然后把第三步保存的用户信息以及订单信息传进去，做一个发奖的操作</li>\\n<li>然后返回发奖结果</li>\\n</ol>\\n</li>\\n</ol>\",\"autoDesc\":true}")
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
