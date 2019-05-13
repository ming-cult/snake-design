import * as React from 'react'
import { render } from 'react-testing-library'
import Dropdown from '../index'
import { Placement } from 'types/dropdown'

describe('Dropdown Test', () => {
  function DropdownDemo({
    placement = 'bottomLeft',
    visible = true
  }: {
    placement?: Placement
    visible?: boolean
  }) {
    return (
      <Dropdown placement={placement} visible={visible} content={<div>内容区</div>}>
        <span>click me</span>
      </Dropdown>
    )
  }

  it('snapshot when visible is true', () => {
    const { baseElement } = render(<DropdownDemo />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when visible is false', () => {
    const { baseElement } = render(<DropdownDemo visible={false} />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is bottom', () => {
    const { baseElement } = render(<DropdownDemo placement="bottom" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is bottomRight', () => {
    const { baseElement } = render(<DropdownDemo placement="bottomRight" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is top', () => {
    const { baseElement } = render(<DropdownDemo placement="top" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is topLeft', () => {
    const { baseElement } = render(<DropdownDemo placement="topLeft" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is topRight', () => {
    const { baseElement } = render(<DropdownDemo placement="topRight" />)
    expect(baseElement).toMatchSnapshot()
  })
})
