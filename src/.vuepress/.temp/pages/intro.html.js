import comp from "F:/gitObject/blog-theme-hope/blog/src/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"介绍页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"circle-info\",\"cover\":\"/assets/images/cover3.jpg\",\"description\":\"介绍页 将你的个人介绍和档案放置在此处。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"介绍页\\\",\\\"image\\\":[\\\"https://github.com/Sky96115/personal-blog/assets/images/cover3.jpg\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"cheniy\\\",\\\"url\\\":\\\"https://mister\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/Sky96115/personal-blog/intro.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"个人博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"介绍页\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"介绍页 将你的个人介绍和档案放置在此处。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://github.com/Sky96115/personal-blog/assets/images/cover3.jpg\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:src\",\"content\":\"https://github.com/Sky96115/personal-blog/assets/images/cover3.jpg\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"介绍页\"}]]},\"readingTime\":{\"minutes\":0.08,\"words\":23},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<p>将你的个人介绍和档案放置在此处。</p>\\n\",\"autoDesc\":true}")
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
