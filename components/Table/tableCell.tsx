import * as React from 'react'
import cx from 'classnames'
import { TableCellProps } from 'types/table'
import Dropdown from '../Dropdown'
import Icon from '../Icon'

const { useCallback } = React

export default function TableCell<T>({
  tag: Tag = 'td',
  children,
  column,
  prefixCls = 'snake-table'
}: TableCellProps<T>) {
  const getPrefixCls = useCallback(() => {
    const align = column && column.align
    return cx(`${prefixCls}-column`, {
      [`${prefixCls}-column-${align}`]: align
    })
  }, [prefixCls, column && column.align])

  const cellPrefixCls = getPrefixCls()

  const renderSorter = () => {
    if (column && column.sorter) {
      return <div className={`${cellPrefixCls}-sorter`} title="排序" />
    }
    return null
  }

  const renderCell = () => {
    return <span className={`${cellPrefixCls}-title`}>{children}</span>
  }

  const renderFilter = () => {
    if (column && column.filters) {
      return (
        <Dropdown>
          <div className={`${cellPrefixCls}-filter`} title="筛选">
            <Icon type="filter" />
          </div>
        </Dropdown>
      )
    }
    return null
  }

  return (
    <Tag className={cellPrefixCls}>
      <div className={`${cellPrefixCls}-head`}>
        {renderCell()}
        {renderSorter()}
        {renderFilter()}
      </div>
    </Tag>
  )
}
