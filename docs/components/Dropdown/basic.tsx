import * as React from 'react'
import { Dropdown } from 'components'

export default function BasicDemo() {
  const [visible, setVisible] = React.useState(false)
  return (
    <div>
      <Dropdown
        visible={visible}
        onVisibleChange={visible => setVisible(visible)}
        content={
          <div>
            <div onClick={() => console.log('click')}>这是内容区</div>
            <div>这是内容区</div>
            <div>这是内容区</div>
          </div>
        }
      >
        <a href="">hover me</a>
      </Dropdown>
    </div>
  )
}
