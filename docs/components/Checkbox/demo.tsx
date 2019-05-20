import * as React from 'react'
import { Checkbox } from 'components'

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

export default function CheckboxDemo() {
  const [checked, setChecked] = React.useState(false)
  const [value, setValue] = React.useState([])
  console.log(value)
  return (
    <div>
      <h3>基础用法</h3>
      <CheckboxItem checked={checked} onChange={checked => setChecked(checked)}>
        点击选择
      </CheckboxItem>
      <h3>不可用</h3>
      <CheckboxItem checked disabled>
        点击选择
      </CheckboxItem>
      <Checkbox disabled>点击选择</Checkbox>
      <h3>group 用法</h3>
      <div>
        <CheckboxItem indeterminate={value.length && value.length < 4} checked={value.length === 4}>
          全部
        </CheckboxItem>
      </div>
      <Checkbox options={options} value={value} onChange={value => setValue(value)} />
    </div>
  )
}
