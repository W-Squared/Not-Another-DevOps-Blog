export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Code/Not-Another-DevOps-Blog/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Code/Not-Another-DevOps-Blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/posts/article1.html", { loader: () => import(/* webpackChunkName: "posts_article1.html" */"C:/Code/Not-Another-DevOps-Blog/docs/.vuepress/.temp/pages/posts/article1.html.js"), meta: {"_blog":{"title":"Article 1","author":"","date":"2022-01-01T00:00:00.000Z","category":["CategoryA"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 1"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Code/Not-Another-DevOps-Blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"C:/Code/Not-Another-DevOps-Blog/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/categorya/", { loader: () => import(/* webpackChunkName: "category_categorya_index.html" */"C:/Code/Not-Another-DevOps-Blog/docs/.vuepress/.temp/pages/category/categorya/index.html.js"), meta: {"title":"Category CategoryA"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"C:/Code/Not-Another-DevOps-Blog/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/tag-a/", { loader: () => import(/* webpackChunkName: "tag_tag-a_index.html" */"C:/Code/Not-Another-DevOps-Blog/docs/.vuepress/.temp/pages/tag/tag-a/index.html.js"), meta: {"title":"Tag tag A"} }],
  ["/tag/tag-b/", { loader: () => import(/* webpackChunkName: "tag_tag-b_index.html" */"C:/Code/Not-Another-DevOps-Blog/docs/.vuepress/.temp/pages/tag/tag-b/index.html.js"), meta: {"title":"Tag tag B"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"C:/Code/Not-Another-DevOps-Blog/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"C:/Code/Not-Another-DevOps-Blog/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
