import * as React from 'react'
import BackTop from 'components/BackTop'
import './demo.scss'

function CustomBackTop() {
  return (
    <>
      <p>
        Scroll down to see the bottom-right <i style={{ color: '#01C1B2' }}>green</i> button.
      </p>
      <div id="components-back-top-demo-custom">
        <BackTop>
          <div className="snake-back-top-inner">UP</div>
        </BackTop>
      </div>
    </>
  )
}

export default CustomBackTop
