import * as React from 'react'
// import cx from 'classnames'
import { AffixProps } from 'types/affix.d'
import './index.scss'

const defaultProps = {
  prefixCls: 'snake-affix'
}

const Affix = (userProps: AffixProps, ref: any) => {
  const props = {
    ...defaultProps,
    ...userProps
  }
  const {} = props

  return <div>Affix</div>
}

export default React.forwardRef(Affix)
