import * as React from 'react'
import { shallow } from 'enzyme'
import renderToJSON from 'enzyme-to-json'
import Panel from '../index'

describe('components', () => {
  describe('panel', () => {
    const PanelHeader = Panel.Header
    const PanelBody = Panel.Body
    const PanelItem = Panel.Item
    const PanelFooter = Panel.Footer
    const PanelAddons = Panel.Addons

    it('Basic usage of Panel && Panel\'s children com', () => {
      const wrapper = shallow(<Panel>
        <PanelAddons>Addons</PanelAddons>
        <PanelHeader>标题</PanelHeader>
        <PanelBody>
          <PanelItem>Item1</PanelItem>
          <PanelItem>Item2</PanelItem>
        </PanelBody>
        <PanelFooter>底部</PanelFooter>
      </Panel>)

      expect(renderToJSON(wrapper)).toMatchSnapshot()
      expect(wrapper.childAt(1).contains(<PanelHeader>标题</PanelHeader>)).toBe(true)
      expect(wrapper.childAt(2).children().length).toBe(2)
    })
  })
})
