---
imports:
  import BasicModalDemoCode from '!raw-loader!./basicModal.tsx';
  import BasicModalDemo from './basicModal.tsx';
  import FooterModalDemoCode from '!raw-loader!./customFooter.tsx';
  import FooterModalDemo from './customFooter.tsx';
---

# Overlay 弹出层

弹出框之类的选择层

## 简单示例

:::demo 
<Block code={BasicModalDemoCode} des="基础模态框"> 
<BasicModalDemo /> 
</Block> 
:::

:::demo 
<Block code={FooterModalDemoCode} des="自定义页脚, 点击异步加载"> 
<FooterModalDemo /> 
</Block> 
:::