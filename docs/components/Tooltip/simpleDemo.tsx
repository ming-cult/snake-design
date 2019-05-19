import * as React from 'react'
import { Tooltip, Button, Radio } from 'components'

export default function SimpleDemo() {
  const [visible, setVisible] = React.useState(false)
  const [direction, setDirection] = React.useState<any>('top')
  const [action, setAction] = React.useState<any>('click')
  return (
    <div style={{ marginTop: 20 }}>
      <Tooltip
        visible={visible}
        onVisibleChange={visible => setVisible(visible)}
        title="内容内容区内容"
        wrapperComponent="div"
        wrapperStyle={{ display: 'inline-block' }}
        trigger={action}
        placement={direction}
      >
        <Button>点击我</Button>
      </Tooltip>
      <div style={{ marginTop: 100 }}>
        <Radio
          options={[
            { label: 'bottomLeft', value: 'bottomLeft' },
            { label: 'bottom', value: 'bottom' },
            { label: 'bottomRight', value: 'bottomRight' },
            { label: 'topLeft', value: 'topLeft' },
            { label: 'top', value: 'top' },
            { label: 'topRight', value: 'topRight' },
            { label: 'left', value: 'left' },
            { label: 'leftTop', value: 'leftTop' },
            { label: 'leftBottom', value: 'leftBottom' },
            { label: 'right', value: 'right' },
            { label: 'rightTop', value: 'rightTop' },
            { label: 'rightBottom', value: 'rightBottom' }
          ]}
          value={direction}
          onChange={(value: string) => setDirection(value)}
        />
      </div>
      <div>
        <Radio
          options={[{ label: 'click', value: 'click' }, { label: 'hover', value: 'hover' }]}
          value={action}
          onChange={(value: string) => setAction(value)}
        />
      </div>
    </div>
  )
}
