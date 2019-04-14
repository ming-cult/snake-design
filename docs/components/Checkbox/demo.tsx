import * as React from 'react'
import { CheckboxGroup } from 'components'

const Checkbox = CheckboxGroup.checkbox
const options = [{
  label: '篮球',
  value: 'basketball'
}, {
  label: '足球',
  value: 'football'
}, {
  label: '滑板',
  value: 'skateboard'
}, {
  label: '跳伞',
  value: 'parachute'
}]

export default function CheckboxDemo() {
  const [checked, setChecked] = React.useState(false)
  const [value, setValue] = React.useState([])
  console.log(value)
  return (
    <div style={{ padding: 20 }}>
      <h3>基础用法</h3>
      <Checkbox checked={checked} onChange={checked => setChecked(checked)}>点击选择</Checkbox>
      <h3>不可用</h3>
      <Checkbox checked disabled>点击选择</Checkbox>
      <Checkbox disabled>点击选择</Checkbox>
      <h3>group 用法</h3>
      <div><Checkbox indeterminate={value.length && value.length < 4} checked={value.length === 4}>全部</Checkbox></div>
      <CheckboxGroup options={options} value={value} onChange={value => setValue(value)}/>
    </div>
  )
}
