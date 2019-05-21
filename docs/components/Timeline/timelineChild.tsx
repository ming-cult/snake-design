import * as React from 'react'
import Timeline from 'components/Timeline'
import './demo.scss'

const TimelineItem = (Timeline as any).Item

function TimelineChild() {
  return (
    <>
      <Timeline>
        <TimelineItem>
          <p>收件人已签收，阿乙</p>
          <p>2018-08-03 13:34:23</p>
        </TimelineItem>
        <TimelineItem>
          <p>收件人已签收</p>
          <p>2018-08-03 13:34:23</p>
        </TimelineItem>
        <TimelineItem lineHeight={0}>
          <p>收件人已签收</p>
          <p>2018-08-03 13:34:23</p>
        </TimelineItem>
      </Timeline>
    </>
  )
}

export default TimelineChild
