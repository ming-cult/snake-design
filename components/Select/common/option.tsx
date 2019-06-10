import * as React from 'react'
import cx from 'classnames'
import { OptionProps } from '../interface'

const Option: React.FC<{
  prefixCls?: string
  option: OptionProps
  selected: boolean
  onClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    option: OptionProps,
    willBeSelected: boolean
  ) => void
}> = props => {
  const { prefixCls, option, selected, onClick } = props
  const { label, disabled } = option

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    return onClick(e, option, !selected)
  }
  return (
    <div
      className={cx(`${prefixCls}-option`, {
        [`${prefixCls}-option-disabled`]: disabled,
        [`${prefixCls}-option-selected`]: selected
      })}
      onClick={handleClick}
    >
      {label}
    </div>
  )
}

export default Option
