/*
 * @Autor: Yhao
 * @Date: 2021-11-07 20:52:29
 * @LastEditors: Yhao
 * @LastEditTime: 2021-11-07 20:57:42
 * @Description:
 */
import { uesGlobal } from '@/globalContext';

export const useButtonContext = () => {
  const { button } = uesGlobal() || {};

  return button || {};
};
