/*
 * @Autor: Yhao
 * @Date: 2021-11-06 01:20:50
 * @LastEditors: Yhao
 * @LastEditTime: 2021-11-06 23:28:22
 * @Description: 
 */
import { SizeType } from '@/globalContext/sizeContext';
import { Omit } from '@/ts-utils'

export type ButtonType = 'primary' | 'default' | 'normal' | 'warm' | 'danger' | PrimaryType
type PrimaryType = 'primary-default' | 'primary-normal' | 'primary-warm' | 'primary-danger';

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
} & ButtonDOMProp