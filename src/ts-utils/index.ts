/*
 * @Autor: Yhao
 * @Date: 2021-11-06 00:41:49
 * @LastEditors: Yhao
 * @LastEditTime: 2021-11-06 22:56:46
 * @Description: ts 工具
 */

// Partial转换为可选属性Partial
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Required转换为必填属性
export type Required<T> = {
  [P in keyof T]-?: T[P];
};

// Readonly属性变成只读
export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Pick 把属性挑选出来
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Record用于创建一个具有同类型属性值的对象。
export type Record<K extends keyof any, T> = {
  [P in K]: T;
};

// 从类型 T 中剔除所有可以赋值给 U 的属性，然后构造一个类型。主要用于联合类型。
export type Exclude<T, U> = T extends U ? never : T;

//  从类型 T 中选中所有可以赋值给 U 的属性
export type Extract<T, U> = T extends U ? T : never;

// 主要用于剔除interface中的部分属性
export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export const tuple = <T extends string[]>(...args: T) => args;