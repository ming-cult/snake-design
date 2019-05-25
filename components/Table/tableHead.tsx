import * as React from 'react'
import TableCell from './tableCell'
import { TableHeadProps } from 'types/table'

export default function TableHead<T>({
  columns = [],
  prefixCls = 'snake-table'
}: TableHeadProps<T>) {
  return (
    <thead className={`${prefixCls}-thead`}>
      <tr>
        {columns.map(column => {
          return (
            <TableCell tag="th" key={column.key} column={column}>
              {column.title}
            </TableCell>
          )
        })}
      </tr>
    </thead>
  )
}
