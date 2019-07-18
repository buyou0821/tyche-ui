import React from 'react';
import { mount } from 'enzyme';
import Input from '..';

describe('Input', () => {
  it('should support maxLength', () => {
    const wrapper = mount(<Input maxLength={10} placeholder="input..." />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should support prefix and suffix', () => {
    const wrapper = mount(<Input label="Regular" prefix="$" suffix="元" />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Textarea', () => {
  it('should support disabled', () => {
    const wrapper = mount(<Input type="textarea" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should support maxLength', () => {
    const wrapper = mount(<Input type="textarea" maxLength={10} />);
    expect(wrapper).toMatchSnapshot();
  });
});
