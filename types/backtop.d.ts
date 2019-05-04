export interface BacktopProps {
  /* 滚动高度达到此参数值才出现 BackTop */
  visibilityHeight?: number
  /* 传入子节点 */
  children?: React.ReactNode
  /* 样式相关 */
  className?: string
  /* 样式 */
  style?: React.CSSProperties
}
