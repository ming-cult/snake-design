export default [
{
  key: 'install',
  path: '/guide/install',
  name: '安装',
  component: require('../about/install').default,
}, {
  key: 'usage',
  path: '/guide/usage',
  name: '使用',
  component: require('../about/usage').default,
}, {
  key: 'changelog',
  path: '/more/changelog',
  name: '更新日志',
  component: require('../about/changeLog').default,
}, {
  key: 'contribution',
  path: '/more/contribution',
  name: '贡献指南',
  component: require('../about/contribution').default,
}
]
