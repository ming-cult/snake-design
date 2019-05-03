---
imports:
  import TabsDemoCode from '!raw-loader!./simpleTabs.tsx';
  import TabDemo from './simpleTabs.tsx';
---

# Tabs 标签页

选项卡切换组件。

## 简单示例

:::demo
<Block des="Tabs 示例" code={TabsDemoCode}>
  <TabDemo />
</Block>
:::

## Api

| 属性                 | 说明                           | 类型                              | 默认值   | 必填 |
| :------------------- | :----------------------------- | :-------------------------------- | :------- | :--- |
| options              | tabs 中的展示项                | TabsItemProps[]                   | []       | 否   |
| activeTab            | tab 当前选中页                 | number                            | 0        | 否   |
| onChange             | Tab 切换时触发                 | Function                          | --       | 否   |
| onTabClick           | 点击 Tab 时触发                | Function                          | --       | 否   |
| tabBarPosition       | TabBar位置                     | 'top' \| 'bottom \| left \| right | top      | 否   |
| tabItemStyle         | tabItem 的样式                 | React.CSSProperties               | --       | 否   |
| type                 | 提供 'line' \| 'card' 两种模式 | string                            | 'line'   | 否   |
| tabBarUnderlineColor | 下划线颜色                     | string                            | '01C1B2' | 否   |

## TabsItemProps Api

| 属性     | 说明                  | 类型                          | 默认值 | 必填 |
| :------- | :-------------------- | :---------------------------- | :----- | :--- |
| title    | Tabs 中的单项         | String \| Number \| ReactNode | --     | 是   |
| disabled | Tabs 中的单项是否禁用 | boolean                       | false  | 否   |