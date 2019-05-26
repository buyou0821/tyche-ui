import { createContext, Context } from 'react';

interface RowContextState {
  gutter?: number;
}

const RowContext: Context<RowContextState> = createContext({});

export default RowContext;
