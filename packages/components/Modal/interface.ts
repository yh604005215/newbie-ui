/*
 * @Author: your name
 * @Date: 2021-04-11 16:15:48
 * @LastEditTime: 2021-04-11 16:27:00
 * @LastEditors: Yhao
 * @Description: In User Settings Edit
 */
import { CSSProperties } from 'react';

export interface ModalProps {
  // 对话框是否可见
  visible: boolean;
  // 取消按钮回调
  onCancel: () => void;
  // 确认按钮回调
  onOk: () => void;
  // 对话框 body 样式
  bodyStyle: CSSProperties;
  // 对话框外层容器的类名
  wrapClassName: string;
}
