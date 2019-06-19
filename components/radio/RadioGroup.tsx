import React, { forwardRef, ReactNode, useCallback } from 'react';
import eq from 'lodash-es/eq';
import RadioContext from './RadioContext';
import { RadioEvent, RadioColor } from './Radio';

const { Provider } = RadioContext;

interface RadioGroupProps {
  color?: RadioColor;
  children?: ReactNode;
  disabled?: boolean;
  isValueEqual?: (value1: unknown, value2: unknown) => boolean;
  onChange: (e: RadioEvent) => void;
  value: unknown;
}

const RadioGroup = forwardRef((props: RadioGroupProps, ref: React.RefObject<HTMLDivElement>) => {
  const {
    value,
    children,
    isValueEqual = eq,
    onChange,
    color = 'primary',
    disabled = false,
  } = props;

  const getContextValue = useCallback(
    (
      value: unknown,
      isValueEqual: (a: unknown, b: unknown) => boolean,
      color: RadioColor,
      disabled: boolean,
    ) => ({
      value,
      isValueEqual,
      color,
      disabled,
      onRadioChange: onChange,
    }),
    [],
  );

  return (
    <Provider value={getContextValue(value, isValueEqual, color, disabled)}>
      <div ref={ref}>{children}</div>
    </Provider>
  );
});

export default RadioGroup;
