import * as React from 'react'
import cx from 'classnames'
import * as warning from 'warning'
import Dropdown from '../Dropdown'
import { pick } from '../utils/tool'
import Header from './common/header'
import Panel from './common/panel'
import { SelectProps } from './interface'
import './index.scss'
// import OptionsPanel from './OptionsPanel'
// import { Dropdown } from '..'

const { useState, useCallback } = React

const prefixCls = 'snake-select'

const defaultProps = {
  options: [],
  size: 'normal' as 'normal',
  disabled: false
}

const getSafeValue = (
  rawValue: string | number | (string | number)[],
  mode: 'single' | 'multiple'
) => {
  let value = rawValue
  if (mode === 'multiple') {
    if (value === undefined) {
      value = []
    }
  } else {
    if (value === undefined) {
      value = ''
    }
  }
  return value
}

const getHeaderProps = (props: SelectProps) => {
  return pick(props, ['className', 'style', 'prefixCls', 'options', 'mode', 'labelsInHeaderRender'])
}

const getPanelProps = (props: SelectProps) => {
  return {
    ...pick(props, ['prefixCls', 'options', 'mode', 'onChange', 'panelRender']),
    className: props.panelClassName,
    style: props.panelStyle
  }
}

const Select: React.SFC<SelectProps> = userProps => {
  const props = {
    ...defaultProps,
    ...userProps
  }
  const { options, value: rawValue, disabled, mode, size } = props
  const value = getSafeValue(rawValue, mode)
  // const { className, value } = rest
  const [visible, setVisible] = useState(false)

  const getClassName = useCallback(() => {
    return cx(prefixCls, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-disabled`]: disabled
    })
  }, [prefixCls, size, disabled])

  // const handleChange = useCallback((value: string | number) => {
  //   onChange && onChange(value)
  // }, [])

  warning(!(options === undefined), 'Select', 'should have `options` props')

  const changeVisible = (visible: boolean) => {
    setVisible(visible)
  }

  return (
    <div
      className={getClassName()}
      style={{
        display: 'inline-block'
      }}
    >
      <Dropdown
        visible={visible}
        trigger="click"
        onVisibleChange={changeVisible}
        className={`${prefixCls}-dropdown`}
        content={
          <div>
            <Panel
              {...{
                ...getPanelProps(props),
                value,
                changeVisible
              }}
            />
          </div>
        }
      >
        <Header {...{ ...getHeaderProps(props), value }} />
      </Dropdown>
    </div>
  )
}

export default Select
