import { tuple } from 'components/utils/tool'

export const directions = tuple('horizontal', 'vertical')
export const justifies = tuple('start', 'center', 'end', 'space-around', 'space-between')
export const aligns = tuple('stretch', 'top', 'middle', 'bottom')

export type DirectionType = (typeof directions)[number]
export type JustifyType = (typeof justifies)[number]
export type AlignType = (typeof aligns)[number]

export interface RowProps {
  /** 组件className前缀 **/
  prefixCls?: string
  /** 栅格总数，一般为12/24/36 */
  total?: number
  /** 子节点 */
  children: React.ReactElement | React.ReactElement[]
  /** 排列方向，row表示横着摆放，column表示纵向摆放 */
  direction?: DirectionType
  /** 横向对齐方式 */
  justify?: JustifyType
  /** 纵向对齐方式 */
  align?: AlignType
  /** 每个子元素之间的距离，会给Col加上`gutter/2`的左右padding */
  gutter?: number
  /** Row的内边距，number形式的单位是px */
  padding?: number | string
  /** Row的外边距，number形式的单位是px */
  margin?: number | string
  /** 追加行内样式 */
  style?: React.CSSProperties
  /** 追加ClassName */
  className?: string
  /** 给col统一添加props，除了style和className是追加方式，其他都是被Col自己的props覆盖 */
  colProps?: Partial<ColProps>
}

export interface ColProps {
  /** 组件className前缀 **/
  prefixCls?: string
  /** 子节点 */
  children: React.ReactNode
  /** 占多少格 */
  size?: number
  /** 占多少格 */
  offset?: number
  /** Col的内边距，number形式的单位是px */
  padding?: number | string
  /** Col的外边距，number形式的单位是px */
  margin?: number | string
  /** 追加行内样式 */
  style?: React.CSSProperties
  /** 追加ClassName */
  className?: string
}
