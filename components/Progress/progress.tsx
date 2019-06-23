import * as React from 'react'
import cx from 'classnames'
import { ProgressProps } from 'types/progress'

import './index.scss'

const prefixCls = 'snake-progress'

const Progress: React.FC<ProgressProps> = ({
  size = 'medium',
  type = 'line',
  percent = 0,
  status = 'normal',
  showInfo = true,
  activeColor,
  width,
  textRender
}) => {
  const getClassNames = () => {
    return cx(prefixCls, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${status}`]: status,
      [`${prefixCls}-show-info`]: showInfo
    })
  }

  const getInnerStyle = () => {
    let style: React.CSSProperties = { width: `${percent}%` }
    if (activeColor) {
      style.backgroundColor = activeColor
    }
    return style
  }

  const getOuterStyle = () => {
    let style: React.CSSProperties = {}
    if (width) {
      style.width = width
    }
    return style
  }

  const renderCircleText = () => {
    if (textRender && typeof textRender === 'function') {
      return <div className={`${prefixCls}-circle-text`}>{textRender(percent)}</div>
    }
    return <div className={`${prefixCls}-circle-text`}>{`${percent}%`}</div>
  }

  const renderLine = () => {
    const innerStyle = getInnerStyle()
    const outStyle = getOuterStyle()
    return (
      <>
        <div className={`${prefixCls}-container`}>
          <div className={`${prefixCls}-outer`} style={outStyle}>
            <div className={`${prefixCls}-inner`} style={innerStyle} />
          </div>
        </div>
        {showInfo ? <div className={`${prefixCls}-info`}>{`${percent}%`}</div> : null}
      </>
    )
  }

  const renderCircle = () => {
    const style = activeColor ? { stroke: activeColor } : {}
    const strokeDashoffset = 289 * (1 - percent / 100)
    return (
      <>
        <svg className={`${prefixCls}-circle-container`} viewBox="0 0 100 100">
          <path
            className={`${prefixCls}-circle-outer`}
            d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
            fill-opacity="0"
          />
          <path
            className={`${prefixCls}-circle-inner`}
            d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
            fill-opacity="0"
            strokeDasharray="289 289"
            strokeDashoffset={strokeDashoffset}
            style={style}
          />
        </svg>
        {renderCircleText()}
      </>
    )
  }
  const classStr = getClassNames()
  return <div className={classStr}>{type === 'circle' ? renderCircle() : renderLine()}</div>
}

export default Progress
