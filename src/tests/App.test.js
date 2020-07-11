import React from 'react';
import App from '../App';
import Counter from '../components/Counter/Counter';
import Header from '../components/Header/Header';
import { shallow } from 'enzyme';

describe('Counter testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a <Counter /> component', () => {
    expect(wrapper.find(Counter)).toHaveLength(1);
  });

  it('renders a <Header /> component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});

