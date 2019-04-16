import * as React from 'react'
import Code from '../prism'
import { Icon } from 'components'
import './index.scss'

export default function Block({ children, des, code }) {

  const [open, setOpen] = React.useState(false)

  return (
    <section className="snake-design-block">
      <div className="snake-design-block-header">
        { children }
      </div>
      <div className={`snake-design-block-description ${open ? 'dash' : 'solid'}`}>
        { des }
        <span><Icon type="code" onClick={() => setOpen(!open)}/></span>
      </div>
      {
        open && <div className="snake-design-block-code">
        <Code>{code}</Code>
      </div>
    }
    </section>
  )
}