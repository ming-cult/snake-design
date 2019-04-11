---
imports:
  import IconDemoCode from '!raw-loader!./simpleIcon.tsx';
  import IconDemo from './simpleIcon.tsx';
  import Code from '../../layout/prism/index'
---

# Icon

图标类型的组件，现在是 `svg`，但是 `svg` 在 `IE9` 是不兼容的，目前是一次性全部加载，后续会考虑`按需加载`

## Usage 用法

```jsx
<Icon type="eye">
```

`type` 是必填字段

## Api

| 属性 | 说明 | 类型 | 默认值 | 可选 |
|-----|:-:|:-:| ------: | :-: |
| type | 图标的名称 | string | -- | 否
| size | 图标的尺寸 | number | -- | --
| color | 图标的颜色 | string | -- | --
| rotate | 旋转的角度 | number | -- | --
| spin | 是否渲染 | boolean | `false` | --
| className | 类名 | string | -- | --
| style | 样式 | object | -- | --
| onClick | 点击事件 | function(e) : void | -- | --

## Demo 示例

:::demo
<IconDemo />
:::