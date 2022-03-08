import React from 'react'
import renderer from 'react-test-renderer'

import Editor from './Editor'

describe('<Display />', () => { 
  it('renders correctly', () => {
    const tree = renderer.create(<Editor />).toJSON();
    expect(tree).toMatchSnapshot();
  })

})