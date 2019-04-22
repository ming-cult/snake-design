export interface OverlayProps {
  /** visible 是否可见 */
  visible?: boolean
  /** 是否有遮罩层 默认为true */
  hasMask?: boolean
  /** onClose 关闭弹层的回调 */
  onClose?: (e: React.MouseEvent<HTMLElement>) => void
  /** 是否点击遮罩层 关闭 默认为 true */
  maskClosable?: boolean
  /** destroy 隐藏时， 是否销毁 默认为 true */
  destroy?: boolean
  /** children 弹层的内容 */
  children?: React.ReactNode
  /** wrapperClassName */
  wrapperClassName?: string
  /** wrapperStyle */
  wrapperStyle?: React.CSSProperties
  /** maskAnimation 弹层的动画 默认为 fade */
  maskAnimation?: string
  /** contentAnimation 内容区的动画 默认为 zoom */
  contentAnimation?: string
  /** zIndex */
  zIndex?: number
  /** prefixCls */
  prefixCls?: string
  /** maskTimeout 动画时间 自定义动画的时候需要与自定义动画的时间保持一致 默认 300ms */
  maskTimeout?: number | object
  /** contentTimeout 内容区域动画时间 */
  contentTimeout?: number | object
  /** header 自定义 header 区域 */
  header?: React.ReactNode
  /** footer 自定义 footer 区域 */
  footer?: React.ReactNode
  /** closable 是否显示右上角的叉号 */
  closable?: boolean
}
