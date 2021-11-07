/*
 * @Autor: Yhao
 * @Date: 2021-11-06 01:19:16
 * @LastEditors: Yhao
 * @LastEditTime: 2021-11-07 23:36:43
 * @Description:
 */
import React, { forwardRef, useMemo } from 'react';
import { IButtonProps } from './interface';
import { useButtonContext } from './context';
import classNames from 'classnames';
import styles from './Button.less';

const Button = forwardRef<unknown, IButtonProps>((props, ref) => {
  const {
    ghost = false,
    type = 'default',
    size,
    icon,
    disabled,
    block,
    radius,
    children,
    className,
    loading,
    ...rest
  } = props;
  const context = useButtonContext();

  const classs = useMemo<string>(() => {
    return classNames(
      {
        [styles.button]: true,
        [styles.ghost]: ghost,
        [styles.radius]: radius || context.radius,
        [styles.disabled]: disabled,
        [styles.block]: block,
      },
      !type || type === 'default' ? null : styles[type],
      styles[size || context.size || 'default'],
      className,
    );
  }, [type, context, size, block, radius, ghost, className]);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    const { onClick, disabled } = props;
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };

  return (
    <button {...rest} className={classs} onClick={handleClick} ref={ref as any}>
      {icon}
      {children}
    </button>
  );
});

export default Button;
