import * as React from 'react'
import { render } from 'react-testing-library'
import Button from '../index'
import Icon from '../../Icon'

describe('render button', () => {
  it('render default', () => {
    const wrapper = render(<Button />)
    expect(wrapper).toMatchSnapshot()
  })
  it('render button with children', () => {
    const childrenBtn = render(<Button>确认</Button>)
    expect(childrenBtn).toMatchSnapshot()
  })
  it('render button with icon', () => {
    const iconBtn = render(<Button icon="eye-close">闭眼啦</Button>)
    expect(iconBtn).toMatchSnapshot()
    const iconChild = render(
      <Button>
        <Icon type="eye-close" />
      </Button>
    )
    expect(iconChild).toMatchSnapshot()
    const loadingBtn = render(<Button loading />)
    expect(loadingBtn).toMatchSnapshot()
  })
})

describe('button has correct class', () => {
  it('should have snake-button', () => {
    const { container: wrapper } = render(<Button />)
    const button = wrapper.firstChild as HTMLElement
    expect(button.classList.contains('snake-button')).toBe(true)
  })

  it('should have snake-button-default', () => {
    const { container: wrapper } = render(<Button>确定</Button>)
    const button = wrapper.firstChild as HTMLElement
    expect(button.classList.contains('snake-button-default')).toBe(true)
  })
  it('should have snake-button-small', () => {
    const { container: wrapper } = render(<Button size="small">确定</Button>)
    const button = wrapper.firstChild as HTMLElement
    expect(button.classList.contains('snake-button-small')).toBe(true)
  })
  it('should have snake-button-large', () => {
    const { container: wrapper } = render(<Button size="large">确定</Button>)
    const button = wrapper.firstChild as HTMLElement
    expect(button.classList.contains('snake-button-large')).toBe(true)
  })

  it('should have snake-button-btn-primary', () => {
    const { container: wrapper } = render(<Button type="primary">确定</Button>)
    const button = wrapper.firstChild as HTMLElement
    expect(button.classList.contains('snake-button-btn-primary')).toBe(true)
  })
  it('should have snake-button-btn-gray', () => {
    const { container: wrapper } = render(<Button type="gray">确定</Button>)
    const button = wrapper.firstChild as HTMLElement
    expect(button.classList.contains('snake-button-btn-gray')).toBe(true)
  })
  it('should have snake-button-btn-warn', () => {
    const { container: wrapper } = render(<Button type="warn">确定</Button>)
    const button = wrapper.firstChild as HTMLElement
    expect(button.classList.contains('snake-button-btn-warn')).toBe(true)
  })
})

describe('render text button', () => {
  it('render only text', () => {
    const wrapper = render(<Button text>文字</Button>)
    expect(wrapper).toMatchSnapshot()
  })
})
