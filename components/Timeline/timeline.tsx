import * as React from 'react'
import cx from 'classnames'
import TimelineItem from './TimelineItem'
import { TimelineProps } from 'types/timeline.d'
import './index.scss'

const defaultProps = {
  prefixCls: 'snake-timeline',
  current: 0,
  highlightColor: '#1199EE'
}

function Timeline(userProps: TimelineProps, ref: React.RefObject<any>) {
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

  return <ul>{renderTimeline()}</ul>
}

Timeline.Item = TimelineItem

export default React.forwardRef(Timeline)
