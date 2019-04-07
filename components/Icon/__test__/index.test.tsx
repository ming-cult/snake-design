import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Icon from '../index'

describe('icon test', () => {
  it('snapshot', () => {
    const { container } = render(<Icon type="eye-close"/>)
    const { container: contaner1 } = render(<Icon type="eye-close" size={20} color="red"/>)
    expect(container.innerHTML).toMatchSnapshot()
    expect(contaner1.innerHTML).toMatchSnapshot()
  })
  it('fire click', () => {
    const fn = jest.fn()
    const { container } = render(<Icon type="eye-close" onClick={fn}/>)
    fireEvent.click(container.firstChild as any)
    expect(fn).toBeCalled()
  })
})