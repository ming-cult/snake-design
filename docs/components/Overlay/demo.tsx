import * as React from 'react'
import { Overlay, Button } from 'components'
import './index.scss'

export default function OverlayDemo() {
  const [visible, setVisible] = React.useState(false)
  return (
    <div>
      <Overlay visible={visible} onClose={() => setVisible(false)}>
        <div>内容区</div>
      </Overlay>
      <Button onClick={() => setVisible(true)}>点击显示弹出层</Button>
    </div>
  )
}
