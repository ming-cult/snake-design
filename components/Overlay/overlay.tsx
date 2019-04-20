import * as React from 'react'
import * as ReactDOM from 'react-dom'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { OverlayProps } from 'types/overlay'
import { noop } from '../utils/tool'
import Icon from '../Icon'

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
  contentAnimation: 'zoom'
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
    onClose
  } = props

  const getCls = React.useCallback(() => {
    const isHidden = !visible && !destroy
    const classStr = cx(
      prefixCls,
      {
        [`${prefixCls}-hidden`]: isHidden
      },
      wrapperClassName
    )
    return classStr
  }, [prefixCls, wrapperClassName, visible, destroy])

  const getZIndex = React.useCallback(() => {
    const style: React.CSSProperties = {}
    if (zIndex) {
      style.zIndex = zIndex
    }
    return style
  }, [zIndex])

  const maskClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) {
      onClose(e)
    }
  }

  const renderMask = () => {
    const maskCls = `${prefixCls}-${maskAnimation}`
    const style = getZIndex()
    if (hasMask) {
      return (
        <CSSTransition in={visible} timeout={maskTimeout} classNames={maskCls}>
          <div className={`${prefixCls}-mask`} style={style} />
        </CSSTransition>
      )
    }
    return null
  }

  const renderContent = () => {
    const contentCls = `${prefixCls}-${contentAnimation}`
    const style = getZIndex()
    return (
      <CSSTransition in={visible} timeout={contentTimeout} classNames={contentCls}>
        <div className={`${prefixCls}-wrapper`} style={style}>
          {header ? <div className={cx(`${prefixCls}-header`)}>{header}</div> : null}
          <div className={cx(`${prefixCls}-wrapper-inner`)}>{children}</div>
          {footer ? <div className={cx(`${prefixCls}-footer`)}>{footer}</div> : null}
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
      <div className={getCls()} style={wrapperStyle} ref={ref}>
        {renderClosable()}
        {renderMask()}
        <div className={`${prefixCls}-container`} onClick={maskClosable ? maskClick : undefined}>
          {renderContent()}
        </div>
      </div>
    )
  }

  return visible || !destroy ? ReactDOM.createPortal(getContainer(), document.body) : null
}

export default React.forwardRef(Overlay)
