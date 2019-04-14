---
imports:
  import CheckboxDemoCode from '!raw-loader!./demo.tsx';
  import CheckboxDemo from './demo.tsx';
  import Code from '../../layout/prism/index'
---

# Button 按钮

基础组件，触发业务逻辑时使用。

## 简单示例

:::demo
<CheckboxDemo />
:::

## 代码示例

<div><Code>{CheckboxDemoCode}</Code></div>

## Api

### Checkbox

| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| checked | 是否选中 | boolean | -- | `false`
| onChange | 触发事件的回调 | function(checked: boolean) : void | -- | noop
| autoFocus | 是否自动聚焦 | boolean | -- | `false`
| disabled | 是都不可选 | boolean | -- | `false`
| className | 类名 | string | -- | --
| indeterminate | 是否半选 | boolean | -- | `false`

### CheckboxGroup

| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| options | 数据源 | Data[] | -- | []
| disabled | 是否全部不可用 | boolean | -- | `false`
| value | 选中的值的集合 | string[] | -- | []
| onChange | 触发事件的回调 | function(value: string[]) : void | -- | --

### Data

| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| label | 文本信息 | ReactNode | 否 | --
| value | 用于选定的值 | string | 否 | --
| disabled | 是否不可用 | boolean | -- | --
| autoFocus | 是否自动聚焦 | boolean | -- | --