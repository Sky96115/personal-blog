import comp from "F:/gitObject/blog-theme-hope/blog/src/.vuepress/.temp/pages/md/dev-log/day06.html.vue"
const data = JSON.parse("{\"path\":\"/md/dev-log/day06.html\",\"title\":\"Day06\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Day06\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"开发笔记\",\"学习记录\"],\"description\":\"任务 ID 生成策略开发 学习过程 先看视频了解用到了啥 看小傅哥策略模式的文章 看代码结构 定义一个接口，用来生成 id 实现接口，实现不同的 id 生成算法 定义一个上下文对象，包装各种 id 生成算法，然后放到 Spring 容器中供其他类注入使用 今天的代码比较简单，主要就是涉及策略模式的使用，这里的上下文对象和之前的 config 类似，都是...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Day06\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/md/dev-log/day06.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Day06\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"任务 ID 生成策略开发 学习过程 先看视频了解用到了啥 看小傅哥策略模式的文章 看代码结构 定义一个接口，用来生成 id 实现接口，实现不同的 id 生成算法 定义一个上下文对象，包装各种 id 生成算法，然后放到 Spring 容器中供其他类注入使用 今天的代码比较简单，主要就是涉及策略模式的使用，这里的上下文对象和之前的 config 类似，都是...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":3.6,\"words\":1081},\"filePathRelative\":\"md/dev-log/day06.md\",\"excerpt\":\"<h3>任务</h3>\\n<ul class=\\\"task-list-container\\\">\\n<li class=\\\"task-list-item\\\"><input type=\\\"checkbox\\\" class=\\\"task-list-item-checkbox\\\" id=\\\"task-item-0\\\" checked=\\\"checked\\\" disabled=\\\"disabled\\\"><label class=\\\"task-list-item-label\\\" for=\\\"task-item-0\\\"> ID 生成策略开发</label></li>\\n</ul>\\n<h3>学习过程</h3>\\n<ol>\\n<li>\\n<p>先看视频了解用到了啥</p>\\n</li>\\n<li>\\n<p>看小傅哥策略模式的<a href=\\\"https://mp.weixin.qq.com/s/zOFLtSFVrYEyTuihzwgKYw\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">文章</a></p>\\n</li>\\n<li>\\n<p>看代码结构</p>\\n<ol>\\n<li>定义一个接口，用来生成 id</li>\\n<li>实现接口，实现不同的 id 生成算法</li>\\n<li>定义一个上下文对象，包装各种 id 生成算法，然后放到 Spring 容器中供其他类注入使用</li>\\n</ol>\\n<p>今天的代码比较简单，主要就是涉及策略模式的使用，这里的上下文对象和之前的 config 类似，都是把写好的实现类进行包装，统一放到一个容器内，然后其他类通过这个容器，配合枚举拿到对应的实现类进行调用</p>\\n</li>\\n<li>\\n<p>实操</p>\\n</li>\\n</ol>\",\"autoDesc\":true}")
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
