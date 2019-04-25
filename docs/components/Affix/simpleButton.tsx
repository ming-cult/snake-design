import * as React from 'react'
import Button from 'components/Button'
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
      </div>
    )
  }
}
