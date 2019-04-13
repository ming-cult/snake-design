export interface TableCell {

}

export interface TableBody {

}

export interface TableHead {

}

export interface TableRow {

}

export interface TablePagination {

}

export interface Table {
  // 数据源
  dataSource?: Data[]
  // column 渲染列
  columns: Column[]
  // expandedRowKeys 用来控制展开的行, 不需要default
  expandedRowKeys?: number[]
  // expandedRowRender 额外的展开行, 渲染复杂的数据结构
  expandedRowRender?: (record: Data, index: number, expanded?: boolean) => React.ReactNode
  // expandRowByClick 是否通过点击行来展开子行 默认为false
  expandRowByClick?: boolean
  // expandRowByHover 是否通过鼠标的移入移除来展开
  expandRowByHover?: boolean
  // indentSize 树形结构时，每行展开缩进的宽度
  indentSize?: number
  // loading  页面是否在加载中 默认为false
  loading?: boolean
  // pagination 分页器，为false时候不展示分页 默认为false
  pagination?: boolean
  // rowClassName 表格行的类名
  rowClassName?: (record: Data, index: number) => string
  // rowKey 行的key，最好传递，防止某些隐藏的问题，数据错位之类的
  rowKey?: (record: Data) => string
  // rowSelection 配合带有复选框操作的table使用
  rowSelection?: RowSelection
  // scroll 设置横向或纵向滚动，也可用于指定滚动区域的宽和高
  scroll?: { x?: number, y?: number }
  // showHeader 是否展示表头 默认为true
  showHeader?: boolean
  // onChange 分页、排序、筛选变化时触发
  onChange?: (pagination: number, filters: Array<string | number>, sorter: SortType) => void
  // onExpand 点击展示时候触发
  onExpand?: (record: Data, expanded: boolean) => void
  // onRow 设置行属性
  onRow?: (record: Data, index: number) => object 
}

export interface Data {
  [key: string]: string
}

/** 每一列 */
export interface Column {
  // key 每一列单独的`key`
  key: string
  // title 标题
  title?: React.ReactNode
  // 内容的对齐方式 默认 left
  align?: 'left' | 'center' | 'right'
  // className 每一列的列名
  className?: string
  // colSpan 列合并
  colSpan?: number
  // filters 表单的筛选项菜单
  filters?: FilterData[]
  // filterMultiple 是否支持多选 默认为false
  filterMultiple?: boolean
  // onFilter 本地的筛选函数，服务端进行筛选的时候，可以不加这个函数, value为选中的value的数组
  onFilter?: (value: Array<string | number>, record: Data) => boolean
  // fixed 是否固定 固定在左边或者右边
  fixed?: 'left' | 'right'
  // render 用于复杂数据的渲染 record: 当前行的dataSource的数据, text: 当前Data的value, index: 当前行的下标
  render?: (record: Data, text?: string, index?: number) => React.ReactNode 
  // width 列宽度
  width?: number | string
  // sortOrder 排序顺序 默认为false的时候采用默认排序
  sortOrder?: 'ascend' | 'descend' | false
  // sorter 排序函数，本地排序需要传递一个函数，需要服务端排序则设置为true即可
  sorter?: (a: Data, b: Data) => boolean | boolean
  // 合并单元格 index为每一行的下标, 
  onMergeCell?: (index: number) => MergeCell
}

/** 筛选数据的结构 */
export interface FilterData {
  label: React.ReactNode
  value: string | number
}

/** 合并单元格的返回数据 */
export interface MergeCell {
  colSpan?: number
  rowSpan?: number
}

/** 选择功能的配置 */
export interface RowSelection {
  // 选中项的数组， 需要配合onChange一起使用
  selectedRowKeys?: Array<string | number>
  // type 单选或者多选的类型 默认为`checkbox`
  type?: 'checkbox' | 'radio'
  // onChange 选中项发生变化的回调, 全选也会调用
  onChange?: (selectedRowKeys: Array<string | number>, selectedRows: Data[]) => void
  // onSelect 选择某一行发生的回调
  onSelect?: (record: Data, selectedRows: Data[], selected: boolean) => void
  // onDisabled 配置哪些不可选
  onDisabled?: (record: Data) => boolean
  // hideDefaultSelections 用于隐藏全选和反选选项 默认为false
  hideDefaultSelections?: boolean
  // onSelectAll 点击全选的回调
  onSelectAll?: (selectedRows: Data[], selected: boolean) => void
}

export type SortType = 'ascend' | 'descend'