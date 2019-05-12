import * as React from 'react'
import { Button, Radio, Dropdown } from 'components'

import './index.scss'

export default function DropdownDemo() {
  const [action, setAction] = React.useState<any>('click')
  const [visible, setVisible] = React.useState(false)
  const [direction, setDirection] = React.useState<any>('bottomLeft')
  return (
    <div>
      <div>
        <Radio
          options={[{ label: 'click', value: 'click' }, { label: 'hover', value: 'hover' }]}
          value={action}
          onChange={(value: string) => setAction(value)}
        />
      </div>
      <div>
        <Radio
          options={[
            { label: 'bottomLeft', value: 'bottomLeft' },
            { label: 'bottom', value: 'bottom' },
            { label: 'bottomRight', value: 'bottomRight' },
            { label: 'topLeft', value: 'topLeft' },
            { label: 'top', value: 'top' },
            { label: 'topRight', value: 'topRight' }
          ]}
          value={direction}
          onChange={(value: string) => setDirection(value)}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <Dropdown
          content={
            <div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
            </div>
          }
          visible={visible}
          trigger={action}
          placement={direction}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block' }}
          onVisibleChange={visible => {
            setVisible(visible)
          }}
        >
          <Button>{direction}</Button>
        </Dropdown>
      </div>
    </div>
  )
}
