export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"CategoryA":{"path":"/category/categorya/","indexes":[0]}}}},"tag":{"/":{"path":"/tag/","map":{"tag A":{"path":"/tag/tag-a/","indexes":[0]},"tag B":{"path":"/tag/tag-b/","indexes":[0]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

