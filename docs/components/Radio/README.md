---
imports:
  import RadioDemoCode from '!raw-loader!./demo.tsx';
  import ButtonDemoCode from '!raw-loader!./buttonDemo.tsx';
  import RadioDemo from './demo.tsx';
  import Block from '../../layout/block';
  import RadioButtonDemo from './buttonDemo.tsx';
---

# Radio 单选框

用于在多个备选项中选中单个状态

## 简单示例

:::demo
<Block des="常用的 radio" code={RadioDemoCode}>
  <RadioDemo />
</Block>
:::

## 填充示例

:::demo
<Block des="按钮式的 radio" code={ButtonDemoCode}>
  <RadioButtonDemo />
</Block>
:::

## Api

### Radio

| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| options | 数据源 | Data[] | -- | []
| onChange | 触发事件的回调 | func(value: string or number) | -- | noop
| size | 尺寸 | `small`, `normal`, `large` | -- | `normal`
| value | 选中的值 | string, number | 否 | --
| disabled | 不可用 | boolean | -- | `false`
| className | 类名 | string | -- | --
| shape | 形状, 设置为 `button` 则为按钮类型 | `default`, `button` | -- | `default`
| buttonStyle | `button` 类型时候的样式, 分别是填充和描边, 需设置 `shape` 才会生效 | `outline`, `solid` | -- | `outline`

### RadioItem

| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| autoFocus | 是否自动聚焦 | boolean | -- | `false`
| checked | 是否选中 | boolean | -- | `false`
| disabled | 是否不可用 | boolean | -- | `false`
| onChange | 触发事件的回调 | function(checked: boolean): void | -- | noop
| className | 类名 | string | -- | --

### Data

| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| label | 文本信息 | ReactNode | 否 | --
| value | 选中的值 | `string`, `number` | 否 | --
| disabled | 不可用 | boolean | -- | --