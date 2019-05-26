var fs = require('fs')
var path = require('path')
var ghpages = require('gh-pages')

/* 将 main-65f5c183.css 转为 ./main-65f5c183.css */
const docsHtmlRoot = path.resolve(__dirname, '../docsDist/index.html')

fs.readFile(docsHtmlRoot, (err, data) => {
  const htmlContent = data.toString().replace(/\/main/g, './main')
  fs.writeFile(docsHtmlRoot, htmlContent, () => {})
})

/* 发布 */
ghpages.publish(
  'docsDist',
  {
    repo: 'git@github.com:ming-cult/snake-design.git'
  },
  err => {
    if (err) {
      console.log(err)
    }
  }
)
