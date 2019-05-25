import * as React from 'react'
import { TableProps } from 'types/table'
import TableHead from './tableHead'
import TableCol from './colGroup'
import TableBody from './tableBody'

const prefixCls = 'snake-table'

export default function Table<T>({
  dataSource = [],
  columns = [],
  rowKey,
  rowClassName
}: TableProps<T>) {
  const getTableColProps = () => {
    return {
      prefixCls,
      columns
    }
  }

  const getTableHeadProps = () => {
    return {
      prefixCls,
      columns
    }
  }

  const getTableBodyProps = () => {
    return {
      prefixCls,
      columns,
      dataSource,
      rowKey,
      rowClassName
    }
  }

  return (
    <table className={prefixCls}>
      <TableCol {...getTableColProps()} />
      <TableHead {...getTableHeadProps()} />
      <TableBody {...getTableBodyProps()} />
    </table>
  )
}
