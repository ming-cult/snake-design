# Panel

基础组件

:::demo

## 简单示例
Panel组件

```require
./components/Panel/simplePanel.tsx
```
:::

## props

### PanelItem参数
| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| leftIcon | 左侧图标 | React.ReactNode | ------ | ------ |
| leftAddon | 左侧插件 | React.ReactNode | ------ | ------ |
| rightIcon | 右侧图标 | React.ReactNode | ------ | ------ |
| rightAddon | 右侧插件 | React.ReactNode | ------ | ------ |
| innerDirection | inner flex 布局方向 | enum | row/column | row |
| feedback | 触摸反馈 | boolean | ------ | ------ |
| innerStyle | 自定义内容样式 | React.CSSProperties | ------ | ------ |
| innerClass | 自定义内容类 | string | ------ | ------ |
| alignItems | label与控件对齐的方式 | enum | stretch/center/end | center |
