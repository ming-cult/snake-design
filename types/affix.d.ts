import { Children, ReactElement } from "react";

export interface AffixProps {
  /** 组件className前缀 **/
  prefixCls?: string
  // 距离窗口顶部达到指定偏移量后触发
  offsetTop?: number
  // 距离窗口底部达到指定偏移量后触发
  offsetBottom?: number
  // 子元素
  children?: ReactElement
  // 容器
  target?: () => HTMLElement
  // 固定状态改变时触发的回调函数
  onChange?: (affixed: boolean) => void
  /* 样式相关 */
  className?: string
  // 样式
  style?: React.CSSProperties
}
