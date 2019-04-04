import * as React from 'react'
import { PrismCode } from 'react-prism'
import './prism'
import './prism.scss'

class Code extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="code">
        <pre>
          <PrismCode className="language-jsx">{children}</PrismCode>
        </pre>
      </div>
    )
  }
}

export default Code
