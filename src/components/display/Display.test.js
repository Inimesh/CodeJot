import React from 'react'
import renderer from 'react-test-renderer'

import Display from './Display'

describe('<Display />', () => { 
  it('has 1 child', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree.children.length).toBe(1);
  })

 })