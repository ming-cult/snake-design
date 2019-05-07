/** 使用该组件 默认给孩子节点加一个标签， 标签的样式可以自定义, 并不是所有的内部组件都会暴露出 ref  */
export interface Portal {
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
  // offset 偏移距离 默认为4
  offset?: number
  // mode 类型 dropdown 类型的时候有默认最小值
  mode?: Mode
  // destroy 是否消失的时候销毁 默认销毁
  destroy?: boolean
  // visible 是否可见
  visible?: boolean
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

export type Mode = 'dropdown' | 'tooltip' | 'popover'
