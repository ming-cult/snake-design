import * as React from 'react'
import cx from 'classnames'
import { CheckboxProps } from '../../types/checkbox'
import { noop, omit } from '../utils/tool'

const defaultProps = {
  checked: false,
  onChange: noop,
  autoFocus: false,
  disabled: false,
  indeterminate: false,
  onBlur: noop,
  onFocus: noop,
  prefixCls: 'snake-checkbox-item'
}

function getClassName({ disabled, indeterminate, checked, prefixCls, className }: CheckboxProps) {
  return cx(
    prefixCls,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-indeterminate`]: indeterminate
    },
    className
  )
}

function handleChange(
  e: React.ChangeEvent<HTMLInputElement>,
  { onChange, disabled }: CheckboxProps
) {
  const checked = e.target.checked
  if (disabled) return
  onChange(checked)
}

function getOtherProps(props: CheckboxProps) {
  const omitStr = ['onChange', 'prefixCls', 'classNames', 'children', 'indeterminate']
  let omitProps = omit(props, omitStr)
  return omitProps
}

function Checkbox(checkboxProps: CheckboxProps, ref: any) {
  const props = { ...defaultProps, ...checkboxProps }
  const { prefixCls, children } = props
  const inputRef = React.useRef<HTMLInputElement>()
  const otherProps = getOtherProps(props)

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    },
    blur: () => {
      inputRef.current.blur()
    }
  }))

  return (
    <label className={getClassName(props)}>
      <span className={`${prefixCls}-select`}>
        <input
          type="checkbox"
          onChange={e => handleChange(e, props)}
          {...otherProps}
          ref={inputRef}
        />
        <span className={`${prefixCls}-select-inner`} />
      </span>
      <span className={`${prefixCls}-label`}>{children}</span>
    </label>
  )
}

export default React.forwardRef(Checkbox)
