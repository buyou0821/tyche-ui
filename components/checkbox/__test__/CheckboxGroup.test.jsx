import React from 'react';
import { mount } from 'enzyme';
import Checkbox from '..';

describe('Checkbox Group', () => {
  it('initial value', () => {
    const initialVal = [1, 2];
    const wrapper = mount(
      <Checkbox.Group value={initialVal}>
        <Checkbox value={1}>1</Checkbox>
        <Checkbox value={2}>2</Checkbox>
        <Checkbox value={3}>3</Checkbox>
      </Checkbox.Group>,
    );

    expect(
      wrapper
        .find(Checkbox)
        .at(0)
        .children()
        .hasClass('ty-checkbox--checked'),
    ).toBe(true);

    expect(
      wrapper
        .find(Checkbox)
        .at(1)
        .children()
        .hasClass('ty-checkbox--checked'),
    ).toBe(true);

    expect(
      wrapper
        .find(Checkbox)
        .at(2)
        .children()
        .hasClass('ty-checkbox--checked'),
    ).toBe(false);
  });
});
