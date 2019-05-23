import * as React from 'react'
import { render } from 'react-testing-library'
import Spin from '../index'

describe('spin test', () => {
  it('snapshot with size equal normal', () => {
    const { container } = render(<Spin />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('snapshot with size equal small', () => {
    const { container } = render(<Spin size="small" />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('snapshot with children', () => {
    const { container } = render(
      <Spin>内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区</Spin>
    )

    expect(container.innerHTML).toMatchSnapshot()
  })

  it('spin with tip', () => {
    const { getByText } = render(<Spin tip="loading" />)
    expect(getByText(/loading/i)).not.toBeNull()
  })
})
