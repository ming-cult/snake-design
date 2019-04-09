import * as React from 'react'
import Button from 'components/Button'
import Icon from 'components/Icon'
import './demo.scss'

export default class SimpleButton extends React.Component {
  render() {
    return (
      <div className="btn-demo-page">
        <h2>按钮 button</h2>
        <h3>（1）按钮类型展示</h3>
        <Button>确认</Button>
        <Button type="gray">取消</Button>
        <Button type="warn">警告</Button>
        <h3>（2）默认不同尺寸的按钮</h3>
        <Button size="large">确认</Button>
        <Button size="small" type="gray">取消</Button>
        <h3>（3）文字链</h3>
        <Button text>确认</Button>
        <Button text type="gray">取消</Button>
        <Button text type="warn">警告</Button>
        <h3>（4）禁用按钮</h3>
        <Button disabled>禁用按钮</Button>
        <Button text disabled>禁用按钮</Button>
        <h3>（5）加载中按钮</h3>
        <Button loading>加载中</Button>
        <Button text loading>加载中</Button>
        <h3>（6）内置icon按钮</h3>
        <Button icon="share">分享</Button>
        <Button text icon="share">分享</Button>
        <h3>（7）引入icon按钮</h3>
        <Button><Icon type="share" style={{fontSize: '1em'}} /></Button>
      </div>
    )
  }
}
