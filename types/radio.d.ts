export interface RadioItemProps {
  // 自动获取焦点 默认false
  autoFocus?: boolean
  // checked 指定当前是否选中	默认false
  checked?: boolean
  // disabled 不可用状态 默认为false
  disabled?: boolean
  // onChange
  onChange?: (checked: boolean) => void
  // className
  className?: string
  // prefixCls 前缀
  prefixCls?: string
  children?: React.ReactNode
}

export interface OptionTypes {
  label: React.ReactNode
  value: string | number
  disabled?: boolean
}

export type SizeTypes = 'small' | 'normal' | 'large'

export type ShapeTypes = 'default' | 'button'

export interface RadioProps {
  // options 数据源 默认[]
  options?: OptionTypes[]
  // onChange
  onChange?: (value: string | number) => void
  // size
  size?: SizeTypes
  // value 当前选中的值 必选
  value: string | number
  //disabled 禁用所有 默认为false
  disabled?: boolean
  // className
  className?: string
  // 形状 默认为default
  shape?: ShapeTypes
  // buttonStyle 填充或者描边
  buttonStyle?: 'outline' | 'solid'
}