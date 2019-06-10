import * as React from 'react'
import cx from 'classnames'
import { HeaderProps, OptionProps } from '../interface'
import { getType } from '../../utils/tool'
import Icon from '../../Icon'

const Header: React.FC<HeaderProps> = props => {
  const { value, options, prefixCls, className, style, labelsInHeaderRender } = props

  const renderLabels = () => {
    const theValues = (getType(value) === 'array' ? value : [value]) as (string | number)[]
    let labels: (string | number)[] = []
    let selectedOptions: OptionProps[] = []
    for (let index = 0; index < theValues.length; index++) {
      const val = theValues[index]
      let selectedItem = options.find(option => option.value === val)
      if (selectedItem) {
        labels.push(selectedItem.label)
        selectedOptions.push(selectedItem)
      }
    }
    if (labelsInHeaderRender) {
      return labelsInHeaderRender(labels, selectedOptions)
    } else {
      return labels
    }
  }

  const renderArrow = () => {
    return (
      <span className={cx(`${prefixCls}-arrow`)}>
        <Icon type="down" />
      </span>
    )
  }

  return (
    <div className={cx(`${prefixCls}-header`, className)} style={style}>
      {renderLabels()}
      {renderArrow()}
    </div>
  )
}

export default Header
