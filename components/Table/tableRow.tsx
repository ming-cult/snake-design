import * as React from 'react'
import cx from 'classnames'
import { TableRowProps, Column } from 'types/table'
import TableCell from './tableCell'
import Checkbox from '../Checkbox'
import Radio from '../Radio'
import { checkboxKey, radioKey } from './util'

const { useCallback } = React
const { item: CheckboxItem } = Checkbox
const { item: RadioItem } = Radio

export default function TableRow<T>({
  data,
  columns = [],
  prefixCls = 'snake-table',
  className
}: TableRowProps<T>) {
  const getChildren = (column: Column<T>, index: number) => {
    const render = column.render
    if (render) {
      return render(data, data[column.key], index)
    }
    return data[column.key]
  }

  const getClassStr = useCallback(() => {
    return cx(`${prefixCls}-row`, className)
  }, [prefixCls, className])

  return (
    <tr className={getClassStr()}>
      {columns.map((column, index) => {
        const { key } = column
        const children = getChildren(column, index)
        if (key === (checkboxKey as any) || key === (radioKey as any)) {
          return (
            <TableCell key={`${key}-tr-td-${index}`}>
              {key === (radioKey as any) ? <RadioItem /> : <CheckboxItem />}
            </TableCell>
          )
        }
        return <TableCell key={`${key}-tr-td-${index}`}>{children}</TableCell>
      })}
    </tr>
  )
}
