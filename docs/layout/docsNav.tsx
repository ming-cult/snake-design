import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Affix } from 'components/index'

interface ComponentProps {
  name: string
  path: string
  isDevelopmenting?: boolean
}

interface NavProps {
  basicCList: Array<ComponentProps>
  aboutSnakeDesignList: Array<ComponentProps>
}

export default function DocsNav(props: NavProps) {
  const { basicCList, aboutSnakeDesignList } = props

  // 渲染左侧导航
  const renderNavList = (list: Array<ComponentProps>) => {
    return list.map((item, index) => {
      if (item.isDevelopmenting && process.env.NODE_ENV !== 'localdev') {
        return null
      }
      return (
        <NavLink key={index} activeClassName="sub-active" to={item.path}>
          {item.name}
        </NavLink>
      )
    })
  }

  return (
    <div style={{ float: 'left' }}>
      <Affix offsetTop={0}>
        <div className="snake-design-doc-nav">
          <section className="each-section">
            <header>快速开始</header>
            <div className="sub">
              {renderNavList(aboutSnakeDesignList.filter(item => item.path.match(/\/guide\//)))}
            </div>
          </section>
          <section className="each-section">
            <header>基础组件</header>
            <div className="sub">{renderNavList(basicCList)}</div>
          </section>
          <section className="each-section">
            <header>更多信息</header>
            <div className="sub">
              {renderNavList(aboutSnakeDesignList.filter(item => item.path.match(/\/more\//)))}
            </div>
          </section>
        </div>
      </Affix>
    </div>
  )
}
