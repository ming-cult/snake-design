import { ReactNode } from "react";

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
  prefixCls?: string,
  type?: string,
}

export interface TabsItemProps {
  title: String | Number | ReactNode
  disabled?: boolean
}