import "C:/Code/Not-Another-DevOps-Blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "C:/Code/Not-Another-DevOps-Blog/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "C:/Code/Not-Another-DevOps-Blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "C:/Code/Not-Another-DevOps-Blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "C:/Code/Not-Another-DevOps-Blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "C:/Code/Not-Another-DevOps-Blog/node_modules/@vuepress/highlighter-helper/lib/client/index.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
