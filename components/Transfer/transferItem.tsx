import * as React from 'react'
import cx from 'classnames'
import { TransferItemProps, ChildrenFn } from 'types/transfer'
import Checkbox from '../Checkbox'
import { isFunction } from '../utils/tool'

const CheckboxItem = Checkbox.item

// const { useState } = React
const noop = () => {}

function TransferItem({
  dataSource = [],
  showSelectAll = true,
  title = '',
  showSearch = false,
  footer,
  prefixCls = 'snake-transfer-item',
  // item 中的 selectedKeys 为对应的区域的 selectedKeys, 左边为 sourceSelectedKeys 右边为 targetSelectedKeys
  selectedKeys = [],
  direction = 'left',
  onChange = noop,
  // onSearch = noop,
  // searchOnChange = true,
  disabled = false,
  children,
  listStyle,
  render
}: TransferItemProps) {
  // const [inputValue, setInputValue] = useState('')

  const getAvailableData = () => {
    const availableData = dataSource.filter(d => !d.disabled)
    return availableData
  }

  const isIndeterminate = () => {
    const availableData = getAvailableData()
    const isIndeterminate =
      availableData.some(d => selectedKeys.includes(d.key)) &&
      selectedKeys.length !== availableData.length
    return isIndeterminate
  }

  const handleChange = (checked: boolean, key: string) => {
    const cloneSelectedKeys = selectedKeys.slice()
    if (checked) {
      cloneSelectedKeys.push(key)
    } else {
      cloneSelectedKeys.splice(selectedKeys.indexOf(key), 1)
    }
    onChange(cloneSelectedKeys, direction)
  }

  const handleSelectAll = (checked: boolean) => {
    let cloneSelectedKeys: string[] = []
    const initialArray: string[] = []
    const availableData = getAvailableData()
    if (checked) {
      cloneSelectedKeys = availableData.reduce((pre, cur) => {
        pre.push(cur.key)
        return pre
      }, initialArray)
    } else {
      cloneSelectedKeys = []
    }
    onChange(cloneSelectedKeys, direction)
  }

  // const handleInputChange = (value: string) => {
  //   setInputValue(value)
  //   if (searchOnChange) {
  //     onSearch(inputValue, direction)
  //   }
  // }

  return (
    <div
      className={cx(prefixCls, {
        [`${prefixCls}-disabled`]: disabled
      })}
      style={listStyle}
    >
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-header-total`}>
          {showSelectAll ? (
            <CheckboxItem
              checked={
                selectedKeys.length === getAvailableData().length && selectedKeys.length !== 0
              }
              indeterminate={isIndeterminate()}
              onChange={handleSelectAll}
              disabled={disabled}
            />
          ) : null}
          <span className={`${prefixCls}-header-number`}>
            {selectedKeys.length ? `${selectedKeys.length}/` : null}
            {dataSource.length}项
          </span>
        </div>
        <div className={`${prefixCls}-header-title`}>{title}</div>
      </div>
      <div className={`${prefixCls}-content`}>
        {showSearch ? (
          <div className={`${prefixCls}-content-search`}>
            {/* <Input value={inputValue} onChange={handleInputChange} /> */}
          </div>
        ) : null}
        <div className={`${prefixCls}-content-body`}>
          {isFunction(children) ? (
            (children as ChildrenFn)({})
          ) : (
            <ul>
              {dataSource.map((d, index) => {
                return (
                  <li key={d.key} className={`${prefixCls}-content-list-item`}>
                    <CheckboxItem
                      checked={selectedKeys.includes(d.key)}
                      onChange={checked => handleChange(checked, d.key)}
                      disabled={d.disabled}
                    >
                      {render ? render(d, index) : d.title}
                    </CheckboxItem>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      {footer ? <div className={`${prefixCls}-footer`}>{footer}</div> : null}
    </div>
  )
}

export default TransferItem
