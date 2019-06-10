import React, { forwardRef, useRef, useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_util/hooks';
import omit from '../_util/omit';
import { Omit } from '../_util/type';

export type InputType = 'text' | 'number' | 'password' | 'textarea';

interface InputPorps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  className?: string;
  errorMessage?: string;
  label?: string;
  labelFloat?: boolean;
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  type?: InputType;
}

const Input = forwardRef((props: InputPorps, ref: React.RefObject<HTMLDivElement>) => {
  const {
    disabled,
    errorMessage,
    label,
    labelFloat,
    prefix,
    suffix,
    type = 'input',
    icon,
    className,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [isFloat, setIsFloat] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const prefixCls = usePrefixCls('input');
  const inputClasses = clsx(prefixCls);
  const wrapperClasses = clsx(
    `${prefixCls}__wrapper`,
    {
      [`${prefixCls}--error`]: errorMessage !== undefined,
      [`${prefixCls}--disabled`]: disabled,
    },
    className,
  );
  const iconClasses = clsx(`${prefixCls}__icon`, {
    [`${prefixCls}__icon--focused`]: focused,
  });
  const contentClasses = clsx(`${prefixCls}__content`, {
    [`${prefixCls}--focus`]: focused,
  });
  const mainClasses = clsx(`${prefixCls}__main`, {});
  const labelClasses = clsx(`${prefixCls}__label`, {
    [`${prefixCls}__label--focused`]: isFloat,
  });

  useLayoutEffect(() => {
    if (focused || (inputRef.current && inputRef.current.value.length > 0) || !labelFloat) {
      setIsFloat(true);
    }
    return () => {
      setIsFloat(false);
    };
  }, [focused]);

  const Label = label ? <label className={labelClasses}>{label}</label> : null;
  const Icon = icon ? <div className={iconClasses}>{icon}</div> : null;
  const Prefix = prefix ? <span className={`${prefixCls}__prefix`}>{prefix}</span> : null;
  const Suffix = suffix ? <span className={`${prefixCls}__suffix`}>{suffix}</span> : null;

  const inputProps: any = omit(props, [
    'className',
    'prefix',
    'suffix',
    'errorMessage',
    'label',
    'labelFloat',
    'placeholder',
    'icon',
  ]);

  if (props.placeholder && isFloat) {
    inputProps.placeholder = props.placeholder;
  } else {
    delete inputProps.placeholder;
  }

  return (
    <div ref={ref} className={wrapperClasses}>
      {Icon}
      <div className={mainClasses}>
        <div className={contentClasses}>
          {Label}
          {isFloat && Prefix}
          <input
            ref={inputRef}
            className={inputClasses}
            type={type}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...inputProps}
          />
          {isFloat && Suffix}
        </div>
        {errorMessage && (
          <div className={`${prefixCls}__info`}>
            <div className={`${prefixCls}__errorMessage`}>{errorMessage}</div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Input;
