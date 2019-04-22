---
imports:
  import OverlayDemoCode from '!raw-loader!./demo.tsx';
  import OverlayDemo from './demo.tsx';
---

# Overlay 弹出层

弹出框之类的选择层

## 简单示例

:::demo 
<Block code={OverlayDemoCode} des="弹出层"> 
<OverlayDemo /> 
</Block> 
:::

## Api

| 属性             | 说明                                                             | 类型               | 默认值          | 必填 |
| :--------------- | :--------------------------------------------------------------- | :----------------- | :-------------- | :--- |
| visible          | 是否可见                                                         | boolean            | false           | --   |
| hasMask          | 是否有遮罩层                                                     | boolean            | true            | --   |
| onClose          | 关闭弹层的回调                                                   | () => void         | noop            | --   |
| maskClosable     | 是否点击遮罩层关闭弹层                                           | boolean            | true            | --   |
| destroy          | 关闭弹层时，是否销毁该弹层                                       | boolean            | true            | --   |
| wrapperClassName | 包裹层的类名                                                     | string             | --              | --   |
| wrapperStyle     | 包裹层的样式                                                     | object             | --              | --   |
| maskAnimation    | 弹层的动画，可以参考`react-transition-group`                     | string             | `fade`          | --   |
| contentAnimation | 内容区的动画, 可以参考`react-transition-group`                   | string             | `zoom`          | --   |
| zIndex           | z轴方向的层级                                                    | number             | --              | --   |
| prefixCls        | 前缀                                                             | string             | `snake-overlay` | --   |
| maskTimeout      | 遮罩层动画的持续时间, 可以参考`react-transition-group`, 单位毫秒 | `number`, `object` | 300             | --   |
| contentTimeout   | 内容区的动画持续时间, 可以参考`react-transition-group`, 单位毫秒 | `number`, `object` | 300             | --   |
| header           | 是否有头部                                                       | ReactNode          | --              | --   |
| footer           | 是否有底部                                                       | ReactNode          | --              | --   |
| closable         | 是否显示右上角的叉号                                             | boolean            | `true`          | --   |