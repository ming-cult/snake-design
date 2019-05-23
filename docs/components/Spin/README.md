---
imports:
  import SimpleDemoCode from '!raw-loader!./simpleDemo.tsx';
  import SimpleDemo from './simpleDemo.tsx';
  import SizeDemoCode from '!raw-loader!./sizeDemo.tsx';
  import SizeDemo from './sizeDemo.tsx';
  import TipDemoCode from '!raw-loader!./tipDemo.tsx';
  import TipDemo from './tipDemo.tsx';
  import ContainerDemoCode from '!raw-loader!./container.tsx';
  import ContainerDemo from './container.tsx';
---

# Spin 加载中

用于页面和区块的加载中状态。

## 简单示例

:::demo
<Block des="简单的 spin" code={SimpleDemoCode}>
  <SimpleDemo />
</Block>
:::

## 多尺寸示例

:::demo
<Block des="多尺寸 spin" code={SizeDemoCode}>
  <SizeDemo />
</Block>
:::

## 文字提示

:::demo
<Block des="文字提示 spin" code={TipDemoCode}>
  <TipDemo />
</Block>
:::

## 区块加载

:::demo
<Block des="区块加载 spin" code={ContainerDemoCode}>
  <ContainerDemo />
</Block>
:::

## Api

| 参数      | 说明             | 类型              | 可选值 | 默认值   |
| --------- | ---------------- | ----------------- | ------ | -------- |
| indicator | 自定义的指示器   | ReactNode         | --     | --       |
| size      | 尺寸             | `small`, `normal` | --     | `normal` |
| tip       | 自定义的文字提示 | ReactNode         | --     | --       |