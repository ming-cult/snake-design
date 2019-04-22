import * as React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent } from 'react-testing-library'
import Overlay from '../index'

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => {
      return <div>{props.in || !props.unmountOnExit ? props.children : null}</div>
    }
  }
})

describe('overlay test', () => {
  it('snapshot', () => {
    const overlayHide = render(<Overlay visible={false}>内容区</Overlay>)
    const overlayShow = render(<Overlay visible>内容</Overlay>)
    const overlayHeader = render(<Overlay header={<div>头部</div>} />)
    const overlayFooter = render(<Overlay footer={<div>底部</div>} />)
    const overlayClosable = render(<Overlay closable={false}>内容</Overlay>)
    expect(overlayHide.container).toMatchSnapshot()
    expect(overlayShow.container).toMatchSnapshot()
    expect(overlayHeader.container).toMatchSnapshot()
    expect(overlayFooter.container).toMatchSnapshot()
    expect(overlayClosable.container).toMatchSnapshot()
  })

  it('portal in body', () => {
    const { getByText, rerender, queryByText } = render(
      <Overlay visible>
        <div>test</div>
      </Overlay>
    )
    expect(getByText('test')).toBeInTheDocument()
    rerender(
      <Overlay visible={false}>
        <div>test</div>
      </Overlay>
    )
    expect(queryByText('test')).not.toBeInTheDocument()
  })

  it('fire click', () => {
    function OverlayDemo() {
      const [visible, setVisible] = React.useState(false)
      return (
        <div>
          <Overlay visible={visible} onClose={() => setVisible(false)}>
            <div>test</div>
          </Overlay>
          <button onClick={() => setVisible(true)}>点击显示</button>
        </div>
      )
    }
    const { getByText, queryByText } = render(<OverlayDemo />)
    const btn = getByText(/点击显示/i)
    fireEvent.click(btn)
    expect(getByText('test')).toBeInTheDocument()
    const wrapperNode = queryByText('test').parentNode.parentNode.parentNode as HTMLElement
    fireEvent.click(wrapperNode)
    expect(queryByText('test')).not.toBeInTheDocument()
  })

  it('not destroy', () => {
    function OverlayDemo() {
      const [visible, setVisible] = React.useState(false)
      return (
        <div>
          <Overlay visible={visible} onClose={() => setVisible(false)} destroy={false}>
            <div>test</div>
          </Overlay>
          <button onClick={() => setVisible(true)}>点击显示</button>
        </div>
      )
    }
    const { getByText, queryByText } = render(<OverlayDemo />)
    const btn = getByText(/点击显示/i)
    fireEvent.click(btn)
    expect(getByText('test')).toBeInTheDocument()
    const wrapperNode = queryByText('test').parentNode.parentNode.parentNode as HTMLElement
    fireEvent.click(wrapperNode)
    expect(getByText(/test/i)).toBeInTheDocument()
  })

  it('no mask', () => {
    render(
      <Overlay hasMask={false} visible>
        内容区
      </Overlay>
    )
    const maskNode = document.querySelector('.snake-overlay-mask')
    expect(maskNode).not.toBeInTheDocument()
  })
})
