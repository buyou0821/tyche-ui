import { createContext } from 'react';
import eq from 'lodash-es/eq';
import { RadioEvent, RadioColor } from './Radio';

export interface RadioContext {
  value: unknown;
  onRadioChange: ((e: RadioEvent) => void) | null;
  color: RadioColor;
  isValueEqual: (a: unknown, b: unknown) => boolean;
  disabled: boolean;
  hasRadioGroup: boolean;
}

const RadioContext = createContext<RadioContext>({
  value: [],
  isValueEqual: eq,
  onRadioChange: null,
  color: 'primary',
  disabled: false,
  hasRadioGroup: false,
});

export default RadioContext;
