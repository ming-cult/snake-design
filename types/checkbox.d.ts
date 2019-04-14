/**
 * checkbox interface
 */
export interface CheckboxItemProps {
  // 是否被选中 默认为false
  checked?: boolean
  // onChange 变化时候发生的回调
  onChange?: (checked: boolean) => void
  // autofocus 默认聚焦状态
  autoFocus?: boolean
  // disabled 默认为false
  disabled?: boolean
  // className
  className?: string
  // 半选状态 默认为false
  indeterminate?: boolean
  // onBlur
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  // onFocus
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void
  // prefixCls
  prefixCls?: string
  children?: React.ReactNode
}

interface OptionValue {
  // 文本信息
  label: React.ReactNode
  // 选中的值
  value: string | number
  // 不可用
  disabled?: boolean
  // autoFocus
  autoFocus?: boolean
}

/**
 * checkboxGroup
 */
export interface CheckboxProps {
  // onChange 默认noop
  onChange?: (checkedValue: Array<string | number>) => void
  // disabled 失效 全部不可用 默认false
  disabled?: boolean
  // 配置的选项 默认为空数组
  options?: OptionValue[]
  // value 指定选中 的项
  value?: Array<string | number>
}