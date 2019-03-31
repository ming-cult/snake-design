// const { JSDOM } = require('jsdom')

// const jsdom = new JSDOM('<!doctype html><html><body></body></html>')

// function copyProps(src: any, target: any) {
//   const props = Object.getOwnPropertyNames(src)
//     .filter(prop => typeof target[prop] === 'undefined')
//     .reduce((result, prop) => ({
//       ...result,
//       [prop]: Object.getOwnPropertyDescriptor(src, prop),
//     }), {})
//   Object.defineProperties(target, props)
// }

// (global as any).window = jsdom.window
// ;(global as any).document = jsdom.window.document
// ;(global as any).navigator = {
//   userAgent: 'node.js',
// }
// copyProps(jsdom.window, global);

// // Fix Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
// (function () {
//   let lastTime = 0
//   let vendors = ['ms', 'moz', 'webkit', 'o']
//   for (let x = 0; x < vendors.length && !jsdom.window.requestAnimationFrame; ++x) {
//     jsdom.window.requestAnimationFrame = global[vendors[x] + 'RequestAnimationFrame']
//     jsdom.window.cancelAnimationFrame = global[vendors[x] + 'CancelAnimationFrame']
//       || global[vendors[x] + 'CancelRequestAnimationFrame']
//   }
//   if (!jsdom.window.requestAnimationFrame) {
//     (global as any).requestAnimationFrame = function (callback) {
//       let currTime = new Date().getTime()
//       let timeToCall = Math.max(0, 16 - (currTime - lastTime))
//       let id = (global as any).setTimeout(function () { callback(currTime + timeToCall) },
//         timeToCall)
//       lastTime = currTime + timeToCall
//       return id
//     }
//   }
//   if (!jsdom.window.cancelAnimationFrame) {
//     (global as any).cancelAnimationFrame = function (id) {
//       clearTimeout(id)
//     }
//   }
// }())

const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

// // Fail tests on any warning
// console.error = (message: any) => {
//   throw new Error(message)
// }
