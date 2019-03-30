import * as React from 'react'
import * as marked from 'marked'
import * as classNames from 'classnames'
import * as prism from 'prismjs'

import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-diff'
import 'prismjs/components/prism-jsx'

import '../static/github-markdown.scss'
import 'prismjs/themes/prism-okaidia.css'

const renderer = new marked.Renderer()

// 自定义markdown标签 :::demo:::
renderer.paragraph = function (text: string) {
  return text.replace(':::demo', '<div class="code-example">')
    .replace(':::', '</div>')
}

renderer.code = function(code: string, lang: string) {
  let language = null
  let tmpLang = lang
  let trueCode = code
  switch (lang) {
  // 自定义```require```匹配规则
  case 'require':
    // 动态获取指定文件
    // require.context参数说明
    // 其中第一个参数表示相对的文件目录，
    // 第二个参数表示是否包括子目录中的文件，
    // 第三个参数表示引入的文件匹配的正则表达式
    const context = require.context('!raw-loader!..', true, /\.tsx?$/)
    trueCode = context(code)
    tmpLang = 'jsx'
    language = prism.languages.jsx
    break
  case 'diff':
    language = prism.languages.diff
    break
  case 'css':
    language = prism.languages.css
    break
  case 'js':
  case 'jsx':
  default:
    language = prism.languages.jsx
    break
  }
  // tslint:disable-next-line:max-line-length
  return '<div class="code-demo">' +
    `<pre class="language-${tmpLang}">` +
      `<code class="language-${tmpLang}">` +
        prism.highlight(trueCode, language, 'JavaScript') +
      '</code>' +
    '</pre>' +
  '</div>'
}

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  langPrefix: 'language-',
  renderer,
})

interface MarkDownProps {
  text: string,
  styles?: string
}

export default class MarkdownEle extends React.Component<MarkDownProps, any> {
  render() {
    const { text, styles } = this.props
    const htmlContent = marked(text)
    return (
      <div className={classNames('markdown-body', styles)} dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
  }
}
