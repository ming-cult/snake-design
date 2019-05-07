import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import cx from 'classnames'
import { Portal } from 'types/portal'
import { useClickOutSide } from '../utils/use'
import { noop } from '../utils/tool'

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
  destroy: true
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
    destroy
  } = props
  const wrapperRef = React.useRef<HTMLElement>()
  const contentRef = React.useRef<HTMLDivElement>()
  const timeoutRef = React.useRef<any>()

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

  const getPosition = () => {
    const rect = (wrapperRef.current as HTMLElement).getBoundingClientRect()
    const contentRect = (contentRef.current as HTMLElement).getBoundingClientRect()
    let top = `${rect.top + rect.height + offset + window.pageYOffset}px`
    let left = `${rect.left + window.pageXOffset}px`
    if (contentRect.width < rect.width && mode === 'dropdown') {
      contentRef.current.style.minWidth = `${rect.width}px`
    }
    switch (placement) {
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
        [`${prefixCls}-${placement}`]: placement,
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

  React.useLayoutEffect(() => {
    if (visible) {
      getPosition()
    }
  }, [visible])

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
      {ReactDOM.createPortal(renderDropDown(), getContainer())}
    </>
  )
}

export default PortalOverlay
