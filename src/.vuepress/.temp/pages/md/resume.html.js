import comp from "F:/gitObject/blog-theme-hope/blog/src/.vuepress/.temp/pages/md/resume.html.vue"
const data = JSON.parse("{\"path\":\"/md/resume.html\",\"title\":\"个人简历\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"个人简历\",\"index\":false,\"icon\":\"laptop-code\",\"sidebar\":false,\"article\":false,\"category\":[\"自我介绍\",\"专业技能\",\"项目经验\"],\"description\":\"个人信息 姓名 电话 邮箱 毕业时间 工作时间 Github：https://github.com 毕业院校 时间、院校、专业、学位 荣誉、成绩\"},\"readingTime\":{\"minutes\":9.13,\"words\":2739},\"filePathRelative\":\"md/resume.md\",\"excerpt\":\"<h2>个人信息</h2>\\n<ul>\\n<li>姓名</li>\\n<li>电话</li>\\n<li>邮箱</li>\\n<li>毕业时间</li>\\n<li>工作时间</li>\\n<li>Github：<a href=\\\"https://github.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://github.com</a></li>\\n</ul>\\n<h2>毕业院校</h2>\\n<ul>\\n<li>时间、院校、专业、学位</li>\\n<li>荣誉、成绩</li>\\n</ul>\\n\",\"autoDesc\":true}")
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
