import * as React from 'react'
import { ColProps } from 'types/layout.d'
import './index.scss'

export const colDefaultProps: Partial<ColProps> = {
  prefixCls: 'snake-col'
}

const Col = (userProps: ColProps, ref: any) => {
  const { children, size, offset, margin, padding, prefixCls, className, style, ...rest } = {
    ...colDefaultProps,
    ...userProps
  }
  const cls =
    prefixCls + (size ? ` ${prefixCls}-size-${size}` : '') + (className ? ` ${className}` : '')
  return (
    <div
      ref={ref}
      {...rest}
      style={{
        margin,
        padding,
        ...(style || {})
      }}
      className={cls}
    >
      {children}
    </div>
  )
}

export default React.forwardRef(Col)
