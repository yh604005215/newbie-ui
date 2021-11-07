/*
 * @Autor: Yhao
 * @Date: 2021-11-06 01:20:50
 * @LastEditors: Yhao
 * @LastEditTime: 2021-11-07 22:30:00
 * @Description:
 */
import { SizeType } from '@/globalContext/sizeContext';
import { Omit } from '@/ts-utils';

export type ButtonType = 'default' | 'primary' | 'normal' | 'warm' | 'danger';
type ButtonDOMProp = Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type IButtonProps = {
  size?: SizeType;
  onClick?: React.MouseEventHandler<HTMLElement>;
  loading?: boolean;
  type: ButtonType;
  disabled?: boolean;
  block?: boolean;
  radius?: boolean;
  icon?: React.ReactNode;
  ghost?: boolean;
} & ButtonDOMProp;
