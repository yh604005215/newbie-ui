/*
 * @Autor: Yhao
 * @Date: 2021-11-06 01:12:33
 * @LastEditors: Yhao
 * @LastEditTime: 2021-11-07 21:03:19
 * @Description:
 */
import { createContext, useContext } from 'react';
import { SizeType } from './sizeContext';

interface IContext {
  button: {
    size: SizeType;
    radius: boolean;
  };
}

const context = createContext<IContext>({
  button: {
    size: 'default',
    radius: false,
  },
});

export const GlobalProvider = context.Provider;

export const GlobalConsumer = context.Consumer;

export const uesGlobal = () => useContext(context) || {};
