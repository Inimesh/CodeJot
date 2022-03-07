import React from 'react'
import renderer from 'react-test-renderer'

import DisplayRender from './DisplayRender'

describe('<DisplayRender />', () => { 
  it('renders children correctly', () => {
    const tree = renderer.create(<DisplayRender />).toJSON();
    expect(tree).toMatchSnapshot()
  });

})