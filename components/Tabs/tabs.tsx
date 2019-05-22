import * as React from 'react'
import { TabsProps, TabsItemProps } from 'types/tabs.d'
import cx from 'classnames'

const { useEffect, useCallback } = React

const defaultProps = {
  prefixCls: 'snake-tabs',
  tabBarPosition: 'top',
  type: 'line',
  tabBarUnderlineColor: '#01C1B2'
}

function Tabs(userProps: TabsProps, ref: React.RefObject<any>) {
  const props = {
    ...defaultProps,
    ...userProps
  }

  const {
    prefixCls,
    tabBarPosition,
    activeTab,
    tabBarUnderlineColor,
    options,
    onChange,
    type,
    className,
    style
  } = props

  let underline: any = null
  let tabObj: any = {}
  let tabWrap: any = null
  let tabItemObj: any = {}

  useEffect(() => {
    handleUnderline()
  }, [activeTab])

  // 处理下划线样式
  const handleUnderline = () => {
    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      underline && (underline.style.width = `${getUnderlineWidth(activeTab)}px`)
      underline && (underline.style.left = `${getLeft(activeTab)}px`)
    } else if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      underline && (underline.style.height = `${getUnderlineHeight(activeTab)}px`)
      underline && (underline.style.top = `${getTop(activeTab)}px`)
    }
  }

  // 获取下划线宽度
  const getUnderlineWidth = useCallback(
    (current: number) =>
      tabObj[`tab${current}`] && tabObj[`tab${current}`].getBoundingClientRect().width,
    [activeTab]
  )

  // 获取下划线高度
  const getUnderlineHeight = useCallback(
    (current: number) =>
      tabItemObj[`tab${current}`] && tabItemObj[`tab${current}`].getBoundingClientRect().height,
    [activeTab]
  )

  // 获取当前激活 tab 距离左侧的距离
  const getLeft = useCallback(
    (current: number) => {
      if (tabObj[`tab${current}`] && tabWrap) {
        return (
          tabObj[`tab${current}`].getBoundingClientRect().left -
          tabWrap.getBoundingClientRect().left
        )
      } else {
        return 0
      }
    },
    [activeTab]
  )

  // 获取当前激活 tab 距离上侧的距离
  const getTop = useCallback(
    (current: number) => {
      if (tabObj[`tab${current}`] && tabWrap) {
        return (
          tabItemObj[`tab${current}`].getBoundingClientRect().top -
          tabWrap.getBoundingClientRect().top
        )
      } else {
        return 0
      }
    },
    [activeTab]
  )

  // 更改 Tab
  const changeTab = (e: React.MouseEvent<HTMLElement>, index: number, r: TabsItemProps) => {
    // 禁用 tab 点击
    if (r.disabled) return

    if (index !== activeTab) {
      onChange && onChange(index, e)
    }
  }

  const renderTab = () => {
    return (
      <div
        className={cx(`${prefixCls}-wrap`, `${prefixCls}-wrap-${tabBarPosition}`)}
        ref={(r: any) => (tabWrap = r)}
      >
        {options.map((r: TabsItemProps, index: number) => {
          return (
            <div
              className={cx(`${prefixCls}-wrap-item`, {
                [`${prefixCls}-wrap-item-disabled`]: r.disabled === true,
                [`${prefixCls}-card-${tabBarPosition}`]: type === 'card',
                [`${prefixCls}-card-${tabBarPosition}-current`]:
                  type === 'card' && index === activeTab
              })}
              onClick={e => changeTab(e, index, r)}
              key={index}
              ref={ele => {
                tabItemObj[`tab${index}`] = ele
              }}
            >
              <div
                className={cx({
                  [`${prefixCls}-wrap-active`]: activeTab === index
                })}
                ref={ele => {
                  tabObj[`tab${index}`] = ele
                }}
              >
                {r.title || ''}
              </div>
            </div>
          )
        })}
        {renderUnderline()}
      </div>
    )
  }

  const renderUnderline = () => {
    if (type === 'line') {
      return (
        <div
          className={cx(
            `${prefixCls}-wrap-underline`,
            `${prefixCls}-wrap-underline-${tabBarPosition}`
          )}
          style={{ border: `1px solid ${tabBarUnderlineColor}` }}
          ref={ele => {
            underline = ele
          }}
        />
      )
    } else {
      return null
    }
  }

  const renderContent = () => {
    if (activeTab >= 0 && options[activeTab].content) {
      return options[activeTab].content
    } else {
      return null
    }
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
    return cx(`${prefixCls}`, className)
  }

  return (
    <div className={getClassName()} style={style} ref={ref}>
      {layout()}
    </div>
  )
}

export default React.forwardRef(Tabs)
