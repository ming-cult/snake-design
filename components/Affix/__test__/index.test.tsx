import * as React from 'react'
// import { render, fireEvent } from 'react-testing-library'
import { render } from 'react-testing-library'
import Affix from '../index'

describe('render Affix', () => {
  it('render default', () => {
    const { container } = render(<Affix offsetTop={0}>Affix Top</Affix>)
    expect(container).toMatchSnapshot()
  })
  it('fire scroll', () => {
    const { getByText } = render(<Affix offsetTop={0}>Affix Top</Affix>)
    // fireEvent.scroll(window, {
    //   top: 0
    // })

    expect(getByText('Affix Top').parentNode.parentNode).toHaveStyle('position: relative')
  })
})
