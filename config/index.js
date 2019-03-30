const ENV = process.env.NODE_ENV || 'localdev'
const os = require('os')

const localIp = () => {
  const ip = []
  const allNwIntf = os.networkInterfaces()
  Object.keys(allNwIntf).map((intf) => {
    allNwIntf[intf].map((it) => {
      if (it.family === 'IPv4' && !it.internal) {
        ip.push(it.address)
      }
    })
  })
  return ip
}

function getHost() {
  return {
    localdev: localIp()[0],
    development: '192.168.11.60' // 开发环境
  }[ENV]
}

function getPort() {
  return { localdev: 7878, development: 12325 }[ENV]
}

module.exports = {
  port: getPort(),
  host: getHost(),
  hostName: `http://${getHost()}:${getPort()}`
}
