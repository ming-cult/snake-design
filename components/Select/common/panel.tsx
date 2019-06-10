import * as React from 'react'
import cx from 'classnames'
import Option from './option'
import { PanelProps, OptionProps } from '../interface'

const Panel: React.FC<PanelProps> = props => {
  const { value, onChange, options, prefixCls, className, style, panelRender, mode } = props
  const isMultiple = mode === 'multiple'

  const handleOptionClick = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    option: OptionProps,
    willBeSelected: boolean
  ) => {
    let { changeVisible } = props
    let optionValue = option.value
    if (isMultiple) {
      let newVal = [...(value as (string | number)[])]
      if (willBeSelected) {
        newVal.push(optionValue)
      } else {
        newVal.splice(newVal.indexOf(optionValue), 1)
      }
      onChange && onChange(newVal)
    } else {
      onChange && onChange(optionValue)
      changeVisible(false)
    }
  }

  const renderOptions = () => {
    const theValues = (isMultiple ? value : [value]) as (string | number)[]

    return options.map(option => {
      const { value } = option
      const selected = option && theValues.indexOf(value) >= 0
      return (
        <Option
          prefixCls={prefixCls}
          key={value}
          option={option}
          selected={selected}
          onClick={handleOptionClick}
        />
      )
    })
  }

  const items = renderOptions()
  const panelContent = panelRender ? panelRender(items) : items

  return (
    <div className={cx(`${prefixCls}-panel`, className)} style={style}>
      {panelContent}
    </div>
  )
}

export default Panel
