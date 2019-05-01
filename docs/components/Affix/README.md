---
imports:
  import AffixDemoCode from '!raw-loader!./simpleAffix.tsx';
  import AffixDemo from './simpleAffix.tsx';
---

# Affix 固钉

将页面元素钉在可视范围。当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

### 简单示例

:::demo
<Block code={AffixDemoCode} des="固钉">
  <AffixDemo />
</Block>
:::

## Props
| 参数 | 说明 | 类型 | 默认值 |
|:-|:-|:-|:-|
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | - |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | - |
| onChange | 固定状态改变时触发的回调函数 | Function(affixed) | - |
| container | 容器 | any | - |
