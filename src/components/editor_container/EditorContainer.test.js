import React from 'react'
import renderer from 'react-test-renderer'

import EditorContainer from './EditorContainer'

describe('<Display />', () => { 
  it('renders components correctly', () => {
    const tree = renderer.create(<EditorContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

})