import * as React from 'react'
import { Tooltip, Button } from 'components'

export default function SimpleDemo() {
  const [visible, setVisible] = React.useState(false)
  return (
    <div style={{ marginTop: 20 }}>
      <Tooltip
        visible={visible}
        onVisibleChange={visible => setVisible(visible)}
        title="内容区"
        wrapperComponent="div"
        wrapperStyle={{ display: 'inline-block' }}
        trigger="click"
      >
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  )
}
