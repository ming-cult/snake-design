import * as React from 'react'
import { Select } from 'components'

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
  // const [checked, setChecked] = React.useState(false)
  const [value, setValue] = React.useState()
  // console.log(value)
  return (
    <div>
      <Select
        options={options}
        style={{
          width: 200
        }}
        mode="multiple"
        value={value}
        onChange={val => setValue(val)}
      />
    </div>
  )
}
