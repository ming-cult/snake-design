import * as React from 'react'
import { Button, Modal } from 'components'

export default function BasicModal() {
  const [visible, setVisible] = React.useState(false)
  return (
    <div>
      <h1>点击遮罩层不消失</h1>
      <Button onClick={() => setVisible(true)}>点击遮罩层不消失</Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        title="基础 Modal "
        onOk={() => setVisible(false)}
        maskClosable={false}
      >
        <div>基础modal</div>
      </Modal>
    </div>
  )
}
