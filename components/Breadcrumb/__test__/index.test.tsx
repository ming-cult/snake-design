/* 单测要点：
（1）点击能跳转；
（2）className 和 style 被设置进去
*/

import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Breadcrumb from '../index'
const { useState } = React

const defaultDataSource = [
  {
    link: 'customer',
    content: '客户'
  },
  {
    link: 'customer-list',
    content: '客户列表'
  },
  {
    link: 'customer-xiaochuan',
    content: '小船出海有限公司'
  }
]

const Demo = () => {
  const [dataSource, setDataSource] = useState(defaultDataSource)
  const handleClick = (index: number) => {
    setDataSource(dataSource.slice(0, index + 1))
  }
  return <Breadcrumb dataSource={dataSource} onClick={handleClick} />
}

describe('Breadcrumb Test', () => {
  it('renders default correctly', () => {
    const { getByText } = render(<Breadcrumb dataSource={defaultDataSource} />)
    expect(getByText('客户列表').getAttribute('href')).toBe('customer-list')
  })
  it('onClick works correctly', () => {
    const { getByText, queryByText } = render(<Demo />)
    expect(queryByText('小船出海有限公司')).toBeTruthy()
    fireEvent.click(getByText('客户列表'))
    expect(queryByText('小船出海有限公司')).toBeFalsy()
  })
  it('className and style have been set correctly', () => {
    const { container } = render(
      <Breadcrumb
        dataSource={defaultDataSource}
        className="my-breadcrumb"
        style={{
          color: 'red'
        }}
      />
    )

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.classList.contains('my-breadcrumb')).toBe(true)
    expect(wrapper.style.color).toBe('red')
  })
})
