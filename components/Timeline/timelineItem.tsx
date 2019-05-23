import * as React from 'react'
import cx from 'classnames'
import { TimeLineItemProps } from 'types/timeline.d'
import './index.scss'

const defaultProps = {
  prefixCls: 'snake-timeline-item'
}

function TimeLineItem(
  userProps: TimeLineItemProps & { ifCurrent?: boolean; highlightColor?: string }
) {
  const props = {
    ...defaultProps,
    ...userProps
  }
  const { prefixCls, dot, children, ifCurrent, lineHeight, highlightColor, ...restProps } = props
  return (
    <li {...restProps}>
      <div className={cx(`${prefixCls}-tail`)} style={{ height: `${lineHeight}%` }} />
      <div className={cx(`${prefixCls}-dot`)}>
        {dot ? (
          dot
        ) : (
          <div
            className={cx(`${prefixCls}-dot-default`, {
              [`${prefixCls}-dot-default-current`]: ifCurrent
            })}
            style={ifCurrent ? { background: highlightColor } : {}}
          />
        )}
      </div>
      <div
        className={cx(`${prefixCls}-content`, { [`${prefixCls}-content-current`]: ifCurrent })}
        style={ifCurrent ? { color: highlightColor } : {}}
      >
        {children}
      </div>
    </li>
  )
}

export default TimeLineItem
