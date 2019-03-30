# Button 按钮

基础组件，触发业务逻辑时使用。

## 代码示例

:::demo
### 简单示例
各种类型的按钮

```require
./components/Button/simpleButton.tsx
```
:::

## Props
| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| className | 按钮类名 | string | - | - |
| size    | 按钮尺寸 | enum | small、default、large | default |
| type | 按钮类别 | enum | primary: 主色调 <br/> secondary: 次级按钮 <br/> accent: 强调色 | primary |
| inline | 内联按钮 | boolean | - | false |
| backgroundColor | 按钮背景色 | string | - | - |
| color | 按钮文本颜色 | string | - | - |
| style | 按钮样式，可覆盖以上所有样式 | React.CSSProperties | - | - |
| text | 按钮文本 | React.ReactNode | - | - |
| disable    | 按钮是否禁用 | boolean | — | false |
| onClick | 按钮点击事件 | function | - | - |
| icon | 按钮图标，可用所有Icon组件提供的图标 | string | — | — |
| iconClass | 按钮图标类名| string | — | — |
| iconStyle | 按钮样式 | React.CSSProperties | - | - |
| textPosition | 按钮文字位置，相对于icon来说，没有icon的话该值忽略 | enum | before/after | after |
| disableRipple | 是否禁用波纹 | boolean | - | - |
| rippleColor | 波纹效果颜色 | string | — | — |
| rippleOpacity | 波纹效果透明度 | number | — | — |
