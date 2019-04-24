import React from 'react';
import { render, mount } from 'enzyme';
import BaseButton from '../index';

describe('Ripple', () => {
  it('render correctly', () => {
    const wrapper = mount(<BaseButton />);
    wrapper.simulate('mousedown');
    wrapper.simulate('mouseup');
    wrapper.simulate('touchstart');
    wrapper.simulate('touchend');
  });
});
