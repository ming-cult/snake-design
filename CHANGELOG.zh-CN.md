---
order: 6
title: 更新日志
toc: false
timeline: true
---

`antd` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

* 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* 次版本号：每月发布一个带有新特性的向下兼容的版本。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## 3.16.3

`2019-04-12`

- 🐞 **修复 Button TS 类型定义。**[#15938](https://github.com/ant-design/ant-design/pull/15938)
- ⚠️ DatePicker 新增当日期不合法的提示。[#15920](https://github.com/ant-design/ant-design/pull/15920)
- 🐞 修复 Menu 箭头在老 IE 版本上不显示的问题。[#15932](https://github.com/ant-design/ant-design/pull/15932)
- 🐞 修复 Progress 当 `status` 为 `undefined` 时的展示。[#15951](https://github.com/ant-design/ant-design/pull/15951)
- 🐞 修复 Menu 折叠时 Tooltip 的问题。[#15948](https://github.com/ant-design/ant-design/pull/15948)
- 🐞 修复 Switch 应该被 Label 触发的问题。[#15923](https://github.com/ant-design/ant-design/pull/15923)
- 🐞 修复 Directory `onSelect` 无法使用的问题。[#15967](https://github.com/ant-design/ant-design/pull/15967)
- 🐞 修复 Menu `defaultOpenKeys` 不工作。[#15970](https://github.com/ant-design/ant-design/pull/15970)
- 🐞 修复内嵌的 Table `size` 为 `middle` 时的样式。[#16008](https://github.com/ant-design/ant-design/pull/16008)
- 🐞 修复 Tab `display: none` 时高亮线条丢失的问题。[#16013](https://github.com/ant-design/ant-design/pull/16013)
- 🐞 修复 Empty IE 展示的问题。[#16016](https://github.com/ant-design/ant-design/pull/16016)
- 🐞 修复通过修改 `@tree-title-height` 的值会导致 tree-switcher-loading-icon 位置不再居中的问题。[#15962](https://github.com/ant-design/ant-design/pull/15962)
- 💄 修复默认的 selection column width 无法被样式覆盖的问题。[#15990](https://github.com/ant-design/ant-design/pull/15990)
- TypeScript
  - 🐞 修复 Pagination `showLessItems` TS 类型定义。[#15952](https://github.com/ant-design/ant-design/pull/15952)

## 3.16.2

`2019-04-07`

- 🐞 修复 Menu 收缩的异常闪动。[#15868](https://github.com/ant-design/ant-design/pull/15868)
- 🐞 修复 List 分页无法改变每页条数。[#15871](https://github.com/ant-design/ant-design/pull/15871)
- 🐞 修复 RangePicker 结束时间不可输入。[#15866](https://github.com/ant-design/ant-design/pull/15866)
- 📝 站点 [Icon](https://ant.design/components/icon-cn/) 支持图标搜索。[#15867](https://github.com/ant-design/ant-design/pull/15867) [@DiamondYuan](https://github.com/DiamondYuan)
- 🐞 修复 TimePicker `locale` 属性无效的问题。 [#15837](https://github.com/ant-design/ant-design/pull/15837)
- 🐞 修复 Steps 同时使用 `progressDot` 和 `size="small"` 时的样式错乱问题。[#15856](https://github.com/ant-design/ant-design/pull/15856)
- 🐞 修复 Affix 的内容高度改变时，位置不更新的问题。 [#15899](https://github.com/ant-design/ant-design/pull/15899)
- Table
  - 🐞 修复 Table 使用排序时，表头设置 `align: right` 失效的问题。[#15895](https://github.com/ant-design/ant-design/pull/15895)
  - 🐞 修复 Table 筛选使用 string 以外类型的展示问题。 [#15817](https://github.com/ant-design/ant-design/pull/15817)
- 🐞 修复 Badge `count` 为负数时的显示问题。[#15810](https://github.com/ant-design/ant-design/pull/15810)
- 💄 优化 `Empty.PRESENTED_IMAGE_SIMPLE` 的默认样式。 [#15841](https://github.com/ant-design/ant-design/pull/15841)
- 🌟 新增 less 变量 `@html-selector` 用于支持主题前缀。[#15613](https://github.com/ant-design/ant-design/pull/15613) [@krokofant](https://github.com/krokofant)
- TypeScript
  - 🐞 修复 Table `columnGroup` 定义。[fc45d](https://github.com/ant-design/ant-design/commit/fc45d7003efab225298bbc7ac740df40d34872d1)

## 3.16.1

`2019-04-01`

- 🐞 修复 `antd.less` 丢失的问题。[#15790](https://github.com/ant-design/ant-design/issues/15790)

## 3.16.0

`2019-04-01`

- 🌟 Badge 支持自定义颜色。[#15764](https://github.com/ant-design/ant-design/pull/15764)
- 🌟 Checkbox.Group 支持 `name` 属性。[#15760](https://github.com/ant-design/ant-design/pull/15760) [@bencallaway](https://github.com/bencallaway)
- 🌟 Modal 支持通过 `confirm({ icon: null })` 隐藏图标。[#15319](https://github.com/ant-design/ant-design/pull/15319) [@Adamwu1992](https://github.com/Adamwu1992)
- Empty
  - 🌟 Empty 支持 `imageStyle` 属性。[#15487](https://github.com/ant-design/ant-design/pull/15487)
  - 🌟 Empty 支持通过 `Empty.PRESENTED_IMAGE_DEFAULT` 和 `Empty.PRESENTED_IMAGE_SIMPLE` 访问预置图片。[#15487](https://github.com/ant-design/ant-design/pull/15487)
- 🌟 Progress.Line 支持渐变色。[#15524](https://github.com/ant-design/ant-design/pull/15524) [@zy410419243](https://github.com/zy410419243)
- DatePicker
  - 🌟 更新 `rc-calendar` 依赖，允许默认值可以是空。[#520](https://github.com/react-component/calendar/pull/520)
  - 🐞 修复 DatePicker 中 disabled 和 selected 日期单元的样式。[#15608](https://github.com/ant-design/ant-design/pull/15608)
  - 🐞 修复 RangePicker 不能选择同一个月的问题。[#15427](https://github.com/ant-design/ant-design/pull/15427)
- ⚡️ 重构 Form 移动 `ant-form-item-no-colon` 样式到 Form.Item 中。[#15592](https://github.com/ant-design/ant-design/pull/15592) [@HsuanXyz](https://github.com/HsuanXyz)
- Menu
  - 🐞 修复 Menu 收缩的异常闪动。[#15625](https://github.com/ant-design/ant-design/pull/15625) [@zy410419243](https://github.com/zy410419243)
  - 🐞 修复 MenuItem 在非 `inlineCollapsed` 时显示了多余 Tooltip 的问题。[#15705](https://github.com/ant-design/ant-design/pull/15705) [@zy410419243](https://github.com/zy410419243)
- 🐞 修复 Chrome 中 Upload 边框跳动的问题。[#15636](https://github.com/ant-design/ant-design/pull/15636)
- 🐞 修复 Input 和 Input.Search 中清除按钮图标样式。[#15672](https://github.com/ant-design/ant-design/pull/15672)
- 🐞 PageHeader 支持 2 层的 `breadcrumb`。[#15689](https://github.com/ant-design/ant-design/pull/15689)
- Tag
  - 🐞 回滚 Tag 换行样式，以避免表格中切行。[#15690](https://github.com/ant-design/ant-design/pull/15690)
  - 💄 移除 Tag 动画。[#15233](https://github.com/ant-design/ant-design/pull/15233)
- 🐞 修复 Spin `indicator` 为 Icon 时的样式。[#15712](https://github.com/ant-design/ant-design/pull/15712)
- 🐞 修复可收缩 Layout.Sider 使用 svg 图标时会报错的问题。[#15720](https://github.com/ant-design/ant-design/pull/15720) [@wx1322](https://github.com/wx1322)
- 💄 移除聚焦链接的下划线样式。[#15759](https://github.com/ant-design/ant-design/pull/15759) [@Nouzbe](https://github.com/Nouzbe)
- Table
  - 💄 将 Table 排序按钮移至标题后。[#15758](https://github.com/ant-design/ant-design/pull/15758)
  - 💄 修复 Table 固定列遮挡其他组件的问题。[#15782](https://github.com/ant-design/ant-design/pull/15782)
- 🐞 修复 Col 丢失相关样式的问题。[#15766](https://github.com/ant-design/ant-design/pull/15766)
- 💄 调整 Card 和 PageHeader 样式，将 padding 从 `32px` 改成 `24px`。[#15755](https://github.com/ant-design/ant-design/pull/15755)
- 🌟 添加 less 变量
  - 🌟 Button 添加 `@btn-border-width` 和 `@btn-border-style`。[#15397](https://github.com/ant-design/ant-design/pull/15397) [@searleb](https://github.com/searleb)
  - 🌟 Modal 添加 `@modal-body-padding` 和 `@modal-footer-bg`。[#15476](https://github.com/ant-design/ant-design/pull/15476) [#15469](https://github.com/ant-design/ant-design/pull/15469) [@shumkovdenis](https://github.com/shumkovdenis)
  - 🌟 Radio 添加 `@radio-button-checked-bg`。[#15541](https://github.com/ant-design/ant-design/pull/15541) [@willc001](https://github.com/willc001)
- 🌟 调整相关 TypeScript 类型定义
  - 🐞 **修复 Button 和 `@types/react` 的定义冲突。**[#15702](https://github.com/ant-design/ant-design/pull/15702) [@ferdikoomen](https://github.com/ferdikoomen)
  - 🌟 Menu 添加 `overflowedIndicator` 定义。[#15355](https://github.com/ant-design/ant-design/pull/15459) [@Yangzhedi](https://github.com/Yangzhedi)
  - 🐞 修复 Input `action` 定义。[#15598](https://github.com/ant-design/ant-design/pull/15598) [@Yangzhedi](https://github.com/Yangzhedi)
  - 🐞 修复 Tree `onLoad` 定义。[#15718](https://github.com/ant-design/ant-design/pull/15718) [@babycannotsay](https://github.com/babycannotsay)
  - 🌟 CheckBox.Group 添加 `name` 定义。[#15753](https://github.com/ant-design/ant-design/pull/15753)
  - 🌟 RangePicker 添加 `separator` 定义。[#15765](https://github.com/ant-design/ant-design/pull/15765)