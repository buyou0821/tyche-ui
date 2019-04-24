import React from 'react';
import { render, mount } from 'enzyme';
import ConfigProvider from '../ConfigContext';
import { Button } from '../../index';

describe('ConfigProvider', () => {
  it('prefixCls', () => {
    const wrapper = mount(
      <ConfigProvider prefixCls="jest">
        <Button />
      </ConfigProvider>,
    );
    expect(wrapper.find('.jest-btn').length).toBeGreaterThan(0);
    const wrapper1 = mount(
      <ConfigProvider>
        <Button />
      </ConfigProvider>,
    );
    expect(wrapper1.find('.ty-btn').length).toBeGreaterThan(0);
  });
});
