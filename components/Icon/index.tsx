import * as React from 'react'
import cx from 'classnames'
import * as warning from 'warning'
import { IconProps } from 'types/icon.d'

const { useCallback, useEffect } = React
const cacheScript = new Set()
const url = 'https://at.alicdn.com/t/font_1127944_82mztmm5t8t.js'

function Icon(
  { spin = false, prefixCls = 'snake-icon', ...rest }: IconProps,
  ref: React.RefObject<SVGSVGElement>
) {
  const { className, size, type, color, rotate, style, ...other } = rest
  const classStr = cx(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-spin`]: spin
    },
    className
  )

  const getStyle = useCallback(() => {
    const cloneStyle: React.CSSProperties = { ...style }
    if (size) cloneStyle.fontSize = size
    if (color) cloneStyle.color = color
    if (rotate) cloneStyle.rotate = `${rotate}deg`
    return cloneStyle
  }, [size, color, rotate, style])

  useEffect(() => {
    if (!cacheScript.has(url)) {
      const script = document.createElement('script')
      script.src = url
      cacheScript.add(url)
      document.body.appendChild(script)
    }
  }, [])

  warning(!!type, 'Icon', 'Should have `type` prop.')

  return (
    <svg className={classStr} {...other} style={getStyle()} ref={ref}>
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  )
}

export default React.forwardRef(Icon)
