// t: 过去时间; b: 初始距离; c: 终点距离 d: 完成时间
// 公式不理解。
const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * t * t * t + b
  } else {
    return (cc / 2) * ((t -= 2) * t * t + 2) + b
  }
}

function getScrollTop(node?: HTMLElement) {
  if (node) {
    return node.scrollTop
  } else {
    return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
  }
}

function setScrollTop(value: number, node?: HTMLElement) {
  if (node) {
    node.scrollTop = value
  } else {
    document.body.scrollTop = value
    document.documentElement.scrollTop = value
  }
}

function scrollToY(value: number, node?: HTMLElement) {
  const scrollTop = getScrollTop(node)
  const startTime = Date.now()
  const frameFunc = () => {
    const timestamp = Date.now()
    const time = timestamp - startTime
    setScrollTop(easeInOutCubic(time, scrollTop, value, 450))
    if (time < 450) {
      requestAnimationFrame(frameFunc)
    } else {
      setScrollTop(value, node)
    }
  }
  requestAnimationFrame(frameFunc)
}

export { scrollToY }
