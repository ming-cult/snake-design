---
imports:
  import ButtomDemoCode from '!raw-loader!./simpleButton.tsx';
  import ButtomDemo from './simpleButton.tsx';
  import Code from '../../layout/prism/index'
---

# Button 按钮

基础组件，触发业务逻辑时使用。

### 简单示例

:::demo
<ButtomDemo />
:::

## 代码示例

<div><Code>{ButtomDemoCode}</Code></div>

## Props
| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| prefixCls | `类名前缀` | string | - | - |
| children | `子组件` | ReactNode | - | - |
| className | `按钮类名` | string | - | - |
| style | `按钮样式` | object | - | - |
| size | `按钮尺寸` | string | "default" / "small" / "large" | "default" |
| disabled | `按钮是否禁用` | boolean | false / true | false |
| loading | `按钮是否加载中` | boolean | false / true | false |
| type | `按钮种类` | string | "primary" / "gray" / "warn" | "primary" |
| text | `是否为文字按钮` | boolean | false / true | false |
| icon | `icon类名` | string | - | - |
| iconStyle | `icon样式` | object | - | - |
| onClick | `点击回调` | function | - | - |