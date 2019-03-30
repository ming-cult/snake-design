import * as React from 'react'
import { Link } from 'react-router-dom'
import DocsNav from './docsNav'

export default class App extends React.Component<any, any> {

  // 渲染PC端页面
  renderPCContainer() {
    const { children } = this.props
    return [
      <header key="header" className="snake-design-doc-header">
        <div className="container">
          <div className="logo">snake-design</div>
          <div className="tabs">
            <Link to="/guide/usage">
              <span>指南</span>
              <span>Guide</span>
            </Link>
          </div>
        </div>
      </header>,
      <div key="container" className="snake-design-doc-container">
        <div className="container">
          <DocsNav
            basicCList={this.props.basicCList}
            aboutSnakeDesignList={this.props.aboutSnakeDesignList}
          />
          <div className="snake-design-doc-content">{children}</div>
        </div>
      </div>
    ]
  }

  render() {
    return (
      this.renderPCContainer()
    )
  }
}
