export interface TabsProps {
  style?: string,
  className?: string,
  tabBarPosition?: string,
  onChange?: (index: number, e: any) => void,
  onTabClick?: (index: number, e: any) => void,
  activeTab?: number,
  tabs: any,
  tabDirection?: string,
  tabBarActiveTextColor?: string,
  tabBarInactiveTextColor?: string,
  notEqualDvided?: boolean,
}