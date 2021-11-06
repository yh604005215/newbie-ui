/*
 * @Autor: Yhao
 * @Date: 2021-11-06 01:19:16
 * @LastEditors: Yhao
 * @LastEditTime: 2021-11-07 00:56:54
 * @Description:
 */
import React, { forwardRef } from 'react';
import { IButtonProps } from './interface';
import { uesGlobal } from '@/globalContext/index';
import classNames from 'classnames';
import styles from './Button.less';

const Button = forwardRef<any, IButtonProps>((props) => {
  const {
    type = 'default',
    size,
    icon,
    disabled,
    block,
    radius,
    children,
    className,
    ...rest
  } = props;
  const { buttonSize = 'default' } = uesGlobal();

  console.log(styles);

  return (
    <button className={classNames(styles.btn)} {...rest}>
      {icon}
      {children}
    </button>
  );
});

export default Button;
