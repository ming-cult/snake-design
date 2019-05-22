import * as React from 'react'
import { BacktopProps } from 'types/backtop'
import cx from 'classnames'
import { scrollToY } from '../utils/scrollTo'
import Icon from '../Icon'
import { throttle } from '../utils/tool'
import './index.scss'

const { useState, useEffect } = React

const defaultProps = {
  prefixCls: 'snake-design-backtop',
  visibilityHeight: 400
}

const BackTop = (userProps: BacktopProps, ref: any) => {
  const props = {
    ...userProps,
    ...defaultProps
  }

  const { prefixCls, children, visibilityHeight } = props

  const [show, setShow] = useState(false)

  const scrollLogic = () => {
    if (window.scrollY >= visibilityHeight) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    const scroll = throttle(scrollLogic, 20)
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  const backTopFn = () => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // })
    scrollToY(0)
  }

  return (
    <div
      ref={ref}
      className={cx(`${prefixCls}-default`, {
        [`${prefixCls}-hide`]: !show
      })}
      onClick={backTopFn}
    >
      {children || <Icon type="totop" color="#fff" />}
    </div>
  )
}

export default React.forwardRef(BackTop)
