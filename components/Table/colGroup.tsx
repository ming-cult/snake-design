import * as React from 'react'
import { ColGroupProps } from 'types/table.d'

export default function ColGroup<T>({ columns }: ColGroupProps<T>) {
  return (
    <colgroup>
      {columns.map((column, index) => {
        return <col style={{ width: column.width }} key={`col-${index}`} />
      })}
    </colgroup>
  )
}
