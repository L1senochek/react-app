import { ReactNode } from 'react';

export interface IErrorBoundlerProps {
  children?: ReactNode;
}

export interface IErrorBoundlerState {
  hasError: boolean;
  buttonClicked: boolean;
}
