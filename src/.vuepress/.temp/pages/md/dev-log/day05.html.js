import comp from "F:/gitObject/blog-theme-hope/blog/src/.vuepress/.temp/pages/md/dev-log/day05.html.vue"
const data = JSON.parse("{\"path\":\"/md/dev-log/day05.html\",\"title\":\"Day05\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Day05\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"开发笔记\",\"学习记录\"],\"description\":\"任务 活动领域的配置与状态 学习过程 包结构变化，调整对应的包 了解活动创建的整个流程，然后将流程进行编排(其实就是落库的步骤呗)，写对应的 repository 层代码 首先明确要做哪些操作 添加活动 添加奖品 添加活动配置 添加策略 添加策略明细 编写对应的 repository 接口和实现类 debug 了解状态模式如何进行的状态判断(感觉不用刻...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Day05\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/md/dev-log/day05.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Day05\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"任务 活动领域的配置与状态 学习过程 包结构变化，调整对应的包 了解活动创建的整个流程，然后将流程进行编排(其实就是落库的步骤呗)，写对应的 repository 层代码 首先明确要做哪些操作 添加活动 添加奖品 添加活动配置 添加策略 添加策略明细 编写对应的 repository 接口和实现类 debug 了解状态模式如何进行的状态判断(感觉不用刻...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":3.98,\"words\":1193},\"filePathRelative\":\"md/dev-log/day05.md\",\"excerpt\":\"<h2>任务</h2>\\n<ul class=\\\"task-list-container\\\">\\n<li class=\\\"task-list-item\\\"><input type=\\\"checkbox\\\" class=\\\"task-list-item-checkbox\\\" id=\\\"task-item-0\\\" checked=\\\"checked\\\" disabled=\\\"disabled\\\"><label class=\\\"task-list-item-label\\\" for=\\\"task-item-0\\\"> 活动领域的配置与状态</label></li>\\n</ul>\\n<h2>学习过程</h2>\\n<ol>\\n<li>包结构变化，调整对应的包</li>\\n<li>了解活动创建的整个流程，然后将流程进行编排(其实就是落库的步骤呗)，写对应的 repository 层代码\\n<ol>\\n<li>首先明确要做哪些操作\\n<ol>\\n<li>添加活动</li>\\n<li>添加奖品</li>\\n<li>添加活动配置</li>\\n<li>添加策略</li>\\n<li>添加策略明细</li>\\n</ol>\\n</li>\\n<li>编写对应的 repository 接口和实现类</li>\\n<li></li>\\n</ol>\\n</li>\\n<li>debug 了解状态模式如何进行的状态判断(感觉不用刻意去学这个设计模式，通过对项目的学习，从而达到状态模式的学习，<strong>后期进行设计模式的统一学习</strong>）\\n<ol>\\n<li>首先定义一个状态处理的接口，入参统一是活动ID和当前状态</li>\\n<li>定义一个活动状态抽象类，这个抽象类的子类用来判断某种状态是否可以流转</li>\\n<li>编写抽象类的实现，里面定义是否可以流转</li>\\n<li>编写状态配置类，把每一种活动状态抽象类的实现注入进去并放入 Map 中，供状态处理服务使用</li>\\n<li>编写状态处理接口的实现类\\n<ol>\\n<li>先从状态配置中获取当前状态所对应的活动状态流转实现类</li>\\n<li>然后实现类调用方法，通过方法的返回值来确定是否能进行操作\\n<ol>\\n<li>如果能进行变更的，先进行落库操作，然后根据 MyBatis 返回值返回对应信息</li>\\n<li>如果不能进行变更的，直接返回对应的错误信息</li>\\n</ol>\\n</li>\\n</ol>\\n</li>\\n</ol>\\n</li>\\n</ol>\",\"autoDesc\":true}")
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
