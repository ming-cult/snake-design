import * as React from 'react'
import { TooltipProps } from 'types/tooltip'
import Portal from '../Portal'
import { noop } from '../utils/tool'

import './index.scss'

const defaultProps: Partial<TooltipProps> = {
  placement: 'top',
  visible: false,
  onVisibleChange: noop,
  trigger: 'hover',
  autoAdjustOverflow: true
}

const prefixCls = 'snake-tooltip'

export default function Tooltip(tooltip: TooltipProps) {
  const props = { ...defaultProps, ...tooltip }
  const { title, contentClass, contentStyle, ...rest } = props

  const renderContent = () => {
    return (
      <div className={`${prefixCls}-inner`} role="tooltip">
        {title ? <div className={`${prefixCls}-inner-title`}>{title}</div> : null}
      </div>
    )
  }
  return (
    <Portal
      prefixCls={prefixCls}
      mode="tooltip"
      content={renderContent()}
      hasTriangle
      className={contentClass}
      style={contentStyle}
      animationName="tooltip-animate"
      {...rest}
    />
  )
}
