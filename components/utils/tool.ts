import ClassNames from 'classnames'

export const noop = (..._args: any[]) => {}

export const tuple = <T extends string[]>(...args: T) => args

export const mapKeys = (obj: any, fn: (...args: any[]) => any) =>
  Object.keys(obj).reduce((acc: any, k: string) => {
    acc[fn(obj[k], k, obj)] = obj[k]
    return acc
  }, {})

export const getType = (v: any) =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase()

const prefixItem = (prefixCls: string, arg: any) => {
  const type = getType(arg)
  if (type === 'string') {
    return arg === '' ? prefixCls : `${prefixCls}-${arg}`
  } else if (type === 'object') {
    return Object.keys(arg).reduce((acc: any, key: string) => {
      if (key === 'className' && typeof arg[key] === 'string') {
        acc[arg[key]] = true
      } else {
        acc[`${prefixCls}-${key}`] = arg[key]
      }
      return acc
    }, {})
  }
  return arg
}

export const getCx = (prefixCls: string) => (...args: any[]) =>
  ClassNames(
    args.map((arg: any) => {
      const type = getType(arg)
      if (type === 'array') {
        return arg.map((item: any) => prefixItem(prefixCls, item))
      }
      return prefixItem(prefixCls, arg)
    })
  )

export const omit = (obj: any, arr: string[]) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as any)
