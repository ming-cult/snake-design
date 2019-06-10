import * as React from 'react'
import { render } from 'react-testing-library'
import Select from '../index'

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
describe('render select', () => {
  it('render default', () => {
    const wrapper = render(<Select options={options} />)
    expect(wrapper.container).toMatchSnapshot()
  })
})
