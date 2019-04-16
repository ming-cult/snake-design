import * as React from 'react'
import cx from 'classnames'
import * as warning from 'warning'
import { RadioProps, RadioItemProps } from 'types/radio'
import { noop } from '../utils/tool'
import RadioItem from './radioItem'

const { useCallback } = React

const prefixCls = 'snake-radio'

const Radio: React.SFC<RadioProps> & {
  item: React.ForwardRefExoticComponent<RadioItemProps & React.RefAttributes<{}>>
} = ({
  options = [],
  onChange = noop,
  size = 'normal',
  disabled = false,
  shape = 'default',
  buttonStyle = 'outline',
  ...rest
}) => {
  const { className, value } = rest

  const getClassName = useCallback(() => {
    return cx(
      prefixCls,
      {
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-${buttonStyle}`]: buttonStyle
      },
      className
    )
  }, [size, disabled, shape, buttonStyle, className])

  const handleChange = useCallback((value: string | number) => {
    onChange(value)
  }, [])

  warning(!(value === undefined), 'Radio', 'should have `value` prop')

  return (
    <div className={getClassName()}>
      {options.map(p => {
        const checked = p.value === value
        return (
          <RadioItem
            key={p.value}
            checked={checked}
            disabled={disabled || p.disabled}
            onChange={() => handleChange(p.value)}
          >
            {p.label}
          </RadioItem>
        )
      })}
    </div>
  )
}

Radio.item = RadioItem

export default Radio
