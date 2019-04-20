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
  contentTimeout: 300
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
    closable
  } = props

  const getCls = React.useCallback(() => {
    const isHidden = !visible && !destroy
    const classStr = cx(prefixCls, wrapperClassName, {
      [`${prefixCls}-hidden`]: isHidden
    })
    return classStr
  }, [prefixCls, wrapperClassName, visible, destroy])

  const getZIndex = React.useCallback(() => {
    const style: React.CSSProperties = {}
    if (zIndex) {
      style.zIndex = zIndex
    }
    return style
  }, [zIndex])

  const renderMask = () => {
    const maskCls = cx(`${prefixCls}-mask`, maskAnimation)
    const style = getZIndex()
    if (hasMask) {
      return (
        <CSSTransition in={visible} timeout={maskTimeout}>
          <div className={maskCls} style={style} />
        </CSSTransition>
      )
    }
    return null
  }

  const renderContent = () => {
    const contentCls = cx(`${prefixCls}-wrapper`, contentAnimation)
    const style = getZIndex()
    return (
      <CSSTransition in={visible} timeout={contentTimeout}>
        <div className={contentCls} style={style}>
          <div className={cx(`${prefixCls}-header`)}>{header}</div>
          <div className={cx(`${prefixCls}-wrapper-inner`)}>{children}</div>
          <div className={cx(`${prefixCls}-footer`)}>{footer}</div>
        </div>
      </CSSTransition>
    )
  }

  const renderClosable = () => {
    if (closable) {
      return (
        <div className={`${prefixCls}-close`}>
          <Icon type="" />
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
        {renderContent()}
      </div>
    )
  }

  return visible || !destroy ? ReactDOM.createPortal(getContainer(), document.body) : null
}

export default React.forwardRef(Overlay)
