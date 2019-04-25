import * as React from 'react'
import Button from 'components/Button'
import Affix from 'components/Affix'
import './demo.scss'

const { useState } = React

function SimpleAffix() {
  const [top, setTop] = useState(0)

  return (
    <Affix offsetTop={top}>
      <Button
        type="primary"
        onClick={() => setTop((top) => top + 10)}
      >
        Affix top
        </Button>
    </Affix>
  )
}

export default SimpleAffix