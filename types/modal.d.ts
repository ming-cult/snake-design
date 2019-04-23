import { ButtonProps } from './button'
import { OmitType } from '../components/utils/type'

export interface ModalProps {
  /** 取消文本 默认为 `取消` */
  cancelText?: string | React.ReactNode
  /** okText 确认文本 默认为 `确定` */
  okText?: string | React.ReactNode
  /** closable 是否显示右上角的叉号 默认 `true` */
  closable?: boolean
  /** destroy 是否关闭弹窗销毁modal 默认为 `true` */
  destroy?: boolean
  /** onOk 点击确定的回调 */
  onOk?: () => void
  /** onCancel 点击取消或遮罩层或者右上角按钮的回调 */
  onCancel?: () => void
  /** title 标题 */
  title?: React.ReactNode
  /** visible 是否可见 默认为 `false` */
  visible?: boolean
  /** maskClosable 点击蒙层是否关闭弹窗 默认为 `true` */
  maskClosable?: boolean
  /** className 包裹层的 className */
  className?: string
  /** style 包裹层的 style 可以用来调整 modal 的位置 */
  style?: React.CSSProperties
  /** zIndex 设置 modal 的 z-index */
  zIndex?: number
  /** footer 底部 当不需要时设置 null */
  footer?: React.ReactNode | null
  /** width 可主动设置内容区的宽度 */
  width?: number
  /** okButtonProps */
  okButtonProps?: ButtonProps
  /** 取消按钮的 props */
  cancelButtonProps?: ButtonProps
  /** esc 是否支持键盘 esc 关闭 modal 默认为 `true` */
  esc?: boolean
  /** center 是否居中显示 modal 默认为 false */
  center?: boolean
}

export interface Alert extends OmitType<ModalProps, 'visible'> {
  /** icon 类型 可自定义 默认与 快捷弹窗的名称一致 */
  icon?: React.ReactNode
}
