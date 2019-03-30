import * as React from 'react'
import { ButtonProps } from 'types/button.d'

class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    size: 'default', // 默认尺寸
    type: 'primary', // 按钮默认主色调
    disabled: false, // 是否禁止按钮
    primary: true, // 背景色是否为主色
    secondary: false, // 背景色是否为次级色
    accent: false, // 背景色是否为强调色
    textPosition: 'after', // 文本默认在后
  }

  render() {
    return (
      <div>button</div>
    )
  }
}

export default Button
