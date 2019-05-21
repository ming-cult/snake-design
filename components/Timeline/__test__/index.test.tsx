import * as React from 'react'
import { render } from 'react-test-renderer'
import Timeline from '../Timeline'

// how to remove any
// const TimelineItem = (Timeline as any).Item

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
          <p>上海徐汇古北营业部派件员 顺丰速运 95</p>
          <p>2018-08-03 13:34:23</p>
        </>
      )
    },
    {
      content: (
        <>
          <p>上海徐汇古北营业部派件员 顺丰速运 95</p>
          <p>2018-08-03 13:34:23</p>
        </>
      ),
      lineHeight: 0
    }
  ]
  const { container: TimelineContainer1 } = render(
    <Timeline options={options} highlightColor="#2ca5f1" />
  )
  expect(TimelineContainer1).toMatchSnapshot()
})
