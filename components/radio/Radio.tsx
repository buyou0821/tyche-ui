import React, { forwardRef, useContext, useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_util/hooks';
import { tuple } from '../_util/type';
import Button from '../button';
import RadioContext from './RadioContext';
import RadioGroup from './RadioGroup';

const RadioColors = tuple('primary', 'secondary', 'success', 'warning', 'danger');
export type RadioColor = (typeof RadioColors)[number];

export interface RadioEvent {
  target: {
    type: 'radio';
    checked: boolean;
  } & RadioProps;
  preventDefault(): void;
  stopPropagation(): void;
}

interface RadioProps {
  color?: RadioColor;
  checked?: boolean;
  disabled?: boolean;
  value?: any;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onChange?: (e: RadioEvent) => void;
}

interface RadioGroupComponent<p> extends React.ForwardRefExoticComponent<p> {
  Group: typeof RadioGroup;
}

const Radio = forwardRef((props: RadioProps, ref: React.RefObject<HTMLLabelElement>) => {
  const { value, checked = false, children } = props;
  const context = useContext(RadioContext);
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useLayoutEffect(() => {
    const { isValueEqual, hasRadioGroup } = context;
    if (hasRadioGroup) {
      setIsChecked(isValueEqual(value, context.value));
    } else {
      setIsChecked(checked);
    }
  }, [value, context.value, checked]);

  const getRadioState = (): RadioProps => {
    const { disabled } = props;
    const result: RadioProps = {};

    result.disabled = context.disabled || disabled;

    // props fisrt
    ['color'].reduce((prev, key) => {
      prev[key] = props[key] !== undefined ? props[key] : context[key];
      return prev;
    }, result);

    return result;
  };

  const { color, disabled } = getRadioState();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const evt: RadioEvent = {
      target: {
        ...props,
        type: 'radio',
        checked: event.target.checked,
      },
      preventDefault() {
        event.preventDefault();
      },
      stopPropagation() {
        event.stopPropagation();
      },
    };

    if (context.onRadioChange) {
      context.onRadioChange(evt);
    } else if (props.onChange) {
      props.onChange(evt);
    } else {
      setIsChecked(true);
    }
  };

  const prefixCls = usePrefixCls('radio');
  const classes = clsx(prefixCls, {
    [`${prefixCls}--${color}`]: isChecked && !disabled,
    [`${prefixCls}--checked`]: isChecked,
    [`${prefixCls}--disabled`]: disabled,
  });

  return (
    <label className={classes} ref={ref}>
      <span className={`${prefixCls}__icon`}>
        <input
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
          className={`${prefixCls}__input`}
          type="radio"
        />
        <Button
          component="span"
          className={`${prefixCls}__ripple`}
          shape="icon"
          color={color}
          disabled={disabled}
        />
        <svg className={`${prefixCls}__border`} viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        </svg>
        <svg className={`${prefixCls}__circle`} viewBox="0 0 24 24">
          <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" />
        </svg>
      </span>
      <span>{children}</span>
    </label>
  );
}) as RadioGroupComponent<RadioProps>;

Radio.Group = RadioGroup;

export default Radio;
