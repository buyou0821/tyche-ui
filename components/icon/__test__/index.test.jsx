import * as React from 'react';
import Icon from '..';
import { render, mount } from 'enzyme';

describe('Icon', () => {
  it('should render material icon', () => {
    const wrapper = render(<Icon material="face" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should support iconfont', () => {
    const IconFont = Icon.createFromIconfont({
      scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    const wrapper = render(<IconFont type="icon-twitter" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should support onClick', () => {
    const fn = jest.fn();
    const wrapper = mount(<Icon material="face" onClick={fn} />);
    wrapper.simulate('click');
    expect(fn).toBeCalled();
  });
});
