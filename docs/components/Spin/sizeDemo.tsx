import * as React from 'react'
import { Spin } from 'components'

export default function SizeDemo() {
  return (
    <div>
      <div>
        <Spin size="normal" />
        <div>正常尺寸</div>
      </div>
      <div>
        <Spin size="small" />
        <div>小尺寸</div>
      </div>
    </div>
  )
}
