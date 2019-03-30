const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {})
  Object.defineProperties(target, props)
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}
copyProps(window, global);

// tslint:disable-next-line:max-line-length
// Fix Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
(function () {
  let lastTime = 0
  let vendors = ['ms', 'moz', 'webkit', 'o']
  for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = global[vendors[x] + 'RequestAnimationFrame']
    window.cancelAnimationFrame = global[vendors[x] + 'CancelAnimationFrame']
      || global[vendors[x] + 'CancelRequestAnimationFrame']
  }
  if (!window.requestAnimationFrame) {
    global.requestAnimationFrame = function (callback) {
      let currTime = new Date().getTime()
      let timeToCall = Math.max(0, 16 - (currTime - lastTime))
      let id = global.setTimeout(function () { callback(currTime + timeToCall) },
        timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  }
  if (!window.cancelAnimationFrame) {
    global.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
}())

const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}
