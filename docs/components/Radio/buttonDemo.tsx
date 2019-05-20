import * as React from 'react'
import { Radio } from 'components'

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
  const [value, setValue] = React.useState('basketball')
  console.log(value)
  return (
    <div>
      <h3>填充</h3>
      <Radio
        options={options}
        value={value}
        onChange={(value: string) => setValue(value)}
        shape="button"
        buttonStyle="solid"
      />
      <h3>描边(默认)</h3>
      <Radio
        options={options}
        value={value}
        onChange={(value: string) => setValue(value)}
        shape="button"
      />
      <h3>大尺寸</h3>
      <Radio
        options={options}
        value={value}
        onChange={(value: string) => setValue(value)}
        shape="button"
        size="large"
      />
      <h3>小尺寸</h3>
      <Radio
        options={options}
        value={value}
        onChange={(value: string) => setValue(value)}
        shape="button"
        size="small"
      />
    </div>
  )
}
