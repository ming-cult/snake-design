/* 暂时没有用到此文件 */
import * as React from 'react'
import MarkdownEle from './markdownEle'

interface CodeEgProps {
  title: string
  description: string
  code: string
}

export default class CodeExample extends React.Component<CodeEgProps, any> {
  render() {
    const { title, description, code } = this.props
    const descEle = description ? <MarkdownEle text={description}  styles={'code-specific'} /> : null
    return (
      <div className="code-example">
        <p className="snake-design-doc-example-title">{title}</p>
        {descEle}
        <div className="code-section">
          <MarkdownEle text={`\`\`\`jsx\n${code}\n\`\`\``} styles="code-specific flex-grow1" />
        </div>
      </div>
    )
  }
}
