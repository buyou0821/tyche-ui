import { createContext, Context } from 'react';

export interface RowContextState {
  gutter?: number;
}

const RowContext: Context<RowContextState> = createContext({});

export default RowContext;
