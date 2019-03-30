import * as React from 'react'

export default class SimpleExample extends React.Component {

  state: any = {
    selectApple: false,
    selectBanana: false,
    bindEleme: false,
    bindMeituan: false,
    bindBaidu: false,
  }

  toggleState = (state: string) => {
    this.setState({
      [state]: !this.state[state],
    })
  }

  render() {
    return (
      <div style={{ background: '#f0f1f2' }}>
        <div>1234</div>
      </div>
    )
  }
}
