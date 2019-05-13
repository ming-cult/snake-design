---
imports: import BackTopDemoCode from '!raw-loader!./simpleBackTop.tsx';
  import BackTopDemo from './simpleBackTop.tsx';
  import CustomBackTopCode from '!raw-loader!./customBackTop.tsx';
  import CustomBackTopDemo from './customBackTop.tsx';
---

# BackTop 回到顶部

返回页面顶部的操作按钮。

### 何时使用

* 当页面内容区域比较长时；
* 当用户需要频繁返回顶部查看相关内容时；

### 简单示例

:::demo
<Block code={BackTopDemoCode} des="最简单的用法">
<BackTopDemo />
</Block>
:::

:::demo
<Block code={CustomBackTopCode} des="自定义样式">
<CustomBackTopDemo />
</Block>
:::

## Props

> 有默认样式，距离底部 50px，可覆盖。

| 参数             | 说明                               | 类型            | 默认值 |
| :--------------- | :--------------------------------- | :-------------- | :----- |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop | number          | 400    |
| children         | 传入子节点                         | React.ReactNode | -      |
| className        | 样式                               | string          | -      |
| style            | 样式                               | object          | -      |
