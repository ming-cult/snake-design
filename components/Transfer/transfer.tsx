import * as React from 'react'
import cx from 'classnames'
import TransferItem from './TransferItem'
import { TransferProps, Direction } from 'types/transfer'
import { partition, noop } from '../utils/tool'
import Button from '../Button'

import './index.scss'

const prefixCls = 'snake-transfer'

function Transfer({
  titles = ['', ''],
  operations = ['>', '<'],
  className,
  dataSource = [],
  targetKeys = [],
  footer,
  render,
  selectedKeys = [],
  showSearch = false,
  showSelectAll = true,
  onChange = noop,
  onSearch = noop,
  searchOnChange = true,
  onSelectChange = noop,
  children,
  listStyle,
  disabled = false
}: TransferProps) {
  const getCommonProps = () => {
    return {
      footer: footer,
      render: render,
      showSearch: showSearch,
      showSelectAll: showSelectAll,
      searchOnChange: searchOnChange,
      onSearch: onSearch,
      children: children,
      listStyle: listStyle,
      disabled: disabled
    }
  }

  const getItemDataSource = () => {
    return partition(dataSource, d => targetKeys.includes(d.key))
  }

  const getItemSelectedKeys = () => {
    return partition(selectedKeys, d => targetKeys.includes(d))
  }

  const [rightDataSource, leftDataSource] = getItemDataSource()
  const [rightSelectedKeys, leftSelectedKeys] = getItemSelectedKeys()

  const handleSelectChange = (selectedKeys, direction) => {
    if (direction === 'left') {
      onSelectChange(selectedKeys, rightSelectedKeys)
    } else {
      onSelectChange(leftSelectedKeys, selectedKeys)
    }
  }

  const handleChange = (direction: string) => {
    if (disabled) return
    let cloneTargetKeys = targetKeys.slice()
    let moveKeys = []
    cloneTargetKeys =
      direction === 'right'
        ? cloneTargetKeys.concat(leftSelectedKeys)
        : cloneTargetKeys.filter(d => !rightSelectedKeys.includes(d))
    moveKeys = direction === 'right' ? rightSelectedKeys.slice() : leftSelectedKeys.slice()
    onChange(cloneTargetKeys, direction as Direction, moveKeys)
    // 变化后重置 keys
    direction === 'left'
      ? onSelectChange(leftSelectedKeys, [])
      : onSelectChange([], rightSelectedKeys)
  }

  return (
    <div
      className={cx(
        prefixCls,
        {
          [`${prefixCls}-transfer-disabled`]: disabled
        },
        className
      )}
    >
      <TransferItem
        title={titles[0]}
        dataSource={leftDataSource}
        selectedKeys={leftSelectedKeys}
        direction="left"
        onChange={handleSelectChange}
        {...getCommonProps()}
      />
      <div className={`${prefixCls}-operation`}>
        <div>
          <Button
            onClick={() => handleChange('right')}
            disabled={disabled || !leftSelectedKeys.length}
          >
            {operations[0]}
          </Button>
        </div>
        <div style={{ marginTop: 20 }}>
          <Button
            onClick={() => handleChange('left')}
            disabled={disabled || !rightSelectedKeys.length}
          >
            {operations[1]}
          </Button>
        </div>
      </div>
      <TransferItem
        title={titles[1]}
        dataSource={rightDataSource}
        selectedKeys={rightSelectedKeys}
        direction="right"
        onChange={handleSelectChange}
        {...getCommonProps()}
      />
    </div>
  )
}

export default Transfer
