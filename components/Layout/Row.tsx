import * as React from 'react'
import { getType } from 'components/utils/tool'
import { RowProps } from 'types/layout.d'
import './index.scss'

export const rowDefaultProps: Partial<RowProps> = {
  prefixCls: 'snake-row',
  total: 36,
  justify: 'start',
  direction: 'horizontal',
  align: 'stretch',
  gutter: 0
}

const Row = (userProps: RowProps, ref: any) => {
  const {
    children,
    gutter,
    padding,
    margin,
    justify,
    align,
    direction,
    colProps,
    prefixCls,
    className,
    style
  } = {
    ...rowDefaultProps,
    ...userProps
  }
  const cls =
    `${prefixCls} ${prefixCls}-${direction} ${prefixCls}-${justify} ${prefixCls}-${align} ${prefixCls}-gutter-${gutter}` +
    (className ? ` ${className}` : '')
  const child = (getType(children) === 'array' ? children : [children]) as React.ReactElement[]
  const childNodes = child.map((item: React.ReactElement, index: number) => {
    let marginStyle: any = {}
    if (gutter && !(item.props.marginLeft || item.props.padding)) {
      marginStyle.marginLeft = gutter / 2
    }
    if (gutter && !(item.props.marginRight || item.props.padding)) {
      marginStyle.marginRight = gutter / 2
    }
    return React.cloneElement(item, {
      key: index,
      ...colProps,
      className: [(colProps && colProps.className) || '', item.props.className || ''].join(' '),
      style: {
        ...((colProps && colProps.style) || {}),
        ...(item.props.style || {}),
        ...(gutter ? marginStyle : {})
      }
    })
  })
  return (
    <div
      ref={ref}
      className={cls}
      style={{
        margin,
        padding,
        ...(style || {})
      }}
    >
      {childNodes}
    </div>
  )
}

export default React.forwardRef(Row)
