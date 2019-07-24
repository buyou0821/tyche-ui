import { createContext } from 'react';
import eq from 'lodash-es/eq';
import { CheckboxColor, CheckboxEvent } from './Checkbox';

export interface CheckboxContext {
  value: unknown[];
  color: CheckboxColor;
  disabled: boolean;
  readOnly: boolean;
  isValueEqual: (a: unknown, b: unknown) => boolean;
  onCheckboxChange: ((e: CheckboxEvent) => void) | null;
  hasCheckboxGroup: boolean;
}

export default createContext<CheckboxContext>({
  value: [],
  color: 'primary',
  disabled: false,
  readOnly: false,
  isValueEqual: eq,
  onCheckboxChange: null,
  hasCheckboxGroup: false,
});
