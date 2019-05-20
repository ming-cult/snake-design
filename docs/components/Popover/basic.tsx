import * as React from 'react'
import { Popover, Button } from 'components'

export default function SimpleDemo() {
  const [visible, setVisible] = React.useState(false)
  return (
    <div style={{ marginTop: 20 }}>
      <Popover
        visible={visible}
        onVisibleChange={visible => setVisible(visible)}
        content={<div>内容内容区</div>}
        title="标题"
        wrapperComponent="div"
        wrapperStyle={{ display: 'inline-block' }}
        trigger="hover"
      >
        <Button>Hover me</Button>
      </Popover>
    </div>
  )
}
