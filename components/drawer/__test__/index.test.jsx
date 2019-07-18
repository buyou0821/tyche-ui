import React from 'react';
import { mount } from 'enzyme';
import Drawer from '..';

describe('Drawer', () => {
  it('render correctly', () => {
    const wrapper = mount(
      <Drawer visible width={400}>
        Here is content of Drawer
      </Drawer>,
    );
    expect(wrapper.find('.ty-drawer__sider--left').length).toBeTruthy();
  });

  it('should support mask', () => {
    const closeFn = jest.fn();
    const wrapper = mount(
      <Drawer visible onClose={closeFn}>
        Here is content of Drawer
      </Drawer>,
    );
    wrapper.find('.ty-drawer__mask').simulate('click');
    expect(closeFn).toHaveBeenCalled();
  });
});
