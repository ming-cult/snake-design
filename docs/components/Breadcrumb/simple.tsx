import * as React from 'react'
import Breadcrumb from 'components/Breadcrumb'
import './demo.scss'

const dataSource = [
  {
    link: 'customer-list',
    content: '客户',
  },
  {
    link: 'customer-detail',
    content: '客户列表',
  },
  {
    link: 'customer-xiaochuan',
    content: '小船出海有限公司',
  },
]

export default class Simple extends React.Component {
  state = {
    dataSource,
  }

  reset = () => this.setState({dataSource})

  handleClick = (index: number, url: string) => {
    alert('goto url: ' + url)
    this.setState({
      dataSource: dataSource.slice(0, index + 1),
    })
  }

  render() {
    return (
      <div className="breadcrumb-demo-page">
        <h2>面包屑 Breadcrumb</h2>
        <h3>（1）默认</h3>
        <Breadcrumb dataSource={this.state.dataSource} />
        <h3>（2）自定义点击事件</h3>
        <Breadcrumb dataSource={this.state.dataSource} onClick={this.handleClick} />
        <button onClick={this.reset} style={{marginTop: 10}}>
          reset
        </button>
        <h3>（3）自定义分隔符</h3>
        <Breadcrumb dataSource={this.state.dataSource} onClick={this.handleClick} separator=">" />
        <h3>（4）Size：大/中/小/自定义</h3>
        大：
        <Breadcrumb dataSource={this.state.dataSource} onClick={this.handleClick} size="large" />
        中：
        <Breadcrumb dataSource={this.state.dataSource} onClick={this.handleClick} size="default" />
        小：
        <Breadcrumb dataSource={this.state.dataSource} onClick={this.handleClick} size="small" />
        自定义：
        <Breadcrumb
          dataSource={this.state.dataSource}
          onClick={this.handleClick}
          style={{
            fontSize: 14,
          }}
        />
        <h3>（5）超过最大expandMax，则省略</h3>
        <Breadcrumb dataSource={this.state.dataSource} onClick={this.handleClick} expandMax={2} />
      </div>
    )
  }
}
