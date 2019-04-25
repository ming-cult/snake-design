
export interface AffixProps {
  /** 组件className前缀 **/
  prefixCls?: string
  /* 样式相关 */
  // 按钮类名
  className?: string
  // 样式
  style?: React.CSSProperties
  // 距离窗口顶部达到指定偏移量后触发
  offsetTop?: number
  // 距离窗口底部达到指定偏移量后触发
  offsetBottom?: number
}
