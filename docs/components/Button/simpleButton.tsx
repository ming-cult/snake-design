import * as React from 'react'
import Button from 'components/Button'
import './buttonExample.scss'

export default class SimpleButton extends React.Component {
  render() {
    return (
    <div className="btn-demo-page">
      <p>button 组件</p>
      <Button text="主按钮"  />
      <Button type="secondary" rippleColor="#fe751" rippleOpacity={0.3}>次级按钮</Button>
      <Button type="accent">强调按钮</Button>
      <Button disableRipple >禁用触摸反馈</Button>
      <Button disabled>禁用按钮</Button>
      <Button disabled disableClassName="custom-disable">带有自定样式的禁用按钮</Button>
      {/* 内置Icon组件 */}
      <Button icon="person" />
      <Button
        inline
        size="large"
        text="文字在前面"
        icon="person"
        textPosition="before"
        style={{ marginRight: 5 }}
      />
      <Button
        inline
        text="文字在后面"
        icon="person"
      />
      {/* 也可这么写 */}
      <Button size="large">
        文字在后面
      </Button>
    </div>
    )
  }
}
