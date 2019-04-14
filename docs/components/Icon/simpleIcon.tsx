import * as React from 'react'
import Icon from 'components/Icon'
import { icons } from './iconList'

import './demo.scss'

export default function IconDemo() {
  return (
    <div className="snake-icon-demo">
      <ul>
        {icons.map((n) => {
          return (
            <li key={n}>
              <div className="snake-icon-demo-icon"><Icon type={n} /></div>
              <div className="snake-icon-demo-name">{n}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}