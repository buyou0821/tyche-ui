import React, { forwardRef, useRef, useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_util/hooks';
import { Omit } from '../_util/type';
import { useForkRef } from '../_util/reactHelpers';
import { tuple } from '../_util/type';
import Button from '../button';

const SwitchColors = tuple('default', 'primary', 'secondary', 'success', 'warning', 'danger');
export type SwitchColor = (typeof SwitchColors)[number];

export interface SwitchEvent {
  target: {
    type: 'switch';
    checked: boolean;
  } & SwitchProps;
  preventDefault(): void;
  stopPropagation(): void;
}
export type SwitchSize = 'default' | 'small';
export type SwitchChangeEventHandler = (checked: boolean, event: SwitchEvent) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface SwitchProps
  extends Omit<React.DOMAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
  disabled?: boolean;
  checked?: boolean;
  autoFocus?: boolean;
  loading?: boolean;
  size?: SwitchSize;
  onChange?: SwitchChangeEventHandler;
  onClick?: SwitchClickEventHandler;
  style?: React.CSSProperties;
  color?: SwitchColor;
}

const Switch = forwardRef((props: SwitchProps, ref: React.RefObject<HTMLButtonElement>) => {
  const {
    checked = false,
    autoFocus,
    disabled,
    onChange,
    onClick,
    color = 'default',
    ...rest
  } = props;
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const prefixCls = usePrefixCls('switch');
  const switchRef = useRef<HTMLButtonElement>(null);
  const handleRef = useForkRef(ref, switchRef);

  useLayoutEffect(() => {
    if (autoFocus && !disabled) {
      focus();
    }
  }, [autoFocus, disabled]);

  const focus = () => {
    if (switchRef && switchRef.current) {
      switchRef.current.focus();
    }
  };

  const blur = () => {
    if (switchRef.current) {
      switchRef.current.blur();
    }
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { onMouseUp } = props;
    blur();
    if (onMouseUp) {
      onMouseUp(event);
    }
  };

  const handleChange = (checked: boolean, evt: SwitchEvent) => {
    if (disabled) return;
    if (!('checked' in props)) {
      setIsChecked(checked);
    }
    if (onChange) {
      onChange(checked, evt);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newChecked = !isChecked;
    const evt: SwitchEvent = {
      target: {
        type: 'switch',
        checked: newChecked,
        ...props,
      },
      preventDefault() {
        event.preventDefault();
      },
      stopPropagation() {
        event.stopPropagation();
      },
    };
    handleChange(newChecked, evt);
    if (onClick) {
      onClick(newChecked, evt);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const newChecked = {
      37: false, // Left
      39: true, // Right
    }[event.keyCode];
    const evt: SwitchEvent = {
      target: {
        type: 'switch',
        checked: newChecked,
        ...props,
      },
      preventDefault() {
        event.preventDefault();
      },
      stopPropagation() {
        event.stopPropagation();
      },
    };
    handleChange(newChecked, evt);
  };

  const classes = clsx(prefixCls, {
    [`${prefixCls}--checked`]: isChecked,
    [`${prefixCls}--${color}`]: color && !disabled && isChecked,
  });

  const rippleColor = color && !disabled && isChecked ? color : 'default';

  return (
    <button
      {...rest}
      ref={handleRef}
      className={classes}
      role="switch"
      aria-checked={isChecked}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <span className={`${prefixCls}__node`} />
      <Button
        component="span"
        shape="icon"
        center
        className={`${prefixCls}__ripple`}
        disabled={disabled}
        color={rippleColor}
      >
        <span className={`${prefixCls}__circle`} />
      </Button>
    </button>
  );
});

export default Switch;
