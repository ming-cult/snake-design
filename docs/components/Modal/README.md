---
imports:
  import BasicModalDemoCode from '!raw-loader!./basicModal.tsx';
  import BasicModalDemo from './basicModal.tsx';
  import FooterModalDemoCode from '!raw-loader!./customFooter.tsx';
  import FooterModalDemo from './customFooter.tsx';
  import MaskModalDemoCode from '!raw-loader!./mask.tsx';
  import MaskModalDemo from './mask.tsx';
  import AlertModalDemoCode from '!raw-loader!./alert.tsx';
  import AlertModalDemo from './alert.tsx';
---

# Modal 模态框

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

:::demo 
<Block code={MaskModalDemoCode} des="点击遮罩层不消失"> 
<MaskModalDemo /> 
</Block> 
:::

:::demo 
<Block code={AlertModalDemoCode} des="快捷式调用"> 
<AlertModalDemo /> 
</Block> 
:::

## Props

| 属性              | 说明                                 | 类型       | 默认值  | 必填 |
| :---------------- | :----------------------------------- | :--------- | :------ | :--- |
| okText            | 确定按钮的文本                       | ReactNode  | `确定`  | --   |
| cancelText        | 取消按钮的文本                       | ReactNode  | `取消`  | --   |
| closable          | 是否显示右上角的叉号                 | boolean    | `true`  | --   |
| destroy           | 模态框关闭后是否销毁                 | boolean    | `true`  | --   |
| onOk              | 点击确认按钮的回调                   | () => void | `noop`  | --   |
| onCancel          | 点击取消按钮，右上角叉号，蒙层的回调 | () => void | `noop`  | --   |
| title             | 标题                                 | ReactNode  | --      | --   |
| visible           | 是否可见                             | boolean    | `false` | --   |
| maskClosable      | 是否点击蒙层关闭模态框               | boolean    | `true`  | --   |
| className         | 类名                                 | string     | --      | --   |
| style             | 包裹层的样式                         | object     | --      | --   |
| zIndex            | 设置 z 轴的优先级                    | number     | --      | --   |
| footer            | 是否有底部                           | ReactNode  | --      | --   |
| width             | 设置内容区的宽度                     | number     | --      | --   |
| okButtonProps     | 确定按钮的 props                     | object     | --      | --   |
| cancelButtonProps | 取消按钮的 props                     | object     | --      | --   |
| esc               | 是都支持点击 `esc` 关闭模态框        | boolean    | `true`  | --   |
| afterClose        | 模态框彻底关闭后的回到               | () => void | `noop`  | --   |

`Modal` 还支持快捷调用的方式

> `Modal.confirm({})`  

> `Modal.info({})`  
  
> `Modal.success({})`  
  
> `Modal.error({})`  
  
> `Modal.warning({})`  

## 快捷调用 props

| 属性              | 说明                                 | 类型                                                                  | 默认值     | 必填 |
| :---------------- | :----------------------------------- | :-------------------------------------------------------------------- | :--------- | :--- |
| okText            | 确定按钮的文本                       | ReactNode                                                             | `确定`     | --   |
| cancelText        | 取消按钮的文本                       | ReactNode                                                             | `取消`     | --   |
| onOk              | 点击确认按钮的回调                   | () => void                                                            | `noop`     | --   |
| onCancel          | 点击取消按钮，右上角叉号，蒙层的回调 | () => void                                                            | `noop`     | --   |
| title             | 标题                                 | ReactNode                                                             | --         | --   |
| maskClosable      | 是否点击蒙层关闭模态框               | boolean                                                               | `true`     | --   |
| className         | 类名                                 | string                                                                | --         | --   |
| style             | 包裹层的样式                         | object                                                                | --         | --   |
| zIndex            | 设置 z 轴的优先级                    | number                                                                | --         | --   |
| width             | 设置内容区的宽度                     | number                                                                | --         | --   |
| okButtonProps     | 确定按钮的 props                     | object                                                                | --         | --   |
| cancelButtonProps | 取消按钮的 props                     | object                                                                | --         | --   |
| esc               | 是都支持点击 `esc` 关闭模态框        | boolean                                                               | `true`     | --   |
| afterClose        | 模态框彻底关闭后的回到               | () => void                                                            | `noop`     | --   |
| icon              | 图标                                 | ReactNode                                                             | 问号的按钮 | --   |
| content           | 内容区                               | ReactNode                                                             | --         | --   |
| hasCancelBtn      | 是否有取消按钮                       | 默认为true, 但是在 `info`, `success`, `warning`, `error` 下是 `false` | `true`     | --   |