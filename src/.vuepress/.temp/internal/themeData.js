export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":{\"tokens\":[\"$2b$10$HHR6vXx4Jycxn4Wc0XUCl.wsLoh5F977JHPM.sIZ9jA9jbYm/2bAe\"],\"hint\":\"Password: 1234\"}}},\"author\":{\"name\":\"cheniy\",\"url\":\"https://mister\"},\"logo\":\"/logo01.png\",\"docsDir\":\"src\",\"footer\":\"默认页脚\",\"displayFooter\":true,\"blog\":{\"description\":\"一个Java后端开发者\",\"intro\":\"/intro.html\",\"avatar\":\"/avatar.png\",\"medias\":{\"Wechat\":\"https://example.com\",\"QQ\":\"https://example.com\",\"Email\":\"mailto:info@example.com\",\"Lark\":\"https://example.com\",\"Gitee\":\"https://example.com\",\"GitHub\":\"https://example.com\",\"Gmail\":\"mailto:info@example.com\",\"BiliBili\":\"https://example.com\"}},\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"星标\",\"empty\":\"$text 为空\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routerLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[\"/\",\"/md/resume\",{\"text\":\"代码笔记\",\"icon\":\"book\",\"link\":\"/md/code/\"},{\"text\":\"教程手册\",\"icon\":\"book\",\"link\":\"/md/guide/\"},{\"text\":\"学习笔记\",\"icon\":\"book\",\"link\":\"/md/study/\"}],\"sidebar\":{\"/md/code/\":[\"\",\"java/\"],\"/md/code/java/\":\"structure\",\"/md/guide/\":[\"\",\"mygit/\"],\"/md/guide/mygit/\":\"structure\",\"/md/study/\":[\"\"],\"/md/project/\":[\"\",\"java/\"],\"/md/project/market/\":\"structure\"}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
