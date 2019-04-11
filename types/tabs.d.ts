export interface TabsProps {
  style?: object,
  className?: string,
  tabBarPosition?: string,
  onChange?: (index: number, e: any) => void,
  onTabClick?: (index: number, e: any) => void,
  activeTab?: number,
  tabs: any,
  tabDirection?: string,
  tabBarActiveTextColor?: string,
  tabBarInactiveTextColor?: string,
  children?: any,
  prefixCls?: string
}