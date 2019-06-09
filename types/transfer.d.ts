import { OmitType } from 'components/utils/type'

export interface TransferProps {
  // 自定义类名
  className?: string
  // dataSource 数据源 左侧区域的数据源
  dataSource?: ItemProps[]
  // targetKeys 显示在右侧框数据的 key 集合
  targetKeys?: string[]
  // footer 底部自定义
  footer?: React.ReactNode
  // render  自定义渲染函数
  render?: (record: ItemProps, index: number) => React.ReactNode
  // selectedKeys 选中的 key
  selectedKeys?: string[]
  // showSearch 是否展示搜索框 默认为 false
  showSearch?: boolean
  // showSelectAll 是否展示全选框 默认为 true
  showSelectAll?: boolean
  // onChange 在发生转移的时候的回调
  onChange?: (targetKeys: string[], direction: Direction, moveKeys: string[]) => void
  // onSearch 点击搜索的回调或者不存在 `onInputChange` 的时候，输入变化的回调
  onSearch?: (value: string, direction: Direction) => void
  // searchOnChange 是否在 input change 的时候调用 默认为 true
  searchOnChange?: boolean
  // onSelectChange 选中项发生变化的回调函数
  onSelectChange?: (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void
  // listStyle 穿梭框的样式
  listStyle?: React.CSSProperties
  // 操作文案的集合 从上到下 默认是['>', '<']
  operations?: string[]
  // title 标题集合 默认是从左到右 默认 ['', '']
  titles?: string[]
  // disabled 是否不可用
  disabled?: boolean
  children?: React.ReactNode | ChildrenFn
}

export interface TransferItemProps
  extends OmitType<TransferProps, 'operations' | 'titles' | 'onChange' | 'onSelectChange'> {
  // 标题
  title?: string
  // direction
  direction?: Direction
  // prefixCls
  prefixCls?: string
  // onChange
  onChange?: (selectedKeys: string[], direction: Direction) => void
}

export type Direction = 'left' | 'right'

export interface ItemProps {
  // 键值
  key: string
  // 标题
  title?: string
  // disabled 是否禁用
  disabled?: boolean
}

export type ChildrenFn = (props: RenderProps) => React.ReactNode

export interface RenderProps {
  direction?: Direction
  disabled?: boolean
  // 勾选单个
  onItemSelect?: (key: string, selected: boolean) => void
  // 勾选一组
  onItemSelectAll?: (selectedKeys: string[], selected: boolean) => void
  // selectedKeys
  selectedKeys?: string[]
}
