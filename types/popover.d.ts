import { Placement, Trigger } from './portal'

export interface PopoverProps {
  // 内容区
  content?: React.ReactNode
  // popover 的方向
  placement?: Placement
  // 是否可见
  visible?: boolean
  // 显示隐藏的回调
  onVisibleChange?: (visible: boolean) => void
  // getPopupContainer 是否渲染到父亲节点 默认为 document.body
  getPopupContainer?: () => HTMLElement
  // contentClass 内容区的 class
  contentClass?: string
  // contentStyle 内容区的样式
  contentStyle?: React.CSSProperties
  // trigger 触发的行为
  trigger?: Trigger
  // autoAdjustOverflow 是否自动调整位置 默认为 `true`
  autoAdjustOverflow?: boolean
  // title 标题
  title?: React.ReactNode
  children?: React.ReactNode
  // wrapperComponent 默认为 span
  wrapperComponent?: any
  // wrapperStyle 包裹层的样式
  wrapperStyle?: React.CSSProperties
}
