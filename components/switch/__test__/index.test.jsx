import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from '..';

describe('Switch', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should support checked', () => {
    render(<Switch checked />);
    expect(document.querySelectorAll('.ty-switch--checked').length).toBe(1);
  });

  it('should support keyBoard events', () => {
    render(<Switch autoFocus />);
    const switchDOM = document.querySelector('.ty-switch');
    expect(switchDOM.classList).not.toContain('ty-switch--checked');
    fireEvent.keyDown(switchDOM, { key: 'right', keyCode: 39 });
    expect(switchDOM.classList).toContain('ty-switch--checked');
    fireEvent.keyDown(switchDOM, { key: 'left', keyCode: 37 });
    expect(switchDOM.classList).not.toContain('ty-switch--checked');
  });

  it('should fire onChange correctly', () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);
    const switchDOM = document.querySelector('.ty-switch');
    fireEvent.click(switchDOM);
    expect(handleChange).toHaveBeenCalled();
  });

  it('should support disabled', () => {
    const handleChange = jest.fn();
    const { container } = render(<Switch disabled onChange={handleChange} />);
    fireEvent.click(container);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should fire onClick correctly', () => {
    const handleClick = jest.fn();
    render(<Switch onClick={handleClick} />);
    const switchDOM = document.querySelector('.ty-switch');
    fireEvent.click(switchDOM);
    expect(handleClick).toHaveBeenCalled();
  });

  it('should support defaultChecked', () => {
    const { container } = render(<Switch defaultChecked />);
    expect(container.querySelectorAll('.ty-switch--checked').length).toBe(1);
    fireEvent.click(container.querySelector('.ty-switch'));
    expect(container.querySelectorAll('.ty-switch--checked').length).toBe(0);
  });
});
