import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import cx from 'classnames'
import { Portal } from 'types/portal'
import { useClickOutSide, useEnhancedEffect } from '../utils/use'
import { noop, getClientSize } from '../utils/tool'

const defaultProps = {
  trigger: 'hover',
  placement: 'bottomLeft',
  disabled: false,
  wrapperComponent: 'span',
  prefixCls: 'snake-dropdown',
  hasTriangle: false,
  timeout: 300,
  offset: 0,
  mode: 'dropdown',
  visible: false,
  onVisibleChange: noop,
  destroy: true,
  autoAdjustOverflow: true
}

const PortalOverlay: React.FC<Portal> = dropdownProps => {
  const props = { ...defaultProps, ...dropdownProps }
  const {
    className,
    placement,
    content,
    wrapperComponent: Component,
    children,
    trigger,
    disabled,
    prefixCls,
    animationName,
    wrapperStyle,
    style,
    onVisibleChange,
    hasTriangle,
    timeout,
    offset,
    mode,
    visible,
    destroy,
    getPopupContainer,
    autoAdjustOverflow
  } = props
  const wrapperRef = React.useRef<HTMLElement>()
  const contentRef = React.useRef<HTMLDivElement>()
  const timeoutRef = React.useRef<any>()
  const [mountNode, setMountNode] = React.useState(null)
  const [newPlacement, setPlacement] = React.useState(placement)

  useClickOutSide([contentRef, wrapperRef], () => {
    onVisibleChange(false)
  })

  const toggle = (triggerStr: string, toggle: boolean) => {
    if (disabled) return
    if (trigger === triggerStr) {
      // 只在变化的时候回调
      if (toggle !== visible) {
        onVisibleChange(toggle)
      }
    }
  }

  const getContainer = () => {
    if (getPopupContainer) {
      return getPopupContainer()
    }
    return document.body
  }

  const getOverlayClass = React.useCallback(() => {
    if (animationName) return `${prefixCls}-${animationName}`
    return `${prefixCls}-slide`
  }, [animationName])

  const getContentStyle = (top: string, left: string) => {
    ;(contentRef.current as HTMLElement).style.top = top
    ;(contentRef.current as HTMLElement).style.left = left
  }

  const getPlacement = () => {
    let clonePlacement = placement
    const rect = (wrapperRef.current as HTMLElement).getBoundingClientRect()
    const contentRect = (contentRef.current as HTMLElement).getBoundingClientRect()
    if (autoAdjustOverflow) {
      const { width, height } = getClientSize()
      switch (placement) {
        case 'top':
          clonePlacement = rect.top < contentRect.height ? 'bottom' : 'top'
          clonePlacement = `${clonePlacement}${
            rect.left + rect.width / 2 < contentRect.width / 2 ? 'Left' : ''
          }`
          break
        case 'topLeft':
          clonePlacement = rect.top < contentRect.height ? 'bottom' : 'top'
          clonePlacement = `${clonePlacement}${
            width - rect.left < contentRect.width / 2 ? 'Right' : 'Left'
          }`
          break
        case 'topRight':
          clonePlacement = rect.top < contentRect.height ? 'bottom' : 'top'
          clonePlacement = `${clonePlacement}${rect.right < contentRect.width ? 'Left' : 'Right'}`
          break
        case 'bottom':
          clonePlacement = height - rect.bottom < contentRect.height ? 'top' : 'bottom'
          clonePlacement = `${clonePlacement}${
            rect.left + rect.width / 2 < contentRect.width / 2 ? 'Left' : ''
          }`
          break
        case 'bottomLeft':
          clonePlacement = height - rect.bottom < contentRect.height ? 'top' : 'bottom'
          clonePlacement = `${clonePlacement}${
            width - rect.left < contentRect.width / 2 ? 'Right' : 'Left'
          }`
          break
        case 'bottomRight':
          clonePlacement = height - rect.bottom < contentRect.height ? 'top' : 'bottom'
          clonePlacement = `${clonePlacement}${rect.right < contentRect.width ? 'Left' : 'Right'}`
          break
        case 'left':
          clonePlacement = rect.left < contentRect.width ? 'right' : 'left'
          clonePlacement = `${clonePlacement}${
            rect.top + rect.height / 2 < contentRect.height / 2 ? 'Top' : ''
          }`
          break
        case 'leftTop':
          clonePlacement = rect.left < contentRect.width ? 'right' : 'left'
          clonePlacement = `${clonePlacement}${
            height - rect.top < contentRect.height ? 'Bottom' : 'Top'
          }`
          break
        case 'leftBottom':
          clonePlacement = rect.left < contentRect.width ? 'right' : 'left'
          clonePlacement = `${clonePlacement}${rect.bottom < contentRect.height ? 'Top' : 'Bottom'}`
          break
        case 'right':
          clonePlacement = width - rect.right < contentRect.width ? 'left' : 'right'
          clonePlacement = `${clonePlacement}${
            rect.top + rect.height / 2 < contentRect.height / 2 ? 'Top' : ''
          }`
          break
        case 'rightTop':
          clonePlacement = width - rect.right < contentRect.width ? 'left' : 'right'
          clonePlacement = `${clonePlacement}${
            height - rect.top < contentRect.height ? 'Bottom' : 'Top'
          }`
          break
        case 'rightBottom':
          clonePlacement = width - rect.right < contentRect.width ? 'left' : 'right'
          clonePlacement = `${clonePlacement}${rect.bottom < contentRect.height ? 'Top' : 'Bottom'}`
          break
        default:
          break
      }
      // 修改方向
      if (clonePlacement !== newPlacement) {
        setPlacement(clonePlacement)
      }
    }

    return { rect, contentRect, clonePlacement }
  }

  const getPosition = () => {
    const { rect, contentRect, clonePlacement } = getPlacement()
    let top = `${rect.top + rect.height + offset + window.pageYOffset}px`
    let left = `${rect.left + window.pageXOffset}px`
    if (contentRect.width < rect.width && mode === 'dropdown') {
      contentRef.current.style.minWidth = `${rect.width}px`
    }
    switch (clonePlacement) {
      case 'top':
        top = `${rect.top - offset - contentRect.height + window.pageYOffset}px`
        left = `${rect.left + rect.width / 2 - contentRect.width / 2 + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      case 'topLeft':
        top = `${rect.top - offset - contentRect.height + window.pageYOffset}px`
        left = `${rect.left + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      case 'topRight':
        top = `${rect.top - offset - contentRect.height + window.pageYOffset}px`
        left = `${rect.right - contentRect.width + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      case 'bottom':
        top = `${rect.top + rect.height + offset + window.pageYOffset}px`
        left = `${rect.left + rect.width / 2 - contentRect.width / 2 + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      case 'bottomLeft':
        top = `${rect.top + rect.height + offset + window.pageYOffset}px`
        left = `${rect.left + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      case 'bottomRight':
        top = `${rect.top + rect.height + offset + window.pageYOffset}px`
        left = `${rect.right - contentRect.width + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      case 'left':
        top = `${rect.top + rect.height / 2 - contentRect.height / 2 + window.pageYOffset}px`
        left = `${rect.left - offset - contentRect.width + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      case 'leftTop':
        top = `${rect.top + window.pageYOffset}px`
        left = `${rect.left - offset - contentRect.width + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      case 'leftBottom':
        top = `${rect.top + rect.height - contentRect.height + window.pageYOffset}px`
        left = `${rect.left - offset - contentRect.width + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      case 'right':
        top = `${rect.top + rect.height / 2 - contentRect.height / 2 + window.pageYOffset}px`
        left = `${rect.right + offset + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      case 'rightTop':
        top = `${rect.top + window.pageYOffset}px`
        left = `${rect.right + offset + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      case 'rightBottom':
        top = `${rect.top + rect.height - contentRect.height + window.pageYOffset}px`
        left = `${rect.right + offset + window.pageXOffset}px`
        getContentStyle(top, left)
        break
      default:
        getContentStyle(top, left)
        break
    }
  }

  const clearTime = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleClick = () => {
    toggle('click', true)
  }

  const handleMouseEnter = () => {
    clearTime()
    timeoutRef.current = setTimeout(() => {
      toggle('hover', true)
    }, 0)
  }

  const handleMouseLeave = () => {
    clearTime()
    timeoutRef.current = setTimeout(() => {
      toggle('hover', false)
    }, 0)
  }

  const renderDropDown = () => {
    const classStr = cx(
      prefixCls,
      {
        [`${prefixCls}-${newPlacement}`]: newPlacement,
        [`${prefixCls}-triangle`]: hasTriangle
      },
      className
    )
    return (
      <CSSTransition
        in={visible}
        timeout={timeout}
        classNames={getOverlayClass()}
        unmountOnExit={destroy}
      >
        <div
          className={classStr}
          ref={contentRef}
          onClick={() => {
            onVisibleChange(false)
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={style}
        >
          <div className={`${prefixCls}-content`}>{content}</div>
        </div>
      </CSSTransition>
    )
  }

  React.useEffect(() => {
    setMountNode(getContainer())
  }, [getContainer()])

  useEnhancedEffect(() => {
    if (visible && mountNode) {
      getPosition()
    }
  }, [visible, mountNode])

  return (
    <>
      <Component
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={wrapperStyle}
        ref={wrapperRef}
      >
        {React.cloneElement(children as any, {
          disabled: disabled
        })}
      </Component>
      {mountNode ? ReactDOM.createPortal(renderDropDown(), getContainer()) : null}
    </>
  )
}

export default PortalOverlay
