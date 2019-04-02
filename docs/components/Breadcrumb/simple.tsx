import * as React from 'react'
import Breadcrumb from 'components/Breadcrumb'

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
      <div className="demo-page">
        <h2>面包屑 Breadcrumb</h2>
        <p>（1）默认</p>
        <Breadcrumb dataSource={this.state.dataSource} />
        <p>（2）自定义点击事件</p>
        <Breadcrumb dataSource={this.state.dataSource} onClick={this.handleClick} />
        <button onClick={this.reset} style={{marginTop: 10}}>
          reset
        </button>
      </div>
    )
  }
}
