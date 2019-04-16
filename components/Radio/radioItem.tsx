import * as React from 'react'
import cx from 'classnames'
import { RadioItemProps } from 'types/radio'
import { noop } from '../utils/tool'

const { useCallback, useImperativeHandle, useRef } = React

const defaultProps = {
  autoFocus: false,
  checked: false,
  disabled: false,
  onChange: noop,
  prefixCls: 'snake-radio-item'
}

function RadioItem(itemProps: RadioItemProps, ref: React.RefObject<{}>) {
  const props = { ...defaultProps, ...itemProps }
  const { checked, disabled, prefixCls, children, autoFocus, className, onChange } = props
  const inputRef = useRef<HTMLInputElement>()

  const getClassName = useCallback(() => {
    return cx(
      prefixCls,
      {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-checked`]: checked
      },
      className
    )
  }, [checked, disabled, className, prefixCls])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked
      onChange(checked)
    },
    [checked]
  )

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    },
    blur: () => {
      inputRef.current.blur()
    }
  }))

  return (
    <label className={getClassName()}>
      <span className={`${prefixCls}-select`}>
        <input
          type="radio"
          autoFocus={autoFocus}
          checked={checked}
          disabled={disabled}
          ref={inputRef}
          className={`${prefixCls}-input`}
          onChange={handleChange}
        />
        <span className={`${prefixCls}-select-inner`} />
      </span>
      <span className={`${prefixCls}-label`}>{children}</span>
    </label>
  )
}

export default React.forwardRef(RadioItem)
