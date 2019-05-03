import * as React from 'react'
import { AffixProps } from 'types/affix.d'
import * as throttle from 'diana/lib/throttle'

const { useState, useEffect, useRef } = React

const defaultProps = {
  prefixCls: 'snake-affix'
}

const Affix = (userProps: AffixProps, ref: any) => {
  const props = {
    ...defaultProps,
    ...userProps
  }
  const { offsetTop, offsetBottom, children, target, onChange, className, style } = props

  const placeholderRef = ref || useRef(null)
  const wrapperRef = useRef(null)

  const [positionStyle, setPositionStyle] = useState({})
  // 滚动元素
  let scrollElm: Window | HTMLElement = window
  // 是否是绝对布局模式
  let fixed = false

  const handleScroll = () => {
    const rect = placeholderRef.current.getBoundingClientRect()
    let { top, bottom } = rect
    const style: React.CSSProperties = {}
    let containerTop = 0 // 容器距离视口上侧的距离
    let containerBottom = 0 // 容器距离视口下侧的距离

    if (scrollElm !== window) {
      const containerRect = (scrollElm as HTMLElement).getBoundingClientRect()
      containerTop = containerRect.top
      containerBottom = containerRect.bottom

      top = top - containerTop // 距离容器顶部的距离
      bottom = containerBottom - bottom // 距离容器底部的距离
    } else {
      bottom = window.innerHeight - bottom
    }

    if (top <= offsetTop || bottom <= offsetBottom) {
      if (!fixed) {
        style.position = 'fixed'
        style.top = offsetTop !== undefined ? offsetTop + containerTop : null
        style.bottom =
          offsetBottom !== undefined
            ? scrollElm !== window
              ? window.innerHeight - (containerBottom - offsetBottom)
              : bottom
            : null

        // 在子节点移开父节点后保持原来占位
        const { width, height } = wrapperRef.current.getBoundingClientRect()
        placeholderRef.current.style.height = `${height}px`
        placeholderRef.current.style.width = `${width}px`
        onChange && onChange(true)
        fixed = true
        setPositionStyle(style)
      }
    } else {
      if (fixed) {
        style.position = 'relative'
        onChange && onChange(false)
        fixed = false
        setPositionStyle(style)
      }
    }
  }

  const scroll = throttle(handleScroll, 20)

  useEffect(() => {
    if (target) scrollElm = target()
    // 让按钮点击调整 offsetTop 操作立马生效
    handleScroll()
    ;(scrollElm as any).addEventListener('scroll', scroll)

    return () => {
      ;(scrollElm as any).removeEventListener('scroll', scroll)
    }
  }, [offsetTop, offsetBottom])

  return (
    <div ref={placeholderRef} style={style} className={className}>
      <div ref={wrapperRef} style={positionStyle}>
        {children}
      </div>
    </div>
  )
}

export default React.forwardRef(Affix)
