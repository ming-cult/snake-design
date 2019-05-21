import * as React from 'react'
import { render } from 'react-testing-library'
import Timeline from '../index'

// how to remove any
const TimelineItem = (Timeline as any).Item

it('renders correctly', () => {
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
          <p>收件人已签收，阿乙</p>
          <p>2018-08-03 13:34:23</p>
        </>
      )
    },
    {
      content: (
        <>
          <p>收件人已签收，阿乙</p>
          <p>2018-08-03 13:34:23</p>
        </>
      ),
      lineHeight: 0
    }
  ]
  const { container: Timeline1 } = render(<Timeline options={options} highlightColor="#2ca5f1" />)
  expect(Timeline1).toMatchSnapshot()
  const { container: Timeline2 } = render(
    <Timeline>
      <TimelineItem>
        <p>收件人已签收，阿乙</p>
        <p>2018-08-03 13:34:23</p>
      </TimelineItem>
      <TimelineItem>
        <p>收件人已签收，阿乙</p>
        <p>2018-08-03 13:34:23</p>
      </TimelineItem>
      <TimelineItem lineHeight={0}>
        <p>收件人已签收，阿乙</p>
        <p>2018-08-03 13:34:23</p>
      </TimelineItem>
    </Timeline>
  )
  expect(Timeline2).toMatchSnapshot()
})
