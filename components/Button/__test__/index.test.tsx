import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Button from '../index'
import Icon from '../../Icon'

describe('render button', () => {
  it('render default', () => {
    const wrapper = render(<Button />)
    expect(wrapper.container).toMatchSnapshot()
  })
  it('render button with children', () => {
    const childrenBtn = render(<Button>确认</Button>)
    expect(childrenBtn.container).toMatchSnapshot()
  })
  it('render button with type-icon', () => {
    const iconBtn = render(<Button icon="eye-close">闭眼啦</Button>)
    expect(iconBtn.container).toMatchSnapshot()
  })
  it('render button with child-icon', () => {
    const iconBtn = render(
      <Button>
        <Icon type="eye-close" />
        闭眼啦
      </Button>
    )
    expect(iconBtn.container).toMatchSnapshot()
  })
})

describe('render text button', () => {
  it('render only text', () => {
    const wrapper = render(<Button text>文字</Button>)
    expect(wrapper.container).toMatchSnapshot()
  })
})

describe('onClick event', () => {
  const fn = jest.fn()
  it('onClick should not work when loading', () => {
    const { getByText, queryByText } = render(
      <Button loading onClick={fn}>
        点击按钮
      </Button>
    )
    expect(queryByText('点击按钮')).toBeTruthy()
    fireEvent.click(getByText('点击按钮'))
    expect(fn).not.toBeCalled()
  })
  it('onClick should not work when disabled', () => {
    const { getByText, queryByText } = render(
      <Button disabled onClick={fn}>
        点击按钮
      </Button>
    )
    expect(queryByText('点击按钮')).toBeTruthy()
    fireEvent.click(getByText('点击按钮'))
    expect(fn).not.toBeCalled()
  })
  it('onClick should be fired', () => {
    const { getByText, queryByText } = render(<Button onClick={fn}>点击按钮</Button>)
    expect(queryByText('点击按钮')).toBeTruthy()
    fireEvent.click(getByText('点击按钮'))
    expect(fn).toBeCalled()
  })
})
