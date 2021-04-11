/*
 * @Autor: Yhao
 * @Date: 2021-04-11 16:42:50
 * @LastEditors: Yhao
 * @LastEditTime: 2021-04-11 16:58:07
 * @Description:
 */
import React, { forwardRef } from 'react';
import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = forwardRef(props => {
  const { children } = props;
  return <button>{children}</button>;
});

Button.defaultProps = {
  type: 'default',
};

export default Button;
