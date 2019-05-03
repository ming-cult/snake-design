import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import cx from 'classnames'
import { DropDown } from 'types/dropdown'

import './index.scss'

const defaultProps = {
  trigger: 'hover',
  placement: 'bottomLeft',
  disabled: false,
  wrapperComponent: 'span',
  prefixCls: 'snake-dropdown',
  hasTriangle: false,
  timeout: 300
}

const DropOverlay: React.FC<DropDown> = dropdownProps => {
  const props = { ...defaultProps, ...dropdownProps }
  const {
    className,
    placement,
    content,
    wrapperComponent: Component,
    children,
    trigger,
    disabled,
    getPopupContainer,
    prefixCls,
    animationName,
    wrapperStyle,
    // style,
    onVisibleChange,
    hasTriangle,
    timeout
  } = props
  const [visible, setVisible] = React.useState(false)
  const wrapperRef = React.useRef<HTMLElement>()
  const contentRef = React.useRef<HTMLDivElement>()

  const toggle = (triggerStr: string, toggle: boolean) => {
    if (disabled) return
    if (trigger === triggerStr) {
      setVisible(toggle)
      onVisibleChange && onVisibleChange(toggle)
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

  const getPosition = (
    wrapperRef: React.RefObject<HTMLElement>,
    _contentRef: React.RefObject<HTMLDivElement>
  ) => {
    const rect = (wrapperRef.current as HTMLElement).getBoundingClientRect()
    const contentRect = (contentRef.current as HTMLElement).getBoundingClientRect()
    contentRef.current.style.minWidth = `${rect.width}px`
    switch (placement) {
      case 'top':
        ;(contentRef.current as HTMLElement).style.top = `${rect.top - 4 - contentRect.height}px`
        ;(contentRef.current as HTMLElement).style.left = `${rect.left +
          rect.width / 2 -
          contentRect.width / 2}px`
        break
      case 'topLeft':
        ;(contentRef.current as HTMLElement).style.left = `${rect.left}px`
        ;(contentRef.current as HTMLElement).style.top = `${rect.top - 4 - contentRect.height}px`
        break
      case 'topRight':
        ;(contentRef.current as HTMLElement).style.top = `${rect.top - 4 - contentRect.height}px`
        ;(contentRef.current as HTMLElement).style.left = `${rect.right - contentRect.width}px`
        break
      case 'bottom':
        ;(contentRef.current as HTMLElement).style.top = `${rect.top + rect.height + 4}px`
        ;(contentRef.current as HTMLElement).style.left = `${rect.left +
          rect.width / 2 -
          contentRect.width / 2}px`
        break
      case 'bottomLeft':
        ;(contentRef.current as HTMLElement).style.top = `${rect.top + rect.height + 4}px`
        ;(contentRef.current as HTMLElement).style.left = `${rect.left}px`
        break
      case 'bottomRight':
        ;(contentRef.current as HTMLElement).style.top = `${rect.top + rect.height + 4}px`
        ;(contentRef.current as HTMLElement).style.left = `${rect.right - contentRect.width}px`
        break
      default:
        ;(contentRef.current as HTMLElement).style.top = `${rect.top + rect.height + 4}px`
        ;(contentRef.current as HTMLElement).style.left = `${rect.left}px`
        break
    }
  }

  const handleClick = () => {
    toggle('click', true)
  }

  const handleMouseEnter = () => {
    toggle('hover', true)
  }

  const handleMouseLeave = () => {
    toggle('hover', false)
  }

  const renderDropDown = () => {
    const classStr = cx(
      prefixCls,
      {
        [`${prefixCls}-${placement}`]: placement
      },
      className
    )
    return (
      <CSSTransition in={visible} timeout={timeout} classNames={getOverlayClass()} unmountOnExit>
        <div
          className={classStr}
          ref={contentRef}
          onClick={() => toggle('click', false)}
          onMouseEnter={() => toggle('hover', true)}
          onMouseLeave={() => toggle('hover', false)}
        >
          {hasTriangle ? <div className={`${prefixCls}-triangle`} /> : null}
          {content}
        </div>
      </CSSTransition>
    )
  }

  React.useLayoutEffect(() => {
    if (visible) {
      getPosition(wrapperRef, contentRef)
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

export default DropOverlay
