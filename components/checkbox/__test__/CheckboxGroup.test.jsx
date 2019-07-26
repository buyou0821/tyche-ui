import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from '..';

describe('Checkbox Group', () => {
  it('initial value', () => {
    const initialVal = ['Apple', 'Pear'];
    const { container } = render(
      <Checkbox.Group value={initialVal}>
        <Checkbox value="Apple">Apple</Checkbox>
        <Checkbox value="Pear">Pear</Checkbox>
        <Checkbox value="Orange">Orange</Checkbox>
      </Checkbox.Group>,
    );

    expect(container.querySelectorAll('label')[0].classList).toContain('ty-checkbox--checked');
    expect(container.querySelectorAll('label')[1].classList).toContain('ty-checkbox--checked');
    expect(container.querySelectorAll('label')[2].classList).not.toContain('ty-checkbox--checked');
  });

  it('onChange', () => {
    let value = ['Apple'];
    const handleChange = checkedList => {
      value = checkedList;
    };
    const { getByLabelText } = render(
      <Checkbox.Group value={value} onChange={handleChange}>
        <Checkbox value="Apple">Apple</Checkbox>
        <Checkbox value="Banana">Banana</Checkbox>
        <Checkbox value="Orange">Orange</Checkbox>
      </Checkbox.Group>,
    );
    fireEvent.click(getByLabelText('Banana'));
    expect(value).toEqual(['Apple', 'Banana']);

    fireEvent.click(getByLabelText('Apple'));
    expect(value).toEqual([]);
  });

  it('options', () => {
    const options = [
      'Apple',
      { label: 'Banana', value: 'Banana' },
      { label: 'Orange', value: 'Orange', disabled: true },
    ];
    let value = ['Apple'];
    const handleChange = checkedList => {
      value = checkedList;
    };
    const { getByLabelText, container } = render(
      <Checkbox.Group value={value} options={options} onChange={handleChange} />,
    );
    fireEvent.click(getByLabelText('Banana'));
    expect(value).toEqual(['Apple', 'Banana']);

    fireEvent.click(getByLabelText('Apple'));
    expect(value).toEqual([]);

    expect(container.querySelectorAll('.ty-checkbox')[2].classList).toContain(
      'ty-checkbox--disabled',
    );
  });

  it('onChange', () => {
    const groupChange = jest.fn();
    const checkboxChange = jest.fn();
    const options = [
      {
        label: 'Orange',
        value: 'Orange',
        onChange() {
          checkboxChange();
        },
      },
    ];
    const { getByLabelText } = render(<Checkbox.Group options={options} onChange={groupChange} />);

    fireEvent.click(getByLabelText('Orange'));
    expect(checkboxChange).toHaveBeenCalledBefore(groupChange);
  });
});
