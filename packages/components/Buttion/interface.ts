/*
 * @Autor: Yhao
 * @Date: 2021-04-11 16:43:06
 * @LastEditors: Yhao
 * @LastEditTime: 2021-04-11 16:58:17
 * @Description:
 */
import { tuple } from '../../_utils/types';

const ButtonTypes = tuple(
  'default',
  'primary',
  'ghost',
  'dashed',
  'link',
  'text',
);

export type ButtonType = typeof ButtonTypes[number];

export interface ButtonProps {
  type?: ButtonType;
}
