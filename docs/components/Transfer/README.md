---
imports: 
  import BasicDemoCode from '!raw-loader!./base.tsx';
  import BasicDemo from './base.tsx';
  import FooterDemoCode from '!raw-loader!./withFooter.tsx';
  import FooterDemo from './withFooter.tsx';
---

# Transfer 穿梭框

双栏穿梭选择框。

## 基础用法

:::demo
<Block code={BasicDemoCode} des="基础用法">
<BasicDemo />
</Block>
:::

## 自定义底部

:::demo
<Block code={FooterDemoCode} des="基础用法">
<FooterDemo />
</Block>
:::

## Api

| 属性           | 说明                                      | 类型                                                                     | 默认值     | 必填 |
| :------------- | :---------------------------------------- | :----------------------------------------------------------------------- | :--------- | :--- |
| className      | 类名                                      | string                                                                   | --         | --   |
| dataSource     | 数据源                                    | Item[]                                                                   | []         | --   |
| targetKeys     | 右侧框数据的 key 集合                     | string[]                                                                 | []         | --   |
| footer         | 自定义的底部                              | ReactNode                                                                | --         | --   |
| render         | 自定义渲染每一行的内容                    | (record: ItemProps, index: number) => React.ReactNode                    | --         | --   |
| selectedKeys   | 选中的 `key` 集合                         | string[]                                                                 | []         | --   |
| showSearch     | 是否展示搜索框                            | boolean                                                                  | `false`    | --   |
| showSelectAll  | 是否展示全选框                            | boolean                                                                  | `true`     | --   |
| onChange       | 在发生转移的时候的回调                    | (targetKeys: string[], direction: Direction, moveKeys: string[]) => void | --         | --   |
| onSearch       | 点击搜索的回调                            | (value: string, direction: Direction) => void                            | --         | --   |
| searchOnChange | 是否在 input change 的时候调用 `onSearch` | boolean                                                                  | `true`     | --   |
| onSelectChange | 选中项发生变化的回调函数                  | (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void     | --         | --   |
| listStyle      | 穿梭框的样式                              | CSSProperties                                                            | --         | --   |
| operations     | 操作文案的集合 从上到下                   | string[]                                                                 | ['>', '<'] | --   |
| titles         | 标题集合 默认是从左到右                   | string[]                                                                 | ['>', '<'] | --   |
| disabled       | 是否不可用                                | boolean                                                                  | `false`    | --   |

### Item

| 属性     | 说明     | 类型    | 默认值  | 必填 |
| :------- | :------- | :------ | :------ | :--- |
| key      | 键值必填 | string  | --      | `是` |
| title    | 标题     | string  | --      | --   |
| disabled | 是否禁用 | boolean | `false` | --   |
