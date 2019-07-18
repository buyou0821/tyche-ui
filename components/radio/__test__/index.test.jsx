import React from 'react';
import { render, mount } from 'enzyme';
import Radio from '..';

describe('Radio', () => {
  it('should render correctly', () => {
    const wrapper = render(<Radio className="customized">Test</Radio>);
    expect(wrapper).toMatchSnapshot();
  });

  it('fire change events when value changes', () => {
    const handleChange = jest.fn();
    const wrapper = mount(
      <Radio className="customized" onChange={handleChange}>
        Test
      </Radio>,
    );
    wrapper.find('input').simulate('change');
    expect(handleChange).toHaveBeenCalled();
  });
});

describe('Radio Group', () => {
  it('Group will liftup the change event of input and props in Radio', () => {
    const handleChange = jest.fn();
    const val = 1;
    const wrapper = mount(
      <Radio.Group onChange={handleChange} value={val}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>B</Radio>
      </Radio.Group>,
    );
    handleChange.mockImplementation(evt => {
      expect(typeof evt.stopPropagation).toBe('function');
      expect(typeof evt.preventDefault).toBe('function');
      evt.stopPropagation();
      evt.preventDefault();

      wrapper.setProps({ value: evt.target.value });
    });

    expect(
      wrapper
        .find(Radio)
        .at(0)
        .children()
        .hasClass('ty-radio--checked'),
    ).toBe(true);

    wrapper
      .find('input')
      .at(1)
      .simulate('change');
    expect(handleChange).toHaveBeenCalled();

    expect(
      wrapper
        .find(Radio)
        .at(1)
        .children()
        .hasClass('ty-radio--checked'),
    ).toBe(true);
  });
});
