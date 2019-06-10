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

/** 判断是否有滚动条 */
export const hasScrollBar = () => {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
}

/** 获取滚动条的宽度 */
export const getScrollBarWidth = () => {
  const scrollDiv = document.createElement('div')
  scrollDiv.style.cssText =
    'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'
  document.body.appendChild(scrollDiv)
  const scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollBarWidth
}

/* 函数节流 */
export const throttle = (fn: any, wait: number) => {
  let inThrottle, lastFn, lastTime
  return function() {
    const context = this,
      args = arguments
    if (!inThrottle) {
      fn.apply(context, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      clearTimeout(lastFn)
      lastFn = setTimeout(function() {
        if (wait - (Date.now() - lastTime) <= 0) {
          fn.apply(context, args)
          lastTime = Date.now()
        }
      }, Math.max(wait - (Date.now() - lastTime), 0))
    }
  }
}

/** 获取浏览器的视窗的宽度 */
export const getClientSize = () => {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height:
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }
}

export function pick<T, K extends keyof T>(obj: T, arr: K[]) {
  const newObj: { [key in K]?: T[key] } = {}
  return arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), newObj)
}
