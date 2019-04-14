import * as React from 'react'
import { CheckboxItemProps, CheckboxProps } from '../../types/checkbox'
import CheckboxItem from './checkboxItem'
import { noop } from '../utils/tool'

const prefixCls = 'snake-checkbox'

const Checkbox: React.SFC<CheckboxProps> & {
  item: React.ForwardRefExoticComponent<CheckboxItemProps & React.RefAttributes<{}>>
} = ({ onChange = noop, disabled = false, options = [], value = [] }) => {
  const handleChange = (checked: boolean, checkedValue: string | number) => {
    const cloneValue = value.slice()
    if (checked) {
      cloneValue.push(checkedValue)
    } else {
      cloneValue.splice(cloneValue.indexOf(checkedValue), 1)
    }
    onChange(cloneValue)
  }

  return (
    <div className={`${prefixCls}`}>
      {options.map(p => {
        const checked = value.includes(p.value)
        return (
          <CheckboxItem
            key={p.value}
            checked={checked}
            disabled={disabled || p.disabled}
            autoFocus={p.autoFocus}
            onChange={checked => handleChange(checked, p.value)}
          >
            {p.label}
          </CheckboxItem>
        )
      })}
    </div>
  )
}

Checkbox.item = CheckboxItem

export default Checkbox
