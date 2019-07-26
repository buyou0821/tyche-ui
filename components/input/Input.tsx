import React, { forwardRef, useRef, useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_util/hooks';
import omit from '../_util/omit';
import { Omit } from '../_util/type';
import Textarea from './Textarea';

export type InputType = 'text' | 'number' | 'password' | 'textarea';

export interface InputPorps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  className?: string;
  autoFocus?: boolean;
  errorMessage?: string;
  label?: string;
  labelFloat?: boolean;
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  type?: InputType;
  showCount?: boolean;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;

  // textarea
  autoSize?: boolean;
}

const Input = forwardRef((props: InputPorps, ref: React.RefObject<HTMLDivElement>) => {
  const {
    disabled,
    errorMessage,
    label,
    labelFloat,
    prefix,
    suffix,
    type = 'text',
    icon,
    className,
    maxLength,
    value = '',
    showCount,
    autoSize,
    autoFocus,
  } = props;
  const inputRef = useRef<any>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [isFloat, setIsFloat] = useState<boolean>(false);
  const isTextArea = type.toLowerCase() === 'textarea';

  useLayoutEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleFocus = (event: React.FocusEvent<any>) => {
    setFocused(true);
    const { onFocus } = props;
    if (onFocus) {
      onFocus(event);
    }
  };
  const handleBlur = (event: React.FocusEvent<any>) => {
    setFocused(false);
    const { onBlur } = props;
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<any>) => {
    const { onKeyDown, onPressEnter } = props;
    if (onPressEnter && event.keyCode === 13) {
      onPressEnter(event);
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const prefixCls = usePrefixCls('input');
  const inputClasses = clsx(prefixCls, {
    [`${prefixCls}__textarea`]: isTextArea,
  });
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
    'onFocus',
    'onBlur',
    'onKeyDown',
    'onPressEnter',
    'showCount',
    'autoSize',
  ]);

  if (props.placeholder && isFloat) {
    inputProps.placeholder = props.placeholder;
  } else {
    delete inputProps.placeholder;
  }
  const count = `${value}`.length;

  const TextField = isTextArea ? (
    <Textarea
      ref={inputRef}
      className={inputClasses}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      autoSize={autoSize}
      {...inputProps}
    />
  ) : (
    <input
      ref={inputRef}
      className={inputClasses}
      type={type}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...inputProps}
    />
  );

  return (
    <div ref={ref} className={wrapperClasses}>
      {Icon}
      <div className={mainClasses}>
        <div className={contentClasses}>
          {Label}
          {isFloat && Prefix}
          {TextField}
          {isFloat && Suffix}
        </div>
        {(errorMessage || maxLength) && (
          <div className={`${prefixCls}__info`}>
            <div className={`${prefixCls}__errorMessage`}>{errorMessage}</div>
            {showCount && maxLength && (
              <div className={`${prefixCls}__length`}>{`${count}/${maxLength}`}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

export default Input;
