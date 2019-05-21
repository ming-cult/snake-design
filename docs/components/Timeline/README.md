---
imports: import TimelineDemoCode from '!raw-loader!./simpleTimeline.tsx';
  import TimelineDemo from './simpleTimeline.tsx';
---

# Timeline 时间轴

时间轴。

## 简单示例

:::demo
<Block des="Timeline 示例" code={TimelineDemoCode}>
<TimelineDemo />
</Block>
:::

## Timeline Api

| 属性         |              说明              |         类型          |    默认值 |
| ------------ | :----------------------------: | :-------------------: | --------: |
| current      |         当前高亮的节点         |        number         |         0 |
| currentColor |         高亮节点的颜色         |        string         | '#1199EE' |
| options      | 支持配置模式或者 children 模式 | TimeLineConfigProps[] |        -- |

## TimeLineItemProps Api

| 属性       |         说明         |      类型       | 默认值 |
| ---------- | :------------------: | :-------------: | -----: |
| dot        |    自定义时间轴点    | React.ReactNode |     -- |
| lineHeight | 线条高度, 单位百分比 |     Number      |    100 |

## TimeLineConfigProps Api

| 属性       |         说明         |      类型       | 默认值 |
| ---------- | :------------------: | :-------------: | -----: |
| dot        |    自定义时间轴点    | React.ReactNode |     -- |
| lineHeight | 线条高度, 单位百分比 |     Number      |    100 |
| content    |    Timeline 内容     | React.reactnode |    100 |
