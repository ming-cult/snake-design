import * as React from 'react'
import { render } from 'react-testing-library'
import Tooltip from '../index'
import { Placement } from 'types/portal'

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => {
      return <div>{props.in || !props.unmountOnExit ? props.children : null}</div>
    }
  }
})

describe('Tooltip Test', () => {
  function PopoverDemo({
    placement = 'top',
    visible = true
  }: {
    placement?: Placement
    visible?: boolean
  }) {
    return (
      <Tooltip placement={placement} visible={visible} title={<div>内容区</div>}>
        <span>click me</span>
      </Tooltip>
    )
  }

  it('snapshot when visible is false', () => {
    const { baseElement } = render(<PopoverDemo visible={false} />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when visible is true', () => {
    const { baseElement } = render(<PopoverDemo />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot with placement is topLeft', () => {
    const { baseElement } = render(<PopoverDemo placement="topLeft" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot with placement is topRight', () => {
    const { baseElement } = render(<PopoverDemo placement="topRight" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot with placement is bottom', () => {
    const { baseElement } = render(<PopoverDemo placement="bottom" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot with placement is bottomLeft', () => {
    const { baseElement } = render(<PopoverDemo placement="bottomLeft" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot with placement is bottomRight', () => {
    const { baseElement } = render(<PopoverDemo placement="bottomRight" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot with placement is left', () => {
    const { baseElement } = render(<PopoverDemo placement="left" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot with placement is leftTop', () => {
    const { baseElement } = render(<PopoverDemo placement="leftTop" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot with placement is leftBottom', () => {
    const { baseElement } = render(<PopoverDemo placement="leftBottom" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot with placement is right', () => {
    const { baseElement } = render(<PopoverDemo placement="right" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot with placement is rightTop', () => {
    const { baseElement } = render(<PopoverDemo placement="rightTop" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot with placement is rightBottom', () => {
    const { baseElement } = render(<PopoverDemo placement="rightBottom" />)
    expect(baseElement).toMatchSnapshot()
  })
})
