import * as React from 'react'
import { NavLink } from 'react-router-dom'

interface ComponentProps {
  name: string
  path: string
  isDevelopmenting?: boolean
}

interface NavProps {
  basicCList: Array<ComponentProps>
  aboutSnakeDesignList: Array<ComponentProps>
}

export default class DocsNav extends React.Component<NavProps, any> {

  // 渲染左侧导航
  renderNavList = (list: Array<ComponentProps>) => {
    return list.map((item, index) => {
      if (item.isDevelopmenting && process.env.NODE_ENV !== 'localdev') {
        return null
      }
      return <NavLink
        key={index}
        activeClassName="sub-active"
        to={item.path}
      >
        {item.name}
      </NavLink>
    })
  }

  render() {
    const { basicCList, aboutSnakeDesignList } = this.props
    return (
      <div className="snake-design-doc-nav">
        <section className="each-section">
          <header>快速开始</header>
          <div className="sub">{this.renderNavList(aboutSnakeDesignList.filter(item => item.path.match(/\/guide\//)))}</div>
        </section>
        <section className="each-section">
          <header>基础组件</header>
          <div className="sub">{this.renderNavList(basicCList)}</div>
        </section>
        <section className="each-section">
          <header>更多信息</header>
          <div className="sub">{this.renderNavList(aboutSnakeDesignList.filter(item => item.path.match(/\/more\//)))}</div>
        </section>
      </div>
    )
  }
}
