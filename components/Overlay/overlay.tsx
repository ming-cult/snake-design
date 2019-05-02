import * as React from 'react'
import * as ReactDOM from 'react-dom'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { OverlayProps } from 'types/overlay'
import { noop, hasScrollBar, getScrollBarWidth } from '../utils/tool'
import Icon from '../Icon'

interface Animate {
  bodyRef: React.MutableRefObject<React.CSSProperties>
  wrapperRef: React.MutableRefObject<HTMLElement>
  maskRef: React.MutableRefObject<HTMLElement>
  destroy: boolean
}

const { useEffect } = React

const defaultProps: OverlayProps = {
  visible: false,
  hasMask: true,
  onClose: noop,
  maskClosable: true,
  destroy: true,
  prefixCls: 'snake-overlay',
  maskTimeout: 300,
  contentTimeout: 300,
  maskAnimation: 'fade',
  contentAnimation: 'zoom',
  closable: true,
  esc: true,
  afterClose: noop
}

const getBodyStyle = (bodyRef: React.MutableRefObject<React.CSSProperties>) => {
  const style: React.CSSProperties = {}
  if ('paddingRight' in document.body.style) {
    style.paddingRight = document.body.style.paddingRight
  }
  if ('overflow' in document.body.style) {
    style.overflow = document.body.style.overflow
  }
  bodyRef.current = style
}

const setDestroyStyle = ({ wrapperRef, maskRef }: Animate, display: string) => {
  wrapperRef.current.style.display = display
  maskRef.current.style.display = display
}

const onAnimateEnter = (animate: Animate) => {
  getBodyStyle(animate.bodyRef)
  if (hasScrollBar()) {
    // tslint:disable-next-line: radix
    document.body.style.paddingRight = `${parseInt(animate.bodyRef.current.paddingRight as string) +
      getScrollBarWidth()}px`
  }
  document.body.style.overflow = 'hidden'
  if (!animate.destroy) {
    setDestroyStyle(animate, '')
  }
}

const onAnimateExist = (animate: Animate) => {
  document.body.style.overflow = animate.bodyRef.current.overflow || ''
  document.body.style.paddingRight = `${animate.bodyRef.current.paddingRight}` || ''
  if (!animate.destroy) {
    setDestroyStyle(animate, 'none')
  }
}

const Overlay: React.FC<OverlayProps> = (overlay, ref) => {
  const props = { ...defaultProps, ...overlay }
  const {
    prefixCls,
    wrapperClassName,
    visible,
    destroy,
    hasMask,
    wrapperStyle,
    maskTimeout,
    contentTimeout,
    children,
    header,
    footer,
    maskAnimation,
    contentAnimation,
    zIndex,
    closable,
    maskClosable,
    onClose,
    esc,
    afterClose
  } = props

  const bodyRef = React.useRef<React.CSSProperties>()
  const wrapperRef = React.useRef<HTMLDivElement>()
  const maskRef = React.useRef()
  // 因为 动画库的原因，如果 `unmountExist` 为 false 就会直接渲染出来 不是很好
  const [firstTime, setFirstTime] = React.useState(true)

  if (visible) {
    if (firstTime) {
      setFirstTime(false)
    }
  }

  // 处理destroy为false的时候第一次没动画的问题
  const getUnmount = React.useCallback(() => {
    let unmountOnExit = true
    if (destroy) {
      unmountOnExit = true
    } else {
      if (firstTime) {
        unmountOnExit = true
      } else {
        unmountOnExit = false
      }
    }
    return unmountOnExit
  }, [firstTime, destroy])

  const getCls = React.useCallback(() => {
    const classStr = cx(prefixCls, wrapperClassName)
    return classStr
  }, [prefixCls, wrapperClassName])

  const getZIndex = React.useCallback(() => {
    const style: React.CSSProperties = {}
    if (zIndex) {
      style.zIndex = zIndex
    }
    return style
  }, [zIndex])

  const maskClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const keyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (esc && e.key === 'Escape') {
      e.stopPropagation()
      onClose(e as any)
    }
  }

  const renderMask = () => {
    const maskCls = `${prefixCls}-${maskAnimation}`
    const style = getZIndex()
    if (hasMask) {
      return (
        <CSSTransition
          in={visible}
          timeout={maskTimeout}
          classNames={maskCls}
          unmountOnExit={getUnmount()}
          appear
        >
          <div className={`${prefixCls}-mask`} style={style} ref={maskRef} />
        </CSSTransition>
      )
    }
    return null
  }

  const renderContent = () => {
    const contentCls = `${prefixCls}-${contentAnimation}`
    const style = getZIndex()
    return (
      <CSSTransition
        in={visible}
        timeout={contentTimeout}
        classNames={contentCls}
        unmountOnExit={getUnmount()}
        onEnter={() => onAnimateEnter({ bodyRef, wrapperRef, maskRef, destroy })}
        onExited={() => {
          afterClose()
          onAnimateExist({ bodyRef, wrapperRef, maskRef, destroy })
        }}
        appear
      >
        <div
          className={getCls()}
          onClick={maskClosable ? maskClick : undefined}
          onKeyDown={keyDown}
          ref={wrapperRef}
          style={style}
          tabIndex={-1}
        >
          <div className={`${prefixCls}-wrapper`} style={wrapperStyle} ref={ref}>
            {renderClosable()}
            {header ? <div className={cx(`${prefixCls}-header`)}>{header}</div> : null}
            <div className={cx(`${prefixCls}-wrapper-inner`)}>{children}</div>
            {footer ? <div className={cx(`${prefixCls}-footer`)}>{footer}</div> : null}
          </div>
        </div>
      </CSSTransition>
    )
  }

  const renderClosable = () => {
    if (closable) {
      return (
        <div className={`${prefixCls}-close`} onClick={onClose}>
          <Icon type="close" />
        </div>
      )
    }
    return null
  }

  const getContainer = () => {
    return (
      <>
        {renderMask()}
        {renderContent()}
      </>
    )
  }

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.focus()
    }
  }, [visible])

  return ReactDOM.createPortal(getContainer(), document.body)
}

export default React.forwardRef(Overlay)
