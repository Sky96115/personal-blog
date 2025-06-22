export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"自我介绍\":{\"path\":\"/category/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D/\",\"indexes\":[0,1,2,3,4,5,6,7,8,9,10,11,12]},\"专业技能\":{\"path\":\"/category/%E4%B8%93%E4%B8%9A%E6%8A%80%E8%83%BD/\",\"indexes\":[0,1,2,3,4,5,6,7,8,13,9,10,11,12]},\"项目经验\":{\"path\":\"/category/%E9%A1%B9%E7%9B%AE%E7%BB%8F%E9%AA%8C/\",\"indexes\":[0,1,2,3,4,5,6,7,8,9,10,11,12]},\"开发笔记\":{\"path\":\"/category/%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0/\",\"indexes\":[14]},\"学习记录\":{\"path\":\"/category/%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/\",\"indexes\":[14]},\"技术教程\":{\"path\":\"/category/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/\",\"indexes\":[13]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

