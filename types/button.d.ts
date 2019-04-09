
export interface ButtonProps {
  /** 组件className前缀 **/
  prefixCls?: string

  /* 样式相关 */
  // 按钮类名
  className?: string
  // 样式
  style?: React.CSSProperties
  // 按钮尺寸
  size?: 'default' | 'small' | 'large'

  /* 功能相关 */
  // 是否禁止按钮
  disabled?: boolean
  // 是否正在加载
  loading?: boolean
  // 点击的回调
  onClick?: (e: React.MouseEvent) => void
  // 按钮种类
  type?: 'primary' | 'gray' | 'warn'
  // 是不是文字按钮
  text?: boolean

  /* icon相关 */
  // icon类名
  icon?: string
  // icon样式
  iconStyle?: React.CSSProperties

  children?: React.ReactNode
}
