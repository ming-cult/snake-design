import * as React from 'react'
import { Progress, Button } from 'components'

const { useState } = React

export default function Simple() {
  const [percent, setPercent] = useState(0)

  const handleClick = () => {
    let p = percent
    p = percent >= 100 ? 0 : p + 10
    setPercent(p)
  }

  return (
    <div>
      <h2>不同颜色</h2>
      <div style={{ marginTop: 20 }}>
        <Progress percent={percent} activeColor="red" />
      </div>
      <div style={{ marginTop: 20 }}>
        <Progress percent={percent} activeColor="skyblue" />
      </div>
      <div style={{ marginTop: 20 }}>
        <Progress percent={percent} activeColor="pink" />
      </div>
      <Button onClick={handleClick}>点击增加进度</Button>
    </div>
  )
}
