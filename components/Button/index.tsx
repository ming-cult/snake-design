import * as React from 'react'
import { getCx } from '../utils/tool'
import { ButtonProps } from 'types/button.d'
import Icon from '../Icon'
import './index.scss'

const { useCallback } = React

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
  const cx = useCallback(getCx(prefixCls), [prefixCls])

  const handleClick = (e: React.MouseEvent) => {
    if (loading) return
    if (disabled) return
    onClick(e)
  }

  if (!!text) {
    return (
      <a
        disabled={!!disabled}
        className={cx('', 'text-' + type, { className })}
        style={style}
        onClick={handleClick}
      >
        {icon ? <Icon type={icon} style={iconStyle} className="btn-icon" /> : null}
        <span>{children}</span>
      </a>
    )
  }
  return (
    <button
      type="button"
      disabled={!!disabled}
      className={cx('', size, 'btn-' + type, { className })}
      style={style}
      onClick={handleClick}
    >
      {icon ? <Icon type={icon} style={iconStyle} className="btn-icon" /> : null}
      <span>{children}</span>
    </button>
  )
}

Button.defaultProps = defaultProps
export default Button
