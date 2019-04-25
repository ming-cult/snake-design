import * as React from 'react'
import cx from 'classnames'
import { ModalProps } from 'types/modal'
import Overlay from '../Overlay'
import Button from '../Button'
import { noop } from '../utils/tool'

import './index.scss'

const defaultProps = {
  cancelText: '取消',
  okText: '确定',
  closable: true,
  destroy: true,
  onOk: noop,
  onCancel: noop,
  visible: false,
  maskClosable: true,
  esc: true,
  center: false
}

const prefixCls = 'snake-modal'

const renderHeader = ({ title }: ModalProps) => {
  if (title) {
    return <div className={`${prefixCls}-title`}>{title}</div>
  }
  return null
}

const renderFooter = ({
  cancelText,
  okText,
  onOk,
  okButtonProps,
  cancelButtonProps,
  footer,
  onCancel
}: ModalProps) => {
  if (footer === null) return null
  return (
    <div>
      {footer || (
        <>
          <Button onClick={onCancel} {...cancelButtonProps} type="gray">
            {cancelText}
          </Button>
          <Button onClick={onOk} {...okButtonProps}>
            {okText}
          </Button>
        </>
      )}
    </div>
  )
}

const Modal: React.FC<ModalProps> = (modalProps, ref: React.RefObject<any>) => {
  const props = { ...defaultProps, ...modalProps }
  const {
    children,
    className,
    center,
    esc,
    destroy,
    onCancel,
    visible,
    style,
    maskClosable,
    closable,
    zIndex,
    width
  } = props

  const getClassStr = React.useCallback(() => {
    return cx(
      {
        [`${prefixCls}-center`]: center
      },
      className
    )
  }, [className, center])

  const getStyle = React.useCallback(() => {
    const cloneStyle: React.CSSProperties = {}
    if (width) {
      cloneStyle.width = width
    }
    return { ...style, ...cloneStyle }
  }, [width, style])

  return (
    <Overlay
      prefixCls={prefixCls}
      footer={renderFooter(props)}
      header={renderHeader(props)}
      wrapperClassName={getClassStr()}
      esc={esc}
      ref={ref}
      destroy={destroy}
      onClose={onCancel}
      visible={visible}
      wrapperStyle={getStyle()}
      maskClosable={maskClosable}
      closable={closable}
      zIndex={zIndex}
    >
      {children}
    </Overlay>
  )
}

export default React.forwardRef(Modal)
