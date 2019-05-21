import * as React from 'react'
import cx from 'classnames'
import TimelineItem from './timelineItem'
import { TimelineProps } from 'types/timeline.d'
import './index.scss'

const defaultProps = {
  prefixCls: 'snake-timeline',
  current: 0,
  highlightColor: '#1199EE'
}

// 此处因为使用 React.ref 进行包裹, 所以没办法直接直接将 Timeline.Item = TimelineItem
const Timeline: React.FC<TimelineProps> = (userProps, ref) => {
  const props = {
    ...defaultProps,
    ...userProps
  }

  const { prefixCls, current, options, children, highlightColor } = props
  function cloneElement(ele: any, index: number) {
    const count = (options && options.length) || React.Children.count(children)
    return React.cloneElement(ele, {
      className: cx(`${prefixCls}-item`, {
        [`${prefixCls}-item-last`]: count - 1 === index
      }),
      ifCurrent: current === index,
      highlightColor
    })
  }

  function renderTimeline() {
    if (options && options.length) {
      return options.map((child, index) => {
        const { content, lineHeight, dot } = child
        return cloneElement(
          <TimelineItem dot={dot} lineHeight={lineHeight} key={index}>
            {content}
          </TimelineItem>,
          index
        )
      })
    }

    return React.Children.map(children, (child: React.ReactNode, index: number) => {
      return cloneElement(child, index)
    })
  }

  return <ul ref={ref}>{renderTimeline()}</ul>
}

export default React.forwardRef(Timeline)
