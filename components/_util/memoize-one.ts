export type EqualityFn = (newArgs: unknown[], lastArgs: unknown[]) => boolean;

const areInputsEqual: EqualityFn = (newInputs: unknown[], lastInputs: unknown[]): boolean => {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (let i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }
  return true;
};

export default function<F extends Function>(resultFn: F, isEqual: EqualityFn = areInputsEqual): F {
  let lastThis: unknown;
  let lastArgs: unknown[] = [];
  let lastResult: unknown;
  let calledOnce = false;

  const result = function(...newArgs: unknown[]) {
    if (calledOnce && lastThis === this && isEqual(lastArgs, newArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return (result as unknown) as F;
}
