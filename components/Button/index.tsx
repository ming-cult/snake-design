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
  onClick: () => {}
}

const Button = (userProps: ButtonProps) => {
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
    className = '',
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

  const disabledStr = disabled ? 'disabled' : ''
  const loadStr = loading ? 'loading' : ''

  if (!!text) {
    const classStr = cx(prefixCls, {
      [`${prefixCls}-text-${type}`]: type,
      [`${prefixCls}-text-${disabledStr}`]: disabled,
      [`${prefixCls}-text-${loadStr}`]: loading,
      className
    })
    return (
      <a className={classStr} style={style} onClick={handleClick}>
        {loading ? <Icon type="reload" spin={true} style={iconStyle} className="btn-icon" /> : null}
        {icon ? <Icon type={icon} style={iconStyle} className="btn-icon" /> : null}
        <span>{children}</span>
      </a>
    )
  }
  const classStr = cx(prefixCls, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-btn-${type}`]: type,
    [`${prefixCls}-btn-${loadStr}`]: loading,
    className
  })
  return (
    <button
      type="button"
      disabled={!!disabled}
      className={classStr}
      style={style}
      onClick={handleClick}
    >
      {loading ? <Icon type="reload" spin={true} style={iconStyle} className="btn-icon" /> : null}
      {icon ? <Icon type={icon} style={iconStyle} className="btn-icon" /> : null}
      <span>{children}</span>
    </button>
  )
}

Button.defaultProps = defaultProps
export default Button
