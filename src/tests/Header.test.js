import React from 'react';
import Header from '../components/Header/Header';
import { shallow } from 'enzyme';

describe('Counter testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  
  it('render the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain("This is counter app");
  });
});

