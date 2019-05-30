import React from 'react';
import { shallow } from 'enzyme';
import AppBar from '../index';
import { defaultPrefixCls } from '../../context/ConfigContext';

const prefixClx = `${defaultPrefixCls}-appbar`;

describe('AppBar', () => {
  it('should support color attribute', () => {
    const wrapper = shallow(<AppBar color="success" />);
    expect(wrapper.find(`.${prefixClx}--success`).length).toEqual(1);
  });
});
