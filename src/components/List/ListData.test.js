import React from 'react';
import { shallow, mount } from 'enzyme';
import ListData from './ListData';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ListData location={{pathname: '/inbox'}} />);
    // expect(wrapper).to.have.lengthOf(1);
  });
});