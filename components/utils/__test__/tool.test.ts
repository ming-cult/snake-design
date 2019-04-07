import ClassNames from 'classnames'

export const noop = () => {}

export const getCx = (prefixCls: string) => (...args: (string | Object)[]) =>
  ClassNames(
    args.map(item => {
      if (typeof item === 'string') {
        return `${prefixCls}-${item}`
      }
      return { [`${prefixCls}-${Object.keys(item)[0]}`]: Object.values(item)[0] }
    })
  )
