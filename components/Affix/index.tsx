import * as React from 'react'
// import cx from 'classnames'
import { AffixProps } from 'types/affix.d'
import './index.scss'

const { useState, useEffect, useRef } = React

const defaultProps = {
  prefixCls: 'snake-affix'
}

const Affix = (userProps: AffixProps, _ref: any) => {
  const props = {
    ...defaultProps,
    ...userProps
  }
  const { offsetTop, children, container } = props

  const placeholderRef = useRef(null)
  const wrapperRef = useRef(null)

  const [positionStyle, setPositionStyle] = useState({})
  const [sticky, setSticky] = useState(false)

  const handleScroll = () => {
    const rect = placeholderRef.current.getBoundingClientRect()
    const { top } = rect
    const style: React.CSSProperties = {}

    if (top <= offsetTop) {
      if (!sticky) {
        style.position = 'fixed'
        style.top = offsetTop
        setSticky(true)

        // 在子节点移开父节点后保持原来占位
        const { width, height } = wrapperRef.current.getBoundingClientRect()
        placeholderRef.current.style.height = `${height}px`
        placeholderRef.current.style.width = `${width}px`
      }
    } else if (top > offsetTop) {
      style.position = 'relative'
    }

    setPositionStyle(style)
  }

  let scrollElm = window
  if (container) scrollElm = container
  useEffect(() => {
    ;(scrollElm as any).addEventListener('scroll', handleScroll)

    return () => {
      ;(scrollElm as any).removeEventListener('scroll', handleScroll)
    }
  }, [offsetTop])

  return (
    <div ref={placeholderRef}>
      <div ref={wrapperRef} style={positionStyle}>
        {children}
      </div>
    </div>
  )
}

export default React.forwardRef(Affix)
