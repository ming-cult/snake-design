type Merge<M, T> = Pick<M, Exclude<keyof M, keyof T>> & T

export type ValueType = string | number | (string | number)[]
export type SizeTypes = 'small' | 'normal' | 'large'

export interface OptionProps {
  label: string | number
  value: string | number
  disabled?: boolean
}

export interface BasicProps {
  // prefixCls 前缀
  prefixCls?: string
  // options 数据源 默认[]
  options?: OptionProps[]
  // onChange
  onChange?: (value: ValueType) => void
  // size
  size?: SizeTypes
  // value 当前选中的值 必选
  value?: ValueType
  // disabled 禁用所有 默认为false
  disabled?: boolean
  // className
  className?: string
  // 样式
  style?: React.CSSProperties
  // 单多选模式
  mode?: 'single' | 'multiple'
}

export interface SelectProps
  extends Merge<
    BasicProps,
    HeaderProps & {
      panelRender?: (menu: React.ReactNode) => React.ReactNode
    }
  > {
  // 下拉列表的className
  panelClassName?: string
  // 下拉列表的style
  panelStyle?: React.CSSProperties
  // 是否支持清除
  autoClear?: boolean
}

export interface HeaderProps extends BasicProps {
  // 使用 labelsInHeaderRender 对下拉菜单进行自由扩展
  labelsInHeaderRender?: (
    labels: React.ReactNode[],
    selectedOptions: OptionProps[]
  ) => React.ReactNode
}

export interface PanelProps extends BasicProps {
  // 使用 panelRender 对下拉菜单进行自由扩展
  panelRender?: (menu: React.ReactNode) => React.ReactNode
  changeVisible: (visible: boolean) => void
}
