import * as React from 'react'
import cx from 'classnames'
import { SpinProps } from 'types/spin'

import './index.scss'

const defaultProps = {
  size: 'normal'
}

const prefixCls = 'snake-spin'

const Spin: React.FC<SpinProps> = (spin: SpinProps, ref: any) => {
  const props = { ...defaultProps, ...spin }
  const { size, children, indicator, tip } = props

  const getClassNames = () => {
    return cx(prefixCls, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-wrapper`]: children
    })
  }

  const renderIndicator = () => {
    return (
      <div className={`${prefixCls}-loading-icon`}>
        {indicator || (
          <div className={`${prefixCls}-default-spin`}>
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle1`} />
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle2`} />
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle3`} />
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle4`} />
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle5`} />
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle6`} />
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle7`} />
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle8`} />
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle9`} />
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle10`} />
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle11`} />
            <div className={`${prefixCls}-sk-child ${prefixCls}-sk-circle12`} />
          </div>
        )}
      </div>
    )
  }

  const renderChildren = () => {
    if (children) {
      return <div className={`${prefixCls}-container`}>{children}</div>
    }
    return null
  }

  const renderComponent = () => {
    const classStr = getClassNames()
    return (
      <div className={classStr} ref={ref}>
        <div className={`${prefixCls}-loading`}>
          <div className={`${prefixCls}-loading-container`}>
            {renderIndicator()}
            {tip ? <div className={`${prefixCls}-loading-text`}>{tip}</div> : null}
          </div>
        </div>
        {renderChildren()}
      </div>
    )
  }

  return renderComponent()
}

export default React.forwardRef(Spin)
