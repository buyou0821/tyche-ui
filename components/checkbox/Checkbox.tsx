import React, { forwardRef, useState, useContext, useLayoutEffect } from 'react';
import clsx from 'clsx';
import Button from '../button';
import { usePrefixCls } from '../_util/hooks';
import { tuple } from '../_util/type';
import CheckboxContext from './CheckboxContext';
import Group from './CheckboxGroup';

const CheckboxColors = tuple('primary', 'secondary', 'success', 'warning', 'danger');
export type CheckboxColor = (typeof CheckboxColors)[number];

export interface CheckboxEventTarget extends CheckboxProps {
  type: 'checkbox';
  checked: boolean;
}

export interface CheckboxEvent {
  target: CheckboxEventTarget;
  preventDefault(): void;
  stopPropagation(): void;
}

export interface CheckboxComponent<p> extends React.ForwardRefExoticComponent<p> {
  Group: typeof Group;
}

export interface CheckboxProps {
  checked?: boolean;
  color?: CheckboxColor;
  value?: unknown;
  disabled?: boolean;
  readOnly?: boolean;
  indeterminate?: boolean;
  onChange?: (e: CheckboxEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  indeterminateIcon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
}

const defaultIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
);
const defaultCheckedIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);
const defaultIndeterminateIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" />
  </svg>
);

const Checkbox = forwardRef((props: CheckboxProps, ref: React.RefObject<HTMLLabelElement>) => {
  const context = useContext(CheckboxContext);
  const {
    className,
    checked = false,
    color = context.color,
    value,
    indeterminate,
    children,
    icon = defaultIcon,
    checkedIcon = defaultCheckedIcon,
    indeterminateIcon = defaultIndeterminateIcon,
  } = props;
  const [isChecked, setIsChecked] = useState<Boolean>(checked);

  useLayoutEffect(() => {
    if (context.hasCheckboxGroup) {
      const checked = !!(context.value as unknown[]).find((val: unknown) =>
        context.isValueEqual(val, value),
      );
      setIsChecked(checked);
    }
  }, [context.value, value]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const evt: CheckboxEvent = {
      target: {
        ...props,
        type: 'checkbox',
        checked: event.target.checked,
      },
      preventDefault() {
        event.preventDefault();
      },
      stopPropagation() {
        event.stopPropagation();
      },
    };
    if (context.onCheckboxChange) {
      context.onCheckboxChange(evt);
    } else if (props.onChange) {
      props.onChange(evt);
    } else {
      setIsChecked(!isChecked);
    }
  };

  let { disabled, readOnly } = props;
  if (context.hasCheckboxGroup) {
    disabled = context.disabled || disabled;
    readOnly = context.readOnly || readOnly;
  }

  const prefixCls = usePrefixCls('checkbox');
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--${color}`]: (indeterminate || isChecked) && !disabled,
    [`${prefixCls}--checked`]: indeterminate || isChecked,
    [`${prefixCls}--disabled`]: disabled,
  });

  const renderCheckedIcon = () => {
    const icon = indeterminate ? indeterminateIcon : checkedIcon;
    return React.cloneElement(icon as React.ReactElement, { className: `${prefixCls}__inner` });
  };
  const renderIcon = () =>
    React.cloneElement(icon as React.ReactElement, { className: `${prefixCls}__border` });

  return (
    <label ref={ref} className={classes}>
      <span className={`${prefixCls}__icon`}>
        <input
          type="checkbox"
          className={`${prefixCls}__input`}
          disabled={disabled}
          checked={isChecked && !indeterminate}
          readOnly={readOnly}
          onChange={handleChange}
        />
        {renderIcon()}
        {renderCheckedIcon()}
        <Button
          component="span"
          className={`${prefixCls}__ripple`}
          shape="icon"
          color={color}
          disabled={disabled}
        />
      </span>
      <span className={`${prefixCls}__text`}>{children}</span>
    </label>
  );
}) as CheckboxComponent<CheckboxProps>;

Checkbox.Group = Group;

export default Checkbox;
