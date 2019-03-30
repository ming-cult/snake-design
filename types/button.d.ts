
export interface ButtonProps {
  // 按钮样式相关
  className?: string; // 按钮类名
  size?: 'default' | 'small' | 'large'; // 按钮尺寸
  // primary?: boolean; // 背景色是否为主色
  // secondary?: boolean; // 背景色是否为次级色
  // accent?: boolean; // 背景色是否为强调色
  type?: 'primary' | 'secondary' | 'accent'; // 按钮类别
  style?: React.CSSProperties; // 样式
  inline?: boolean; // 是否是内联
  backgroundColor?: string; // 按钮背景色
  color?: string; // 按钮文本颜色
  text?: string; // 按钮文字

  // 功能相关
  disabled?: boolean; // 是否禁止按钮
  disableClassName?: string // 禁用按钮的样式
  onClick?: () => void; // 点击事件上报父组件

  // 内置图标相关
  textPosition?: 'before' | 'after' // 按钮文字位置，针对icon来说，可以在icon前面或者后面
  icon?: string; // 按钮图标
  iconClass?: string; // 图标类名
  iconStyle?: object; // 图标样式

  // 波纹反馈相关
  disableRipple?: boolean // 是否禁用波纹
  rippleColor?: string; // 波纹效果颜色
  rippleOpacity?: number; // 波纹效果透明度
}
