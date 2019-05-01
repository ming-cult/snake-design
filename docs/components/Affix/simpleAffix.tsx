import * as React from 'react'
import Button from 'components/Button'
import Affix from 'components/Affix'
import './demo.scss'

const { useState } = React

function SimpleAffix() {
  const [top, setTop] = useState(120)

  return (
    <Affix
      container={document.getElementsByClassName('at-markdown')[0]}
      offsetTop={top}
    >
      <Button
        type="primary"
        onClick={() => setTop((top: number) => top + 10)}
      >
        Affix Top
      </Button>
    </Affix>
  )
}

export default SimpleAffix