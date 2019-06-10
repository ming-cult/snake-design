---
imports: import SimpleDemoCode from '!raw-loader!./simple.tsx';
  import SimpleDemo from './simple.tsx';
  import MultipleDemoCode from '!raw-loader!./multiple.tsx';
  import MultipleDemo from './multiple.tsx';
---

# Select 下拉选择

弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。

## 单选示例

:::demo
<Block des="单选示例" code={SimpleDemoCode}>
<SimpleDemo />
</Block>
:::

## 多选示例

:::demo
<Block des="多选示例" code={MultipleDemoCode}>
<MultipleDemo />
</Block>
:::

## Api

### Select
