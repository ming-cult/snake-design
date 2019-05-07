import * as React from 'react'
import { render } from 'react-testing-library'
import Portal from '../index'

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => {
      return <div>{props.in || !props.unmountOnExit ? props.children : null}</div>
    }
  }
})

describe('Portal Test', () => {
  it('snapshot when visible is false', () => {
    const { baseElement } = render(<Portal content={<div>内容区</div>}>click me</Portal>)
    expect(baseElement).toMatchSnapshot()
  })

  it('snapshot when visible is true', () => {
    const { baseElement } = render(
      <Portal visible content={<div>内容区</div>}>
        click me
      </Portal>
    )
    expect(baseElement).toMatchSnapshot()
  })
})
