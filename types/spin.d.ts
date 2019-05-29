export type SizeType = 'small' | 'normal'

export interface SpinProps {
  // 自定义的指示符
  indicator?: React.ReactNode
  // 尺寸
  size?: SizeType
  // tip 当有children的时候自定义文案
  tip?: React.ReactNode
  // children
  children?: React.ReactNode
}
