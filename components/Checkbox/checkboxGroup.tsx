import * as React from 'react'
import { CheckGroupProps, CheckboxProps } from './../../types/checkbox'
import Checkbox from './checkbox'
import { noop } from '../utils/tool'

const prefixCls = 'snake-checkbox'

const CheckboxGroup: React.SFC<CheckGroupProps> & {
  checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<{}>>
} = ({ onChange = noop, disabled = false, options = [], value = [] }) => {
  const handleChange = (checked: boolean, checkedValue: string) => {
    const cloneValue = value.slice()
    if (checked) {
      cloneValue.push(checkedValue)
    } else {
      cloneValue.splice(cloneValue.indexOf(checkedValue), 1)
    }
    onChange(cloneValue)
  }

  return (
    <div className={`${prefixCls}-group`}>
      {options.map(p => {
        const checked = value.includes(p.value)
        return (
          <Checkbox
            key={p.value}
            checked={checked}
            disabled={disabled || p.disabled}
            autoFocus={p.autoFocus}
            onChange={checked => handleChange(checked, p.value)}
          >
            {p.label}
          </Checkbox>
        )
      })}
    </div>
  )
}

CheckboxGroup.checkbox = Checkbox

export default CheckboxGroup
