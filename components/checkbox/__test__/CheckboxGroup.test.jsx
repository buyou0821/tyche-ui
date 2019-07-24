import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from '..';

describe('Checkbox Group', () => {
  it('initial value', () => {
    const initialVal = ['apple', 'banana'];
    const { container } = render(
      <Checkbox.Group value={initialVal}>
        <Checkbox value="apple">apple</Checkbox>
        <Checkbox value="banana">banana</Checkbox>
        <Checkbox value="orange">orange</Checkbox>
      </Checkbox.Group>,
    );

    expect(container.querySelectorAll('label')[0].classList).toContain('ty-checkbox--checked');
    expect(container.querySelectorAll('label')[1].classList).toContain('ty-checkbox--checked');
    expect(container.querySelectorAll('label')[2].classList).not.toContain('ty-checkbox--checked');
  });

  it('onChange', () => {
    let value = ['apple'];
    const handleChange = checkedList => {
      value = checkedList;
    };
    const { getByLabelText } = render(
      <Checkbox.Group value={value} onChange={handleChange}>
        <Checkbox value="apple">apple</Checkbox>
        <Checkbox value="banana">banana</Checkbox>
        <Checkbox value="orange">orange</Checkbox>
      </Checkbox.Group>,
    );
    fireEvent.click(getByLabelText('banana'));
    expect(value).toEqual(['apple', 'banana']);

    fireEvent.click(getByLabelText('apple'));
    expect(value).toEqual([]);
  });
});
