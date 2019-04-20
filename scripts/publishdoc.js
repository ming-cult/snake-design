var ghpages = require('gh-pages');

ghpages.publish('docsDist', {
  repo: 'git@github.com:ming-cult/snake-design.git'
}, (err) => {
  if (err) {
    console.log(err)
  }
});