import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Counter testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  
  test('render the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain("This is counter app");
  });

  test('render a button with the text of `increment`', () => {
    expect(wrapper.find('#increment-button').text()).toBe("Increment");
  });

  test('render the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test('render the click event of increment button and increment counter value', () => {
    wrapper.find('#increment-button').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  });

  test('render the click event of decrement button and decrement counter value', () => {
    wrapper.find('#increment-button').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-button').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test('on decrement the counter on zero must be always zero', () => {
    wrapper.find('#decrement-button').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });
});

