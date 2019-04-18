import * as React from 'react'
import Tabs from 'components/Tabs'
import './demo.scss'

const tabs0 = [
  { title: '标签一' },
  { title: '标签二' },
  { title: '标签三' },
  { title: '标签四' },
];

export default class SimpleTab extends React.Component {

  state = {
    page0: 0
  }

  onChange = (index: number, _e: any, order: any) => {
    this.setState({
      [`page${order}`]: index
    })
  }

  render() {
    const { page0 } = this.state

    return (
      <>
        <div>简单用法</div>
        <Tabs
          tabs={tabs0}
          activeTab={page0}
          onChange={(index: number, e: any) => this.onChange(index, e, 0)}
          style={{width: 300}}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px', backgroundColor: '#fff' }}>
            标签一的内容
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px', backgroundColor: '#fff' }}>
            标签二的内容
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px', backgroundColor: '#fff' }}>
            标签三的内容
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px', backgroundColor: '#fff' }}>
            标签四的内容
          </div>
        </Tabs>
        <div>垂直模式</div>
        <Tabs
          tabs={tabs0}
          activeTab={page0}
          onChange={(index: number, e: any) => this.onChange(index, e, 0)}
          tabBarPosition="left"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px', backgroundColor: '#fff' }}>
            标签一的内容
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px', backgroundColor: '#fff' }}>
            标签二的内容
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px', backgroundColor: '#fff' }}>
            标签三的内容
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px', backgroundColor: '#fff' }}>
            标签四的内容
          </div>
        </Tabs>
      </>
    )
  }
}
