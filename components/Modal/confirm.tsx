import * as React from 'react'
import * as ReactDOM from 'react-dom'
import cx from 'classnames'
import Modal from './modal'
import Button from '../Button'
import Icon from '../Icon'
import { AlertProps } from 'types/modal'
import { noop } from '../utils/tool'

const prefixCls = 'snake-confirm'

export interface Close {
  close: () => void
}

export default function confirm({
  content,
  icon = <Icon type="question-circle" color="#faad14" />,
  okText = '确认',
  onOk = noop,
  okButtonProps,
  title,
  onCancel = noop,
  cancelButtonProps,
  cancelText = '取消',
  className,
  hasCancelBtn = true,
  ...rest
}: AlertProps): Close {
  const div = document.createElement('div')
  document.body.appendChild(div)

  let isClosed = false

  const getClassName = () => {
    return cx('snake-confirm', className)
  }

  const close = () => {
    ReactDOM.render(renderModal(false), div)
  }

  const destroy = () => {
    ReactDOM.unmountComponentAtNode(div)
    if (div && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }

  const handleClick = () => {
    // 可能会存在异步情况 finally 兼容性不是特别好
    if (isClosed) return
    Promise.resolve(onOk())
      .then(() => {
        isClosed = true
        close()
      })
      .catch(() => {
        isClosed = true
        close()
      })
  }

  const renderModal = (visible: boolean) => {
    return (
      <Modal
        {...rest}
        closable={false}
        onCancel={() => {
          onCancel()
          close()
        }}
        title={null}
        footer={null}
        visible={visible}
        afterClose={destroy}
        className={getClassName()}
      >
        <div className={`${prefixCls}-wrapper`}>
          <div className={`${prefixCls}-body`}>
            <div className={`${prefixCls}-body-header`}>
              {icon}
              {title ? <div className={`${prefixCls}-title`}>{title}</div> : null}
            </div>
            {content ? <div className={`${prefixCls}-content`}>{content}</div> : null}
          </div>
          <div className={`${prefixCls}-btn`}>
            {hasCancelBtn ? (
              <Button
                type="gray"
                onClick={() => {
                  onCancel()
                  close()
                }}
                {...cancelButtonProps}
              >
                {cancelText}
              </Button>
            ) : null}
            <Button onClick={handleClick} {...okButtonProps}>
              {okText}
            </Button>
          </div>
        </div>
      </Modal>
    )
  }

  ReactDOM.render(renderModal(true), div)

  return {
    close
  }
}

export function info({
  icon = <Icon type="info-circle" color="#1890ff" />,
  hasCancelBtn = false,
  okText = '知道了',
  ...rest
}: AlertProps) {
  return confirm({ icon, hasCancelBtn, okText, ...rest })
}

export function success({
  icon = <Icon type="check-circle" color="#52c41a" />,
  hasCancelBtn = false,
  okText = '知道了',
  ...rest
}: AlertProps) {
  return confirm({ icon, hasCancelBtn, okText, ...rest })
}

export function error({
  icon = <Icon type="close-circle" color="#f5222d" />,
  hasCancelBtn = false,
  okText = '知道了',
  ...rest
}: AlertProps) {
  return confirm({ icon, hasCancelBtn, okText, ...rest })
}

export function warning({
  icon = <Icon type="warning-circle" color="#faad14" />,
  hasCancelBtn = false,
  okText = '知道了',
  ...rest
}: AlertProps) {
  return confirm({ icon, hasCancelBtn, okText, ...rest })
}
