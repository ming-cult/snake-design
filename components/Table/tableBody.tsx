import * as React from 'react'
import cx from 'classnames'
import { TableBodyProps } from 'types/table'
import TableRow from './tableRow'

const { useCallback } = React

export default function TableBody<T>({
  dataSource = [],
  rowKey,
  prefixCls = 'snake-table',
  columns,
  className,
  rowClassName
}: TableBodyProps<T>) {
  const getKey = (data, index) => {
    if (rowKey) {
      return rowKey(data)
    }
    return `snake-table-row-${index}`
  }

  const getClassStr = useCallback(() => {
    return cx(`${prefixCls}-tableBody`, className)
  }, [prefixCls, className])

  const getRowClassName = (data: T, index: number) => {
    if (rowClassName) {
      return rowClassName(data, index)
    }
  }

  return (
    <tbody className={getClassStr()}>
      {dataSource.map((data, index) => {
        const key = getKey(data, index)
        return (
          <TableRow
            columns={columns}
            data={data}
            key={key}
            className={getRowClassName(data, index)}
          />
        )
      })}
    </tbody>
  )
}
