import * as React from 'react'
import { PopoverProps } from 'types/popover'
import Portal from '../Portal'
import { noop } from '../utils/tool'

import './index.scss'

const defaultProps: Partial<PopoverProps> = {
  placement: 'top',
  visible: false,
  onVisibleChange: noop,
  trigger: 'hover',
  autoAdjustOverflow: true
}

const prefixCls = 'snake-popover'

export default function Popover(popover: PopoverProps) {
  const props = { ...defaultProps, ...popover }
  const { content, title, contentClass, contentStyle, ...rest } = props
  const renderContent = () => {
    return (
      <div className={`${prefixCls}-inner`}>
        {title ? <div className={`${prefixCls}-inner-title`}>{title}</div> : null}
        {content ? <div className={`${prefixCls}-inner-content`}>{content}</div> : null}
      </div>
    )
  }
  return (
    <Portal
      prefixCls={prefixCls}
      mode="popover"
      content={renderContent()}
      hasTriangle
      className={contentClass}
      style={contentStyle}
      animationName="pop-animate"
      {...rest}
    />
  )
}
