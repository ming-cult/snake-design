---
imports: 
  import SimpleDemoCode from '!raw-loader!./simple.tsx';
  import SimpleDemo from './simple.tsx';
  import SizeDemoCode from '!raw-loader!./size.tsx';
  import SizeDemo from './size.tsx';
  import ColorDemoCode from '!raw-loader!./color.tsx';
  import ColorDemo from './color.tsx';
  import ShapeDemoCode from '!raw-loader!./shape.tsx';
  import ShapeDemo from './shape.tsx';
  import RenderDemoCode from '!raw-loader!./render.tsx';
  import RenderDemo from './render.tsx';
  import StatusDemoCode from '!raw-loader!./status.tsx';
  import StatusDemo from './status.tsx';
---

# Progress 进度条

上传文件，图片需要进度的时候使用

## 基础用法

:::demo
<Block code={SimpleDemoCode} des="基础用法">
<SimpleDemo />
</Block>
:::

## 不同尺寸

:::demo
<Block code={SizeDemoCode} des="基础用法">
<SizeDemo />
</Block>
:::

## 不同颜色

:::demo
<Block code={ColorDemoCode} des="基础用法">
<ColorDemo />
</Block>
:::

## 圆形进度条

:::demo
<Block code={ShapeDemoCode} des="基础用法">
<ShapeDemo />
</Block>
:::

## 自定义内部文本展示

:::demo
<Block code={RenderDemoCode} des="基础用法">
<RenderDemo />
</Block>
:::

## 不同的状态的进度条

:::demo
<Block code={StatusDemoCode} des="基础用法">
<StatusDemo />
</Block>
:::

# Api

| 参数        | 说明                 | 类型                           | 默认值   | 必选 |
| ----------- | -------------------- | ------------------------------ | -------- | ---- |
| size        | 进度条的尺寸         | `small`, `medium`, `large`     | `medium` | --   |
| type        | 进度条的形状         | `line`, `circle`               | `line`   | --   |
| percent     | 当前的进度           | number                         | `0`      | --   |
| showInfo    | 是否显示进度条的数值 | boolean                        | `true`   | --   |
| status      | 进度条的状态         | `normal`, `success`, `error`   | `normal` | --   |
| width       | 进度条的宽度         | number                         | --       | --   |
| activeColor | 进度条的颜色         | string                         | --       | --   |
| textRender  | 圆形进度条的内部文本 | (percent: number) => ReactNode | --       | --   |
