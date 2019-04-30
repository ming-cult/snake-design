import * as React from 'react'
import Modal from 'components/Modal/index'
import { Button } from 'components'

const confirm = Modal.confirm
const success = Modal.success
const info = Modal.info
const error = Modal.error
const warning = Modal.warning

export default function Alert() {
  const closeRef = React.useRef<any>()
  return (
    <div>
      <h1>快捷调用</h1>
      <Button
        onClick={() => {
          closeRef.current = confirm({
            content: 'confirm内容区',
            title: 'Do you Want to delete these items?'
          })
          setTimeout(() => {
            closeRef.current.close()
          }, 4000)
        }}
      >
        confirm
      </Button>
      <Button
        onClick={() => info({ content: 'info内容区', title: 'Do you Want to delete these items?' })}
        style={{ marginLeft: 20 }}
      >
        info
      </Button>
      <Button
        onClick={() =>
          success({ content: 'success内容区', title: 'Do you Want to delete these items?' })
        }
        style={{ marginLeft: 20 }}
      >
        success
      </Button>
      <Button
        onClick={() =>
          error({ content: 'error内容区', title: 'Do you Want to delete these items?' })
        }
        style={{ marginLeft: 20 }}
      >
        error
      </Button>
      <Button
        onClick={() =>
          warning({ content: 'warning内容区', title: 'Do you Want to delete these items?' })
        }
        style={{ marginLeft: 20 }}
      >
        warning
      </Button>
    </div>
  )
}
