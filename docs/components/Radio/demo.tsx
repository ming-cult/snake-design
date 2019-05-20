import * as React from 'react'
import { Radio } from 'components'

const RadioItem = Radio.item

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

export default function RadioDemo() {
  const [checked, setChecked] = React.useState(false)
  const [value, setValue] = React.useState('basketball')
  console.log(value)
  return (
    <div>
      <h3>基础用法</h3>
      <RadioItem checked={checked} onChange={checked => setChecked(checked)}>
        点击选择
      </RadioItem>
      <h3>不可用</h3>
      <RadioItem checked disabled>
        点击选择
      </RadioItem>
      <RadioItem disabled>点击选择</RadioItem>
      <h3>group 用法</h3>
      <Radio options={options} value={value} onChange={(value: string) => setValue(value)} />
    </div>
  )
}
