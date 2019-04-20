import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Tabs from '../index'

const { useState } = React

const tabs = [{ title: '标签一' }, { title: '标签二' }, { title: '标签三', disabled: true }]

describe('Tabs Test', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  it('snapshot', () => {
    const tabsRenderTop = render(
      <Tabs tabs={tabs}>
        <div>标签一的内容</div>
        <div>标签二的内容</div>
        <div>标签三的内容</div>
      </Tabs>
    )
    const tabsRenderBottom = render(
      <Tabs tabs={tabs} tabBarPosition="bottom">
        <div>标签一的内容</div>
        <div>标签二的内容</div>
        <div>标签三的内容</div>
      </Tabs>
    )
    const tabsRenderLeft = render(
      <Tabs tabs={tabs} tabBarPosition="left">
        <div>标签一的内容</div>
        <div>标签二的内容</div>
        <div>标签三的内容</div>
      </Tabs>
    )
    const tabsRenderRight = render(
      <Tabs tabs={tabs} tabBarPosition="right">
        <div>标签一的内容</div>
        <div>标签二的内容</div>
        <div>标签三的内容</div>
      </Tabs>
    )
    expect(tabsRenderTop.container.innerHTML).toMatchSnapshot()
    expect(tabsRenderBottom.container.innerHTML).toMatchSnapshot()
    expect(tabsRenderLeft.container.innerHTML).toMatchSnapshot()
    expect(tabsRenderRight.container.innerHTML).toMatchSnapshot()
  })
  it('dispatch change tab', async () => {
    const TabDemo = function() {
      const [activeTab, setActiveTab] = useState(0)
      return (
        <Tabs tabs={tabs} activeTab={activeTab} onChange={(index: number) => setActiveTab(index)}>
          <div>标签一的内容</div>
          <div>标签二的内容</div>
          <div>标签三的内容</div>
        </Tabs>
      )
    }

    const { getByText } = render(<TabDemo />)
    expect(getByText('标签一的内容')).toBeTruthy()
    fireEvent.click(getByText('标签二'))
    expect(getByText('标签二的内容')).toBeTruthy()
    fireEvent.click(getByText('标签三'))
    expect(getByText('标签二的内容')).toBeTruthy()
  })
})
