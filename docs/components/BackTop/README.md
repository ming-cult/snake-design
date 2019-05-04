---
imports: import BackTopDemoCode from '!raw-loader!./simpleBackTop.tsx';
  import BackTopDemo from './simpleBackTop.tsx';
---

# BackTop 回到顶部

返回页面顶部的操作按钮。

### 简单示例

:::demo
<Block code={BackTopDemoCode} des="回到顶部">
<BackTopDemo />
</Block>
:::

## Props

| 参数             | 说明                               | 类型            | 默认值 |
| :--------------- | :--------------------------------- | :-------------- | :----- |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop | number          | 400    |
| children         | 传入子节点                         | React.ReactNode | -      |
| className        | 样式                               | string          | -      |
| style            | 样式                               | object          | -      |
