import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Progress from '../index'

const { useState } = React

describe('Progress Test', () => {
  function Demo(props) {
    const [percent, setPercent] = useState(0)

    const handleClick = () => {
      let p = percent
      p = percent >= 100 ? 0 : p + 10
      setPercent(p)
    }

    return (
      <div>
        <Progress percent={percent} {...props} />
        <button onClick={handleClick}>点击增加进度</button>
      </div>
    )
  }
  it('snapshot with progress normal', () => {
    const { container } = render(<Progress />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('snapshot with color progress', () => {
    const { container } = render(<Progress activeColor="red" />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('snapshot with size large progress', () => {
    const { container } = render(<Progress size="large" />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('snapshot with size small progress', () => {
    const { container } = render(<Progress size="small" />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('snapshot with circle progress', () => {
    const { container } = render(<Progress type="circle" />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('snapshot with success progress', () => {
    const { container } = render(<Progress status="success" />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('snapshot with error progress', () => {
    const { container } = render(<Progress status="error" />)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('get correct progress', () => {
    const { getByText } = render(<Demo />)
    expect(getByText('0%')).not.toBeNull()
    const btn = getByText(/点击增加进度/i)
    fireEvent.click(btn)
    expect(getByText('10%')).not.toBeNull()
  })

  it('with text render', () => {
    const { getByText } = render(<Progress textRender={() => '成功'} type="circle" />)
    expect(getByText('成功')).not.toBeNull()
  })
})
