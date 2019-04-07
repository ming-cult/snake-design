export interface BreadcrumbItemProps {
  /** 该级的展示内容 **/
  content?: React.ReactNode
  /** 该级的链接 **/
  link: string
}

export interface BreadcrumbProps {
  /** 组件className前缀 **/
  prefixCls?: string
  /** 样式相关 **/
  className?: string
  /** 样式 **/
  style?: React.CSSProperties
  /** 点击的回调 **/
  onClick?: (index: number, url: string) => void
  /** 尺寸 **/
  size?: 'default' | 'small' | 'large'
  /** 数据源 **/
  dataSource: BreadcrumbItemProps[]
  /** 分隔符 **/
  separator?: React.ReactNode
  /** 最大显示多少级 **/
  expandMax?: number
}
