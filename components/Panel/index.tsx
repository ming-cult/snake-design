import * as React from 'react'
import * as cx from 'classnames'

// 通用Panel组件
const getCom = (name?: string) => (props: any) => {
  const { children, className, alignItems, ...ps } = props
  const classNames = cx(className, {
    'snake-design-panel': !name,
    [`snake-design-panel-${name}`]: !!name,
  })
  return <div className={classNames} {...ps}>
    {children}
  </div>
}

export default class Panel extends React.Component<any, any> {

  static Header: any = getCom('header')
  static Footer: any = getCom('footer')
  static Body: any = getCom('body')
  static Addons: any = getCom('addons') // 附带内容

  // A item
  static Item = function(props: any) {
    const {
      leftIcon,
      leftAddon,
      rightIcon,
      rightAddon,
      feedback,
      alignItems,
      children,
      className,
      innerStyle,
      innerClass,
      innerDirection,
      ...ps
    } = props
    const classNames = cx({
      'snake-design-panel-feedback': feedback,
    }, 'snake-design-panel-item', `snake-design-panel-align__${alignItems || 'center'}`, className)
    return <div className={classNames} {...ps}>
      {leftIcon && <div className="snake-design-panel-item-leftIcon">{leftIcon}</div>}
      {leftAddon && <div className="snake-design-panel-item-leftAddon">{leftAddon}</div>}
      <div
        className={cx('snake-design-panel-item-inner', innerClass, {
          [`snake-design-panel-item-inner-${innerDirection}`]: !!innerDirection,
        })}
        style={innerStyle}
      >
        {children}
      </div>
      {rightAddon && <div className="snake-design-panel-item-rightAddon">{rightAddon}</div>}
      {rightIcon && <div className="snake-design-panel-item-rightIcon">{rightIcon}</div>}
    </div>
  }

  render() {
    return getCom()(this.props)
  }
}
