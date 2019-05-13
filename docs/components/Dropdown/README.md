---
imports: 
  import DropdownDemoCode from '!raw-loader!./demo.tsx';
  import DropdownDemo from './demo.tsx';
  import DropdownBasicCode from '!raw-loader!./basic.tsx';
  import DropdownBasic from './basic.tsx';
---

# Dropdown

## 基础用法

:::demo
<Block code={DropdownBasicCode} des="基础用法">
<DropdownBasic />
</Block>
:::

## 简单示例

:::demo
<Block code={DropdownDemoCode} des="复选框">
<DropdownDemo />
</Block>
:::

## Props

| 参数             | 说明                             | 类型                                                                | 可选值 | 默认值       |
| ---------------- | -------------------------------- | ------------------------------------------------------------------- | ------ | ------------ |
| disabled         | 是否禁用                         | boolean                                                             | --     | false        |
| visible          | 是否可见                         | boolean                                                             | --     | false        |
| content          | 下拉内容区                       | ReactNode                                                           | --     | --           |
| wrapperComponent | 触发元素的包裹层， 默认为 `span` | React.ElementType                                                   | --     | `span`       |
| wrapperStyle     | 触发元素的包裹层的样式           | object                                                              | --     | --           |
| trigger          | 触发弹出层出现的方式             | `hover`, `click`                                                    | --     | `hover`      |
| placement        | 弹出层位置                       | `top`, `bottom`, `topLeft`, `topRight`, `bottomLeft`, `bottomRight` | --     | `bottomLeft` |
| onVisibleChange  | 显影发生改变的回调               | (visible: boolean) => void                                          | --     | --           |
| destroy          | 弹层小时是否销毁                 | boolean                                                             | --     | `true`       |
| className        | 弹出层的 `class`                 | string                                                              | --     | --           |
| style            | 弹出层的样式                     | object                                                              | --     | --           |