import * as React from 'react'
import Code from '../../layout/prism/index'
import { Radio, Layout } from 'components'
import {
  JustifyType,
  DirectionType,
  AlignType,
  directions,
  justifies,
  aligns
} from 'types/layout.d'
import { rowDefaultProps } from 'components/Layout/Row'
import './index.scss'

const { Row, Col } = Layout

const { useState } = React

const mapOptions = (arr: (string | number)[]) =>
  arr.map((item: string | number) => ({
    label: item,
    value: item
  }))

export default function Demo() {
  const [direction, setDirection] = useState(rowDefaultProps.direction)
  const [justify, setJustify] = useState(rowDefaultProps.justify)
  const [align, setAlign] = useState(rowDefaultProps.align)
  const [size, setSize] = useState('none')
  const [gutter, setGutter] = useState(8)
  console.log('size', size)

  const handleJustify = (val: JustifyType) => {
    console.log(' handleJustify size', size)
    setJustify(val)
    if ((size as any) === 8) setSize('none')
  }
  return (
    <div className="snake-layout-demo">
      <h3>基础用法</h3>
      <Row
        className="snake-layout-demo-options"
        align="middle"
        style={{
          flexWrap: 'wrap'
        }}
        colProps={{
          margin: '0 0 10px 0'
        }}
      >
        <Col style={{ width: 400 }}>
          <span>排列方向（direction）</span>
          <Radio
            options={mapOptions(directions)}
            value={direction}
            onChange={(val: DirectionType) => setDirection(val)}
            shape="button"
          />
        </Col>
        <Col>
          <span>主轴对齐方式（justify）</span>
          <Radio options={mapOptions(justifies)} value={justify} onChange={handleJustify} />
        </Col>
        <Col>
          <span>次轴对齐方式（align）</span>
          <Radio
            options={mapOptions(aligns)}
            value={align}
            onChange={(val: AlignType) => setAlign(val)}
          />
        </Col>
        <Col>
          <span>每个元素的尺寸（size）</span>
          <Radio
            options={mapOptions(['none', 4, 6, 8])}
            value={size}
            onChange={(val: any) => setSize(val)}
          />
        </Col>
        <Col>
          <span>每个元素之间的距离（gutter）</span>
          <Radio
            options={mapOptions([8, 16, 24, 48])}
            value={gutter}
            onChange={(val: any) => setGutter(val)}
          />
        </Col>
      </Row>

      <Row
        gutter={gutter}
        padding={10}
        margin={4}
        direction={direction as DirectionType}
        justify={justify as JustifyType}
        align={align as AlignType}
        className="snake-layout-demo-playground"
        style={{
          height: 350,
          border: '1px solid #f0f0f0'
        }}
        colProps={{
          ...(typeof size === 'number' ? { size } : {})
        }}
      >
        <Col>
          <div className="snake-layout-demo-col-child w-100 h-50">size-{size}</div>
        </Col>
        <Col offset={8}>
          <div className="snake-layout-demo-col-child w-120 h-100">size-{size}</div>
        </Col>
        <Col offset={8}>
          <div className="snake-layout-demo-col-child w-80 h-30">size-{size}</div>
        </Col>
      </Row>
      <Code>
        {`
      <Row
        gutter="${gutter}"
        direction="${direction}"
        justify="${justify}"
        align="${align}"
        colProps={{
          ...(typeof size === 'number' ? { size } : {})
        }}
      >
        <Col${typeof size === 'number' ? ` size={` + size + '}' : ''}>
          <div>size-${size}</div>
        </Col>
        <Col offset={${8}}>
          <div>size-${size}</div>
        </Col>
        <Col offset={${8}}>
          <div>size-${size}</div>
        </Col>
      </Row>`}
      </Code>
    </div>
  )
}
