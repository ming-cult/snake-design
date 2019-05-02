import * as React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent } from 'react-testing-library'
import Modal from '../index'
import BasicModal from '../../../docs/components/Modal/basicModal'
import Alert from '../../../docs/components/Modal/alert'

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => {
      return <div>{props.in || !props.unmountOnExit ? props.children : null}</div>
    }
  }
})

describe('Modal Test', () => {
  it('modal visible snapshot', () => {
    const { baseElement } = render(<Modal visible>内容区</Modal>)
    expect(baseElement).toMatchSnapshot()
  })

  it('modal without footer', () => {
    const { baseElement } = render(
      <Modal visible footer={null}>
        内容区
      </Modal>
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('modal visible = false', () => {
    const { baseElement } = render(<Modal>内容区</Modal>)
    expect(baseElement).toMatchSnapshot()
  })

  it('click ok or cancel modal fade', () => {
    const { getByText, queryByText } = render(<BasicModal />)
    const btn = getByText(/基础用法/i) as HTMLButtonElement
    fireEvent.click(btn)
    expect(getByText(/基础modal内容区/i)).toBeInTheDocument()
    const okBtn = getByText(/确定/i) as HTMLButtonElement
    fireEvent.click(okBtn)
    expect(queryByText(/基础modal内容区/i)).not.toBeInTheDocument()
    fireEvent.click(btn)
    expect(getByText(/基础modal内容区/i)).toBeInTheDocument()
    const cancelBtn = getByText(/取消/i) as HTMLButtonElement
    fireEvent.click(cancelBtn)
    expect(queryByText(/基础modal内容区/i)).not.toBeInTheDocument()
  })

  it('custom btn', () => {
    const { getByText } = render(
      <Modal visible okText="自定义确认" cancelText="自定义取消">
        内容区
      </Modal>
    )
    expect(getByText(/自定义确认/i)).not.toBeNull()
    expect(getByText(/自定义取消/i)).not.toBeNull()
  })

  it('Modal confirm', () => {
    const { getByText, queryByText } = render(<Alert />)
    const btn = getByText(/confirm/i) as HTMLButtonElement
    fireEvent.click(btn)
    expect(getByText(/confirm内容区/i)).toBeInTheDocument()
    const okBtn = getByText(/确认/i) as HTMLButtonElement
    fireEvent.click(okBtn)
    process.nextTick(() => {
      expect(queryByText(/confirm内容区/i)).not.toBeInTheDocument()
    })
    fireEvent.click(btn)
    const cancelBtn = getByText(/取消/i) as HTMLButtonElement
    fireEvent.click(cancelBtn)
    process.nextTick(() => {
      expect(queryByText(/confirm内容区/i)).not.toBeInTheDocument()
    })
  })

  it('Modal info', () => {
    const { getByText } = render(<Alert />)
    const btn = getByText(/info/i) as HTMLButtonElement
    fireEvent.click(btn)
    expect(getByText(/info内容区/i)).toBeInTheDocument()
  })

  it('Modal success', () => {
    const { getByText } = render(<Alert />)
    const btn = getByText(/success/i) as HTMLButtonElement
    fireEvent.click(btn)
    expect(getByText(/success内容区/i)).toBeInTheDocument()
  })

  it('Modal warning', () => {
    const { getByText } = render(<Alert />)
    const btn = getByText(/warning/i) as HTMLButtonElement
    fireEvent.click(btn)
    expect(getByText(/warning内容区/i)).toBeInTheDocument()
  })

  it('Modal error', () => {
    const { getByText } = render(<Alert />)
    const btn = getByText(/error/i) as HTMLButtonElement
    fireEvent.click(btn)
    expect(getByText(/error内容区/i)).toBeInTheDocument()
  })
})
