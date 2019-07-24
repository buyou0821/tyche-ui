import React from 'react';
import { mount } from 'enzyme';
import Checkbox from '..';

describe('Checkbox', () => {
  it('toggle checked', () => {
    const checkbox = mount(<Checkbox>checkbox</Checkbox>);
    expect(checkbox.find('.ty-checkbox--checked').length).toBe(0);
    checkbox.find('input').simulate('change');
    expect(checkbox.find('.ty-checkbox--checked').length).toBe(1);
  });

  it('indeterminate', () => {
    const checkbox = mount(<Checkbox indeterminate>checkbox</Checkbox>);
    expect(checkbox.find('.ty-checkbox--primary').length).toBe(1);
    expect(checkbox.find('.ty-checkbox--checked').length).toBe(1);
    checkbox.find('input').simulate('change');
    expect(checkbox.find('.ty-checkbox--checked').length).toBe(1);
  });

  it('disabled', () => {
    const checkbox = mount(<Checkbox disabled>checkbox</Checkbox>);
    expect(checkbox.find('.ty-checkbox--disabled').length).toBe(1);
    const indeterminateCheckbox = mount(
      <Checkbox indeterminate disabled>
        checkbox
      </Checkbox>,
    );
    expect(indeterminateCheckbox.find('.ty-checkbox--checked').length).toBe(1);
    expect(indeterminateCheckbox.find('.ty-checkbox--disabled').length).toBe(1);
  });

  it('fire change events when value changes', () => {
    const handleChange = jest.fn();
    const checkbox = mount(<Checkbox onChange={handleChange} />);
    checkbox.find('input').simulate('change');
    expect(handleChange).toHaveBeenCalled();
  });
});
