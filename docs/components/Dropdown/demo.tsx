import * as React from 'react'
import Dropdown from 'components/Dropdown/dropOverlay'
import { Button, Radio } from 'components'

export default function DropdownDemo() {
  const [action, setAction] = React.useState<any>('click')
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
        <Dropdown
          content={
            <div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
            </div>
          }
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block' }}
        >
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown
          content={<div>数字数字数字数字数字</div>}
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="bottom"
        >
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown
          content={<div>数字数字数字数字数字</div>}
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="bottomRight"
        >
          <Button>bottomRight</Button>
        </Dropdown>
      </div>
      <div style={{ marginTop: 50 }}>
        <Dropdown
          content={
            <div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
            </div>
          }
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block' }}
          placement="top"
        >
          <Button>top</Button>
        </Dropdown>
        <Dropdown
          content={<div>数字数字数字数字数字</div>}
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="topLeft"
        >
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown
          content={<div>数字数字数字数字数字</div>}
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="topRight"
        >
          <Button>topRight</Button>
        </Dropdown>
      </div>
      <div style={{ marginTop: 50 }}>
        <Dropdown
          content={
            <div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
            </div>
          }
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="left"
        >
          <Button>left</Button>
        </Dropdown>
        <Dropdown
          content={
            <div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
            </div>
          }
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="leftTop"
        >
          <Button>leftTop</Button>
        </Dropdown>
        <Dropdown
          content={
            <div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
            </div>
          }
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="leftBottom"
        >
          <Button>leftBottom</Button>
        </Dropdown>
      </div>
      <div style={{ marginTop: 50 }}>
        <Dropdown
          content={
            <div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
            </div>
          }
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="right"
        >
          <Button>right</Button>
        </Dropdown>
        <Dropdown
          content={
            <div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
            </div>
          }
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="rightTop"
        >
          <Button>rightTop</Button>
        </Dropdown>
        <Dropdown
          content={
            <div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
              <div>数字数字数字数字数字</div>
            </div>
          }
          trigger={action}
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="rightBottom"
        >
          <Button>rightBottom</Button>
        </Dropdown>
      </div>
    </div>
  )
}
