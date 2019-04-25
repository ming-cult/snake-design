---
imports:
  import AffixDemoCode from '!raw-loader!./simpleAffix.tsx';
  import AffixDemo from './simpleAffix.tsx';
---

# Affix 固钉

将页面元素钉在可视范围。

### 简单示例

:::demo
<Block code={AffixDemoCode} des="固钉">
  <AffixDemo />
</Block>
:::

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
