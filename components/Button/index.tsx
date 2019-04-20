import * as React from 'react'
import cx from 'classnames'
import { ButtonProps } from 'types/button.d'
import Icon from '../Icon'
import './index.scss'

const defaultProps = {
  prefixCls: 'snake-button',
  size: 'default',
  disabled: false,
  loading: false,
  type: 'primary',
  text: false,
  className: '',
  onClick: () => {}
}

const Button = (userProps: ButtonProps, ref: any) => {
  const props = {
    ...defaultProps,
    ...userProps
  }
  const {
    prefixCls,
    style,
    size,
    onClick,
    loading,
    disabled,
    className,
    children,
    type,
    text,
    icon,
    iconStyle
  } = props

  const handleClick = (e: React.MouseEvent) => {
    if (loading) return
    if (disabled) return
    onClick(e)
  }

  const iconClass = cx({ [`${prefixCls}-icon`]: true })

  if (!!text) {
    const classStr = cx(prefixCls, {
      [`${prefixCls}-text-${type}`]: type,
      [`${prefixCls}-text-disabled`]: disabled,
      [`${prefixCls}-text-loading`]: loading,
      className
    })
    return (
      <a className={classStr} style={style} onClick={handleClick} ref={ref}>
        {loading ? (
          <Icon type="reload" spin={true} style={iconStyle} className={iconClass} />
        ) : null}
        {icon ? <Icon type={icon} style={iconStyle} className={iconClass} /> : null}
        <span>{children}</span>
      </a>
    )
  }
  const classStr = cx(prefixCls, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-btn-${type}`]: type,
    [`${prefixCls}-btn-loading`]: loading,
    className
  })
  return (
    <button
      ref={ref}
      type="button"
      disabled={!!disabled}
      className={classStr}
      style={style}
      onClick={handleClick}
    >
      {loading ? <Icon type="reload" spin={true} style={iconStyle} className={iconClass} /> : null}
      {icon ? <Icon type={icon} style={iconStyle} className={iconClass} /> : null}
      <span>{children}</span>
    </button>
  )
}

export default React.forwardRef(Button)
