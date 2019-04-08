import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Icon from '../index'

describe('icon test', () => {
  it('snapshot', () => {
    const { container } = render(<Icon type="eye-close" />)
    const { container: contaner1 } = render(
      <Icon type="eye-close" size={20} color="red" rotate={90} spin={false} />
    )
    const { container: contaner2 } = render(<Icon type="eye-close" prefixCls="uni-design" />)
    expect(container.innerHTML).toMatchSnapshot()
    expect(contaner1.innerHTML).toMatchSnapshot()
    expect(contaner2.innerHTML).toMatchSnapshot()
  })
  it('fire click', () => {
    const fn = jest.fn()
    const { container } = render(<Icon type="eye-close" onClick={fn} />)
    fireEvent.click(container.firstChild as HTMLElement)
    expect(fn).toBeCalled()
  })
})
