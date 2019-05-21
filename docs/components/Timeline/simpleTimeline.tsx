import * as React from 'react'
import Timeline from 'components/Timeline'
import './demo.scss'

const options = [
  {
    content: (
      <>
        <p>收件人已签收，阿乙</p>
        <p>2018-08-03 13:34:23</p>
      </>
    )
  },
  {
    content: (
      <>
        <p>收件人已签收</p>
        <p>2018-08-03 13:34:23</p>
      </>
    )
  },
  {
    content: (
      <>
        <p>收件人已签收</p>
        <p>2018-08-03 13:34:23</p>
      </>
    ),
    lineHeight: 0
  }
]

function SimpleTimeline() {
  return (
    <>
      <Timeline options={options} />
    </>
  )
}

export default SimpleTimeline
