import * as React from 'react'
import Breadcrumb from 'components/Breadcrumb'
import './demo.scss'
const { useState } = React

const defaultDataSource = [
  {
    link: 'customer',
    content: '客户'
  },
  {
    link: 'customer-list',
    content: '客户列表'
  },
  {
    link: 'customer-xiaochuan',
    content: '小船出海有限公司'
  }
]

export default function Demo() {
  const [dataSource, setDataSource] = useState(defaultDataSource)

  const reset = () => setDataSource(defaultDataSource)

  const handleClick = (index: number, url: string) => {
    console.log('goto url: ' + url)
    setDataSource(dataSource.slice(0, index + 1))
  }

  return (
    <div className="breadcrumb-demo-page">
      <h2>面包屑 Breadcrumb</h2>
      <h3>（1）默认</h3>
      <Breadcrumb dataSource={dataSource} />
      <h3>（2）自定义点击事件</h3>
      <Breadcrumb dataSource={dataSource} onClick={handleClick} />
      <h3>（3）自定义分隔符</h3>
      <Breadcrumb dataSource={dataSource} onClick={handleClick} separator=">" />
      <h3>（4）Size：大/中/小/自定义</h3>
      大：
      <Breadcrumb dataSource={dataSource} onClick={handleClick} size="large" />
      中：
      <Breadcrumb dataSource={dataSource} onClick={handleClick} size="default" />
      小：
      <Breadcrumb dataSource={dataSource} onClick={handleClick} size="small" />
      自定义：
      <Breadcrumb
        className="my-breadcrumb"
        dataSource={dataSource}
        onClick={handleClick}
        style={{
          fontSize: 14
        }}
      />
      <h3>（5）超过最大expandMax，则省略</h3>
      <Breadcrumb dataSource={dataSource} onClick={handleClick} expandMax={2} />
      {dataSource.length !== defaultDataSource.length && (
        <button onClick={reset} style={{ marginTop: 10 }}>
          reset
        </button>
      )}
    </div>
  )
}
