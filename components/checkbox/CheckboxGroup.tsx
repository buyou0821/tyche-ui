import React, { forwardRef, useCallback, useState } from 'react';
import eq from 'lodash-es/eq';
import { usePrefixCls } from '../_util/hooks';
import CheckboxContext from './CheckboxContext';
import { CheckboxEvent, CheckboxColor } from './Checkbox';
import Checkbox from './Checkbox';

const { Provider } = CheckboxContext;

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  disabled?: boolean;
  onChange?: (e: CheckboxEvent) => void;
}

export interface CheckboxGroupProps {
  value?: Array<CheckboxValueType>;
  defaultValue?: Array<CheckboxValueType>;
  color?: CheckboxColor;
  disabled?: boolean;
  isValueEqual?: (a: CheckboxValueType, b: CheckboxValueType) => boolean;
  onChange?: (values: Array<CheckboxValueType>) => void;
  options?: Array<CheckboxOptionType | string>;
  children?: React.ReactNode;
}

const CheckboxGroup = forwardRef(
  (props: CheckboxGroupProps, ref: React.RefObject<HTMLDivElement>) => {
    const {
      color = 'primary',
      disabled = false,
      isValueEqual = eq,
      onChange,
      options,
      defaultValue = [],
      value = defaultValue,
    } = props;
    const [groupValue, setGroupValue] = useState(value);

    const handleChange = (e: CheckboxEvent) => {
      const changedValue = e.target.value as CheckboxValueType;
      const checkedList = props.value ? value.slice() : groupValue.slice();

      const index = checkedList.findIndex(val => isValueEqual(val, changedValue));
      if (index !== -1) {
        checkedList.splice(index, 1);
      } else {
        checkedList.push(changedValue);
      }

      if (options && options.length > 0) {
        checkedList.sort((a, b) => {
          const indexA = getOptions().findIndex(opt => isValueEqual(opt.value, a));
          const indexB = getOptions().findIndex(opt => isValueEqual(opt.value, b));
          return indexA - indexB;
        });
      }

      if (!props.value) {
        setGroupValue(checkedList);
      }
      if (onChange) {
        onChange(checkedList);
      }
    };

    const getContextValue = useCallback(
      (
        value: Array<CheckboxValueType>,
        color: CheckboxColor,
        disabled: boolean,
        isValueEqual: (a: CheckboxValueType, b: CheckboxValueType) => boolean,
      ) => ({
        value,
        color,
        isValueEqual,
        disabled,
        onCheckboxChange: handleChange,
        hasCheckboxGroup: true,
      }),
      [value, color, disabled, isValueEqual, groupValue],
    );

    const getOptions = (): Array<CheckboxOptionType> => {
      return (options as Array<CheckboxOptionType>).map(option => {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option,
          };
        }
        return option;
      });
    };

    let { children } = props;
    if (options && options.length > 0) {
      children = getOptions().map(option => (
        <Checkbox
          key={option.value.toString()}
          value={option.value}
          disabled={'disabled' in option ? option.disabled : props.disabled}
          onChange={option.onChange}
        >
          {option.label}
        </Checkbox>
      ));
    }

    const prefixCls = usePrefixCls('checkbox');

    return (
      <Provider
        value={getContextValue(
          props.value ? props.value : groupValue,
          color,
          disabled,
          isValueEqual,
        )}
      >
        <div ref={ref} className={`${prefixCls}__group`}>
          {children}
        </div>
      </Provider>
    );
  },
);

export default CheckboxGroup;
