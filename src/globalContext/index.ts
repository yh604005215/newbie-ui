/*
 * @Autor: Yhao
 * @Date: 2021-11-06 01:12:33
 * @LastEditors: Yhao
 * @LastEditTime: 2021-11-06 01:18:08
 * @Description:
 */
import { createContext, useContext } from 'react';

const content = createContext({});

export const GlobalProvider = content.Provider;

export const GlobalConsumer = content.Consumer;

export const uesGlobal = () => useContext(content);
