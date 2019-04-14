import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Checkbox from '../index'

describe('checkbox test', () => {
  const CheckboxItem = Checkbox.item
  const options = [
    {
      label: '篮球',
      value: 'basketball'
    },
    {
      label: '足球',
      value: 'football'
    },
    {
      label: '滑板',
      value: 'skateboard'
    },
    {
      label: '跳伞',
      value: 'parachute'
    }
  ]

  it('snapshot', () => {
    const checked = render(<CheckboxItem checked>选中</CheckboxItem>)
    const notChecked = render(<CheckboxItem>未选中</CheckboxItem>)
    const disabled = render(<CheckboxItem disabled>不可用</CheckboxItem>)
    const indent = render(<CheckboxItem indeterminate>半选</CheckboxItem>)
    expect(checked.container.innerHTML).toMatchSnapshot()
    expect(notChecked.container.innerHTML).toMatchSnapshot()
    expect(disabled.container.innerHTML).toMatchSnapshot()
    expect(indent.container.innerHTML).toMatchSnapshot()
  })

  it('fire change', () => {
    function CheckDemo() {
      const [checked, setChecked] = React.useState(false)
      return (
        <CheckboxItem checked={checked} onChange={checked => setChecked(checked)}>
          测试demo
        </CheckboxItem>
      )
    }
    const { getByText } = render(<CheckDemo />)
    const inputNode = getByText(/测试demo/i).previousSibling.firstChild as HTMLInputElement
    expect(inputNode.checked).toBe(false)
    fireEvent.click(inputNode)
    expect(inputNode.checked).toBe(true)
  })

  it('checkbox group', () => {
    const { container } = render(<Checkbox options={options} />)
    expect(container.firstChild.childNodes.length).toBe(4)
  })

  it('fire group change', () => {
    function GroupDemo() {
      const [value, setValue] = React.useState([])
      return <Checkbox value={value} onChange={value => setValue(value)} options={options} />
    }
    const { getByText } = render(<GroupDemo />)
    const baskNode = getByText(/篮球/i).previousSibling.firstChild as HTMLInputElement
    fireEvent.click(baskNode)
    expect(baskNode.checked).toBe(true)
    fireEvent.click(baskNode)
    expect(baskNode.checked).toBe(false)
  })

  it('disabled checkbox', () => {
    const fn = jest.fn()
    const { getByText } = render(
      <Checkbox disabled onChange={fn}>
        测试
      </Checkbox>
    )
    const inputNode = getByText(/测试/i).previousSibling.firstChild as HTMLInputElement
    fireEvent.click(inputNode)
    expect(fn).not.toBeCalled()
  })
})
