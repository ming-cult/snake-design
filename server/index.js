const express = require('express')
const path = require('path')
const config = require('../config')
const app = express()

const rootDir = path.resolve(__dirname, '..')

app.set('view engine', 'ejs')

app.use(express.static(path.join(rootDir, 'server/static'), { maxAge: 86400000 }));

app.get('/*', (req, res) => res.render(path.join(rootDir, 'server/views/index')))

app.listen(config.port, () => console.log(`Snake-Deisign Docs listening on port ${config.port}!`))
