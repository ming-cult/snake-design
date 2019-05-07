export type Trigger = 'hover' | 'click'
// dropdown 使用 top, topLeft, topRight, bottomLeft, bottomRight, bottom

// popover and tooltip 使用全部属性
export type Placement = 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

export interface DropdownProps {
  /** 是否禁用 */
  disabled?: boolean
  // visible 是否可见 默认为 false
  visible?: boolean
  // content dropdown 的内容区
  content?: React.ReactNode
  // wrapperComponent 默认为 span
  wrapperComponent?: any
  // wrapperStyle 包裹层的样式
  wrapperStyle?: React.CSSProperties
  // 触发 dropdown 的方式
  trigger?: Trigger
  // placement 菜单的弹出位置 默认 bottom
  placement?: Placement
  // onVisibleChange 显隐状态变化的回调
  onVisibleChange?: (visible: boolean) => void
  // destroy 是否消失的时候销毁 默认销毁
  destroy?: boolean
  // className 弹出层的 class
  className?: string
  // style dropdown 样式
  style?: React.CSSProperties
}
