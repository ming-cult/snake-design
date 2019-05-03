/** 使用该组件 默认给孩子节点加一个标签， 标签的样式可以自定义, 并不是所有的内部组件都会暴露出 ref  */
export interface DropDown {
  // 触发 dropdown 的方式
  trigger?: Trigger
  // placement 菜单的弹出位置 默认 bottom
  placement?: Placement
  // onVisibleChange 显隐状态变化的回调
  onVisibleChange?: (visible: boolean) => void
  // className
  className?: string
  // disabled 是否禁用
  disabled?: boolean
  // style dropdown 样式
  style?: React.CSSProperties
  // getPopupContainer 渲染的区域 默认渲染到 body
  getPopupContainer?: () => HTMLElement
  // wrapperComponent 默认为 span
  wrapperComponent?: any
  // wrapperStyle 包裹层的样式
  wrapperStyle?: React.CSSProperties
  // content dropdown 的内容区
  content?: React.ReactNode
  // prefixCls
  prefixCls?: string
  // animationName 动画的类名
  animationName?: string
  // hasTriangle 是否有三角形 默认为 false
  hasTriangle?: boolean
  // timeout 动画时间默认 3000ms
  timeout?: number
}

export type Trigger = 'hover' | 'click'
// dropdown 使用 top, topLeft, topRight, bottomLeft, bottomRight, bottom
// popover and tooltip 使用全部属性
export type Placement =
  | 'top'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
