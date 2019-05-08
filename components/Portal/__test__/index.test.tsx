import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Portal from '../index'
import { Placement, Trigger } from 'types/portal'

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => {
      return <div>{props.in || !props.unmountOnExit ? props.children : null}</div>
    }
  }
})

describe('Portal Test', () => {
  function PortalDemo({
    placement = 'bottomLeft',
    visible = true,
    disabled = false,
    destroy = true,
    trigger = 'click'
  }: {
    placement?: Placement
    visible?: boolean
    disabled?: boolean
    destroy?: boolean
    trigger?: Trigger
  }) {
    const [show, setShow] = React.useState(visible)
    return (
      <Portal
        visible={show}
        content={<div>内容区</div>}
        placement={placement}
        onVisibleChange={show => setShow(show)}
        trigger={trigger}
        disabled={disabled}
        destroy={destroy}
      >
        <span>click me</span>
      </Portal>
    )
  }
  it('snapshot when visible is false', () => {
    const { baseElement } = render(
      <Portal content={<div>内容区</div>}>
        <span>click me</span>
      </Portal>
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when visible is true', () => {
    const { baseElement } = render(<PortalDemo />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is bottom', () => {
    const { baseElement } = render(<PortalDemo placement="bottom" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is bottomLeft', () => {
    const { baseElement } = render(<PortalDemo placement="bottomLeft" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is bottomRight', () => {
    const { baseElement } = render(<PortalDemo placement="bottomRight" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is top', () => {
    const { baseElement } = render(<PortalDemo placement="top" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is topLeft', () => {
    const { baseElement } = render(<PortalDemo placement="topLeft" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is topRight', () => {
    const { baseElement } = render(<PortalDemo placement="topRight" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is left', () => {
    const { baseElement } = render(<PortalDemo placement="left" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is leftTop', () => {
    const { baseElement } = render(<PortalDemo placement="leftTop" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is leftBottom', () => {
    const { baseElement } = render(<PortalDemo placement="leftBottom" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is right', () => {
    const { baseElement } = render(<PortalDemo placement="right" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is rightTop', () => {
    const { baseElement } = render(<PortalDemo placement="rightTop" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when placement is rightBottom', () => {
    const { baseElement } = render(<PortalDemo placement="rightBottom" />)
    expect(baseElement).toMatchSnapshot()
  })

  it('disabled overlay', () => {
    const { getByText, queryByText } = render(<PortalDemo visible={false} disabled />)
    const btn = getByText(/click me/i)
    fireEvent.click(btn)
    expect(queryByText(/内容区/i)).not.toBeInTheDocument()
  })

  it('click show overlay', () => {
    const { getByText, queryByText } = render(<PortalDemo visible={false} />)
    const btn = getByText(/click me/i)
    fireEvent.click(btn)
    expect(queryByText(/内容区/i)).toBeInTheDocument()
    fireEvent.click(queryByText(/内容区/i))
    expect(queryByText(/内容区/i)).not.toBeInTheDocument()
  })

  it('overlay exist with destroy is false', () => {
    const { getByText, queryByText } = render(<PortalDemo visible={false} destroy={false} />)
    const btn = getByText(/click me/i)
    fireEvent.click(btn)
    expect(queryByText(/内容区/i)).toBeInTheDocument()
    fireEvent.click(queryByText(/内容区/i))
    expect(queryByText(/内容区/i)).toBeInTheDocument()
  })
})
