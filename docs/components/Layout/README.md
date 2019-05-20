---
imports: import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';
---

# Layout 布局

布局方面，规则为：

- 通过 row 在水平方向建立一组 column（简写 col）
- 你的内容应当放置于 col 内，并且，只有 col 可以作为 row 的直接元素
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用`<Col size={8}>...</Col>`来创建

## 简单示例

:::demo
<Block des="常用的布局" code={DemoCode}>
<Demo />
</Block>
:::

## Api

### 布局

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |

