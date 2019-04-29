import * as React from 'react'
import Modal from 'components/Modal/index'
import { Button } from 'components'

const confirm = Modal.confirm
const success = Modal.success
const info = Modal.info
const error = Modal.error
const warning = Modal.warning

export default function Alert() {
  return (
    <div>
      <h1>快捷调用</h1>
      <Button
        onClick={() => confirm({ content: '内容区', title: 'Do you Want to delete these items?' })}
      >
        confirm
      </Button>
      <Button
        onClick={() => info({ content: '内容区', title: 'Do you Want to delete these items?' })}
        style={{ marginLeft: 20 }}
      >
        info
      </Button>
      <Button
        onClick={() => success({ content: '内容区', title: 'Do you Want to delete these items?' })}
        style={{ marginLeft: 20 }}
      >
        success
      </Button>
      <Button
        onClick={() => error({ content: '内容区', title: 'Do you Want to delete these items?' })}
        style={{ marginLeft: 20 }}
      >
        error
      </Button>
      <Button
        onClick={() => warning({ content: '内容区', title: 'Do you Want to delete these items?' })}
        style={{ marginLeft: 20 }}
      >
        warning
      </Button>
    </div>
  )
}
