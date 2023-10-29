import React, { Component } from 'react';
import './error-btn.scss';
import Btn from '../Button/Btn';

class ErrorBtn extends Component {
  state = {
    isError: false,
  };

  clickOnBtnError = (): void => {
    this.setState({ isError: true });
  };

  generateError = (): never => {
    throw new Error('Error');
  };

  render = (): JSX.Element => {
    return (
      <div className="error-btn">
        <Btn
          classNameBtn="error-btn__btn"
          onClick={this.clickOnBtnError}
          text="Error"
        />
        {this.state.isError && this.generateError()}
      </div>
    );
  };
}

export default ErrorBtn;
