import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import BackTop from '../index'

describe('BackTop Test', () => {
  it('snapshot without children', () => {
    const { container } = render(<BackTop />)
    expect(container).toMatchSnapshot()
  })

  it('snapshot with children', () => {
    const { container } = render(
      <BackTop>
        <div>回到顶部</div>
      </BackTop>
    )
    expect(container).toMatchSnapshot()
  })

  it('click backTop back to the top', () => {
    const { getByText } = render(<BackTop>回到顶部</BackTop>)
    document.documentElement.scrollTop = 500
    fireEvent.scroll(window)
    const back = getByText(/回到顶部/i) as HTMLElement
    fireEvent.click(back)
    expect(document.documentElement.scrollTop).toBe(0)
  })
})
