import * as React from 'react'
import { Overlay, Button } from 'components'
import './index.scss'

export default function OverlayDemo() {
  const [visible, setVisible] = React.useState(false)
  const [visible1, setVisible1] = React.useState(false)
  return (
    <div>
      <h3>默认关闭弹窗销毁组件</h3>
      <Overlay visible={visible} onClose={() => setVisible(false)} zIndex={1020}>
        <div>内容区</div>
      </Overlay>
      <Button onClick={() => setVisible(true)}>点击显示弹出层</Button>
      <h3>关闭弹窗不销毁组件</h3>
      <Overlay visible={visible1} onClose={() => setVisible1(false)} destroy={false}>
        <div>内容区(不销毁组件)</div>
      </Overlay>
      <Button onClick={() => setVisible1(true)}>点击显示弹出层(不销毁组件)</Button>
    </div>
  )
}
