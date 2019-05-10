import * as React from 'react'
import { DropdownProps } from 'types/dropdown'
import Portal from '../Portal'

import './index.scss'

const defaultProps: Partial<DropdownProps> = {
  disabled: false,
  visible: false,
  trigger: 'hover',
  placement: 'bottomLeft',
  destroy: true
}

const Dropdown: React.FC<DropdownProps> = dropdown => {
  const props = { ...defaultProps, ...dropdown }
  return <Portal {...props} prefixCls="snake-dropdown" mode="dropdown" />
}

export default Dropdown
