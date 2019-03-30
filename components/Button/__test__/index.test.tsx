import * as React from 'react'
import { shallow } from 'enzyme'
import renderToJson from 'enzyme-to-json'

import Button from '../index'

describe('Button Component', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  it('renders a primary button correctly', async () => {
    const wrapper = shallow(<Button text="test" />)
    expect(renderToJson(wrapper)).toMatchSnapshot()

    const wrapper2 = shallow(<Button>test</Button>)
    expect(wrapper2.children().text()).toEqual('test')
  })
})
