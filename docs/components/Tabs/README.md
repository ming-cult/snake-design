---
imports:
  import TabsDemoCode from '!raw-loader!./simpleTabs.tsx';
  import TabDemo from './simpleTabs.tsx';
  import Code from '../../layout/prism/index'
---

# Tabs 标签页

选项卡切换组件。

### Demo

:::demo
<TabDemo />
:::

## 代码示例

<div><Code>{TabsDemoCode}</Code></div>

## Props

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|:-|:-|:-|:-|:-|
| tabs | tabs 中的展示项 | Array<>, <> 内为对象 title: string | [] | 是 |
| activeTab | tab 当前选中页 | number | 0 | 否 |
| onChange | Tab 切换时触发 | Function | | 否 |
| onTabClick | 点击 Tab 时触发 | Function | | 否 |
| tabBarPosition | TabBar位置 | 'top' \| 'bottom \| left \| right | top | 否 |
| tabBarActiveTextColor | tabBar激活Tab文字颜色 | string | | false |
| tabBarInactiveTextColor | tabBar非激活Tab文字颜色 | string | | false |
| tabItemStyle | tabItem 的样式 | React.CSSProperties | | false |
