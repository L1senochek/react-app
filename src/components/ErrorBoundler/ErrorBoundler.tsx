import React, { Component, ErrorInfo } from 'react';
import './error-boundler.scss';
import IconErrorDino from '../IconErrorDino/IconErrorDino';
import {
  IErrorBoundlerProps,
  IErrorBoundlerState,
} from '../../model/components/ErrorBoundler/ErrorBoundler';
import Btn from '../Button/Btn';

export class ErrorBoundler extends Component<
  IErrorBoundlerProps,
  IErrorBoundlerState
> {
  public state: IErrorBoundlerState = {
    hasError: false,
    buttonClicked: false,
  };

  public static getDerivedStateFromError = (): IErrorBoundlerState => {
    return { hasError: true, buttonClicked: false };
  };

  public componentDidCatch = (error: Error, errorInfo: ErrorInfo): void => {
    console.error('Error:', error, errorInfo);
  };

  private handleReloadClick = (): void => {
    this.setState({ buttonClicked: true });
  };

  public render = ():
    | string
    | number
    | boolean
    | Iterable<React.ReactNode>
    | JSX.Element
    | null
    | undefined => {
    if (this.state.hasError) {
      if (this.state.buttonClicked) {
        return this.props.children;
      }
      return (
        <div className="error__wrapper">
          <h2 className="error__title">Error...</h2>
          <div className="error__img-wrapper">
            <IconErrorDino />
          </div>
          <Btn
            classNameBtn="error__btn"
            onClick={this.handleReloadClick}
            text="Back"
          />
        </div>
      );
    }

    return this.props.children;
  };
}

export default ErrorBoundler;
