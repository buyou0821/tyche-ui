import { createContext } from 'react';
import eq from 'lodash-es/eq';
import { CheckboxColor, CheckboxEvent } from './Checkbox';
import { CheckboxValueType } from './CheckboxGroup';

export interface CheckboxContext {
  value: Array<CheckboxValueType>;
  color: CheckboxColor;
  disabled: boolean;
  isValueEqual: (a: unknown, b: unknown) => boolean;
  onCheckboxChange: ((e: CheckboxEvent) => void) | null;
  hasCheckboxGroup: boolean;
}

export default createContext<CheckboxContext>({
  value: [],
  color: 'primary',
  disabled: false,
  isValueEqual: eq,
  onCheckboxChange: null,
  hasCheckboxGroup: false,
});
