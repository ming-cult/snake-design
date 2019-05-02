import * as React from 'react'
import Button from 'components/Button'
import Affix from 'components/Affix'
import './demo.scss'

const { useState } = React

function SimpleAffix() {
  const [top, setTop] = useState(100)
  const [bottom, setBottom] = useState(100)
  let container1, container2

  return (
    <>
      <h3>基础用法</h3>
      <p>最简单的用法。</p>
      <Affix
        offsetTop={top}
        style={{ marginTop: 10 }}
      >
        <Button
          type="primary"
          onClick={() => setTop((top: number) => top + 10)}
        >
          Affix Top
        </Button>
      </Affix>
      <Affix
        offsetBottom={bottom}
        style={{ marginTop: 10 }}
      >
        <Button
          type="primary"
          onClick={() => setBottom((bottom: number) => bottom + 10)}
        >
          Affix Bottom
        </Button>
      </Affix>
      <h3>固定状态改变的回调</h3>
      <p>可以获得是否固定的状态。</p>
      <Affix
        offsetTop={150}
        onChange={affixed => console.log(affixed)}
      >
        <Button
          type="primary"
        >
          150px to affix top
        </Button>
      </Affix>
      <h3>滚动容器</h3>
      <p>用 target 设置 Affix 需要监听其滚动事件的元素，默认为 window。</p>
      <div className="scrollable-container" ref={(node) => { container1 = node; }}>
        <div className="background1">
          <Affix target={() => container1} offsetTop={0}>
            <Button type="primary">
              Fixed at the top of container
            </Button>
          </Affix>
        </div>
      </div>
      <div className="scrollable-container" ref={(node) => { container2 = node; }} style={{ marginTop: 10 }}>
        <div className="background2">
          <Affix target={() => container2} offsetBottom={0}>
            <Button type="primary">
              Fixed at the Bottom of container
            </Button>
          </Affix>
        </div>
      </div>
    </>
  )
}

export default SimpleAffix