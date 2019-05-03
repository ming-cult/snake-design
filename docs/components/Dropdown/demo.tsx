import * as React from 'react'
import Dropdown from 'components/Dropdown/dropOverlay'
import { Button } from 'components'

export default function DropdownDemo() {
  return (
    <div>
      <div>
        <Dropdown
          content={<div>数字数字数字数字数字</div>}
          trigger="click"
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block' }}
        >
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown
          content={<div>数字数字数字数字数字</div>}
          trigger="click"
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="bottom"
        >
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown
          content={<div>数字数字数字数字数字</div>}
          trigger="click"
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="bottomRight"
        >
          <Button>bottomRight</Button>
        </Dropdown>
      </div>
      <div style={{ marginTop: 50 }}>
        <Dropdown
          content={<div>数字数字数字数字数字</div>}
          trigger="click"
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block' }}
          placement="top"
        >
          <Button>top</Button>
        </Dropdown>
        <Dropdown
          content={<div>数字数字数字数字数字</div>}
          trigger="click"
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="topLeft"
        >
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown
          content={<div>数字数字数字数字数字</div>}
          trigger="click"
          wrapperComponent="div"
          wrapperStyle={{ display: 'inline-block', marginLeft: 100 }}
          placement="topRight"
        >
          <Button>topRight</Button>
        </Dropdown>
      </div>
    </div>
  )
}
