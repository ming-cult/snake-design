import * as React from 'react'
import { Transfer, Checkbox } from 'components'

const CheckboxItem = Checkbox.item

const { useState } = React

const mockData: any = []
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: `${i}`,
    title: `content${i + 1}`,
    disabled: i % 3 < 1
  })
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key)

export default function Base() {
  const [targetKey, setTargetKey] = useState(oriTargetKeys)
  const [selectedKeys, setSelectedKeys] = useState([])
  const [checked, setChecked] = useState(false)

  const handleChange = tar => {
    setTargetKey(tar)
  }

  const handleSelectChange = (src, tar) => {
    setSelectedKeys([...src, ...tar])
  }
  return (
    <div>
      <Transfer
        dataSource={mockData}
        targetKeys={targetKey}
        selectedKeys={selectedKeys}
        onChange={handleChange}
        onSelectChange={handleSelectChange}
        disabled={checked}
        titles={['source', 'target']}
      />
      <div style={{ marginTop: 20 }}>
        <CheckboxItem checked={checked} onChange={checked => setChecked(checked)}>
          disabled
        </CheckboxItem>
      </div>
    </div>
  )
}
