import * as React from 'react'
import { BacktopProps } from 'types/backtop'
import cx from 'classnames'
import Icon from '../Icon'
import { throttle } from '../utils/tool'
import './index.scss'

const { useState, useEffect } = React

const defaultProps = {
  prefixCls: 'snake-design-backtop'
}

const BackTop = (userProps: BacktopProps, ref: any) => {
  const props = {
    ...userProps,
    ...defaultProps
  }

  const { prefixCls } = props

  const [show, setShow] = useState(false)

  const scrollLogic = () => {
    if (window.scrollY >= 100) {
      if (!show) {
        setShow(true)
      }
    } else {
      if (show) {
        setShow(false)
      }
    }
  }

  const scroll = throttle(scrollLogic, 20)

  useEffect(() => {
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cx(`${prefixCls}-default`, {
        [`${prefixCls}-hide`]: !show
      })}
    >
      <Icon type="totop" color="#fff" />
    </div>
  )
}

export default React.forwardRef(BackTop)
