import React, { forwardRef, useCallback } from 'react';
import eq from 'lodash-es/eq';
import CheckboxContext from './CheckboxContext';
import { CheckboxEvent, CheckboxColor } from './Checkbox';

const { Provider } = CheckboxContext;

interface CheckboxGroupProps {
  value?: unknown[];
  color?: CheckboxColor;
  disabled?: boolean;
  readOnly?: boolean;
  isValueEqual?: (value1: unknown, value2: unknown) => boolean;
  onChange: (values: any[]) => void;
  children: React.ReactNode;
}

const CheckboxGroup = forwardRef(
  (props: CheckboxGroupProps, ref: React.RefObject<HTMLDivElement>) => {
    const {
      value = [],
      color = 'primary',
      disabled = false,
      readOnly = false,
      isValueEqual = eq,
      onChange,
      children,
    } = props;

    const handleChange = (e: CheckboxEvent) => {
      const changedValue = e.target.value;
      const groupValue = value.slice();
      const index = groupValue.findIndex(val => isValueEqual(val, changedValue));

      if (index !== -1) {
        groupValue.splice(index, 1);
      } else {
        groupValue.push(changedValue);
      }

      onChange(groupValue);
    };

    const getContextValue = useCallback(
      (
        value: unknown[],
        color: CheckboxColor,
        disabled: boolean,
        readOnly: boolean,
        isValueEqual: (a: unknown, b: unknown) => boolean,
      ) => ({
        value,
        color,
        isValueEqual,
        disabled,
        readOnly,
        onCheckboxChange: handleChange,
        hasCheckboxGroup: true,
      }),
      [value, color, disabled, readOnly, isValueEqual],
    );

    return (
      <Provider value={getContextValue(value, color, disabled, readOnly, isValueEqual)}>
        <div ref={ref}>{children}</div>
      </Provider>
    );
  },
);

export default CheckboxGroup;
