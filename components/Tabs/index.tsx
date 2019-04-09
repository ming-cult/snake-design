import * as React from 'react'
// import { TabsProps } from 'types/tabs.d'
import ClassNames from 'classnames'

const { useEffect } = React

function Tabs(props: any) {
  const {
    activeTab,
    tabs,
    tabBarPosition,
    tabBarActiveTextColor,
    tabBarInactiveTextColor,
    notEqualDvided,
    className,
    onChange,
    onTabClick
  } = props

  const prefixCls = 'tabs'
  // let leftDistance = 0
  // let tab0

  useEffect(() => {
    // leftDistance = (this as any)[`tab${0}`] && (this as any)[`tab${0}`].getBoundingClientRect().left
    // leftDistance = 0
    handleUnderline()
  }, [activeTab])

  // 处理下划线样式
  function handleUnderline() {
    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      ;(this as any).underline &&
        ((this as any).underline.style.width = `${getUnderlineWidth(activeTab)}px`)
      ;(this as any).underline && ((this as any).underline.style.left = `${getLeft(activeTab)}px`)
    }
  }

  // 获取下划线宽度
  function getUnderlineWidth(_current: number) {
    // let underlineWidth = (this as any)[`tab${current}`].getBoundingClientRect().width
    let underlineWidth = 0
    return underlineWidth
  }

  // 获取当前激活 tab 距离左侧的距离
  function getLeft(_current: number) {
    // return current * (leftDistance * 2 + (this as any)[`tab${current}`].getBoundingClientRect().width) + leftDistance
    return 0
  }

  // 更改 Tab
  function changeTab(e: React.MouseEvent<HTMLElement>, index: number, r: any) {
    // 禁用 tab 点击
    if (r && r.disable) return
    // 下划线滑动逻辑
    underlineMove(index)

    if (index !== activeTab) {
      onChange && onChange(index, e)
    }
    onTabClick && onTabClick(index, e)
  }

  // 下划线滑动逻辑
  function underlineMove(_index: number) {}

  function renderTab() {
    return (
      <div className={ClassNames(`${prefixCls}-wrap`, `${prefixCls}-wrap-${tabBarPosition}`)}>
        {tabs.map((r: any, index: number) => {
          return (
            <div
              className={ClassNames(
                `${prefixCls}-wrap-item`,
                `${prefixCls}-wrap-item-${tabBarPosition}`,
                {
                  [`${prefixCls}-wrap-item-customWidth`]: notEqualDvided,
                  [`${prefixCls}-wrap-scroll`]: tabs.length > 4 // 大于 4 则开启滑动
                }
              )}
              onClick={e => changeTab(e, index, r)}
              key={index}
              style={{ flexBasis: `${(1 / 4) * 100}%` }}
            >
              <div
                className={ClassNames({
                  [`${prefixCls}-wrap-active`]: activeTab === index
                })}
                style={
                  activeTab === index
                    ? { color: tabBarActiveTextColor }
                    : { color: tabBarInactiveTextColor }
                }
                // ref={(ele: any) => {`tab${index}` = ele }}
                // ref={(ele: any) => { tab0 = ele }} // todo 如何动态声明出 tab0 ~ tab10
              >
                {r.title || ''}
              </div>
            </div>
          )
        })}
        <div
          className={ClassNames(
            `${prefixCls}-wrap-underline`,
            `${prefixCls}-wrap-underline-${tabBarPosition}`
          )}
          // ref={ele => { (this as any).underline = ele }}
        />
      </div>
    )
  }

  function renderContent() {
    return <div>This is a swipe</div>
  }

  function layout() {
    switch (tabBarPosition) {
      case 'left':
        return (
          <div className={`${prefixCls}-left`}>
            {renderTab()}
            {renderContent()}
          </div>
        )
      case 'right':
        return (
          <div className={`${prefixCls}-right`}>
            {renderContent()}
            {renderTab()}
          </div>
        )
      case 'bottom':
        return (
          <div>
            {renderContent()}
            {renderTab()}
          </div>
        )
      default:
        return (
          <div>
            {renderTab()}
            {renderContent()}
          </div>
        )
    }
  }

  function getClassName() {
    return ClassNames(`${prefixCls}`, className)
  }

  return <div className={getClassName()}>{layout()}</div>
}

export default Tabs
