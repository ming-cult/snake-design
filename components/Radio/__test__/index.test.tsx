import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Radio from '../index'

const RadioItem = Radio.item

describe('radio test', () => {
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
    const radioItem = render(<RadioItem />)
    const checkedRadioItem = render(<RadioItem checked />)
    const disabledRadioItem = render(<RadioItem disabled />)
    const radio = render(<Radio options={options} value="basketball" />)
    const disabledRadio = render(<Radio options={options} value="" disabled />)
    const buttonRadioOutline = render(<Radio options={options} value="" shape="button" />)
    const buttonRadioSolid = render(
      <Radio options={options} value="" shape="button" buttonStyle="outline" />
    )
    expect(radioItem.container.innerHTML).toMatchSnapshot()
    expect(checkedRadioItem.container.innerHTML).toMatchSnapshot()
    expect(disabledRadioItem.container.innerHTML).toMatchSnapshot()
    expect(radio.container.innerHTML).toMatchSnapshot()
    expect(disabledRadio.container.innerHTML).toMatchSnapshot()
    expect(buttonRadioOutline.container.innerHTML).toMatchSnapshot()
    expect(buttonRadioSolid.container.innerHTML).toMatchSnapshot()
  })

  it('fire change', () => {
    function RadioDemo() {
      const [checked, setChecked] = React.useState(false)
      return (
        <RadioItem checked={checked} onChange={checked => setChecked(checked)}>
          测试
        </RadioItem>
      )
    }
    const { getByText } = render(<RadioDemo />)
    const radioNode = getByText(/测试/i).previousSibling.firstChild as HTMLInputElement
    fireEvent.click(radioNode)
    expect(radioNode.checked).toBe(true)
  })

  it('radio group', () => {
    render(<Radio options={options} value="" />)
    const radioItem = document.querySelectorAll('.snake-radio-item')
    expect(radioItem.length).toBe(4)
  })

  it('fire group change', () => {
    function Group() {
      const [value, setValue] = React.useState<string>('basketball')
      return <Radio options={options} value={value} onChange={(value: string) => setValue(value)} />
    }
    const { getByText } = render(<Group />)
    const secondNode = getByText(/足球/i).previousSibling.firstChild as HTMLInputElement
    fireEvent.click(secondNode)
    expect(secondNode.checked).toBe(true)
  })
})
