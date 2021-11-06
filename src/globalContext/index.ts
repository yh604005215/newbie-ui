/*
 * @Autor: Yhao
 * @Date: 2021-11-06 01:12:33
 * @LastEditors: Yhao
 * @LastEditTime: 2021-11-06 23:08:54
 * @Description:
 */
import { createContext, useContext } from 'react';
import { SizeType } from './sizeContext';

interface IContext {
  buttonSize: SizeType
}

const context = createContext<IContext>({
  buttonSize: 'default'
});

export const GlobalProvider = context.Provider;

export const GlobalConsumer = context.Consumer;

export const uesGlobal = () => useContext(context) || {};
