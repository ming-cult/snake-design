import * as React from 'react'
import { Button, Modal } from 'components'

export default function BasicModal() {
  const [visible, setVisible] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  return (
    <div>
      <h1>自定义底部</h1>
      <Button onClick={() => setVisible(true)}>自定义底部</Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        title="基础 Modal "
        onOk={() => setVisible(false)}
        footer={
          <>
            <Button type="gray" onClick={() => setVisible(false)}>
              返回
            </Button>
            <Button
              onClick={() => {
                setLoading(true)
                setTimeout(() => {
                  setLoading(false)
                  setVisible(false)
                }, 2000)
              }}
              loading={loading}
            >
              确认
            </Button>
          </>
        }
      >
        <div>基础modal</div>
      </Modal>
    </div>
  )
}
