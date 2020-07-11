import React from 'react';
import Counter from '../components/Counter/Counter';

import { shallow } from 'enzyme';

describe('Counter testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  it('renders a button with the text of `increment`', () => {
    expect(wrapper.find('#increment-button').text()).toBe("Increment");
  });

  it('renders the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test('if the button is clicked the counter is working', () => {
    wrapper.find('#increment-button').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  });

  test('if the buttons of ar clicked works fine', () => {
    wrapper.find('#increment-button').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-button').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test('if the counter startig at zero could have negative values', () => {
    wrapper.find('#decrement-button').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test('if counter is equal to zero decrement button must be disabled', () => {
    wrapper.find('#increment-button').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-button').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
    expect(wrapper.find('#decrement-button').prop('disabled')).toBe(true);
  });
});

