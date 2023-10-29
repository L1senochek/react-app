import React, { Component } from 'react';
import './error-btn.scss';

class ErrorBtn extends Component {
  state = {
    isError: false,
  };

  clickOnBtnError = () => {
    this.setState({ isError: true });
  };

  generateError = (): never => {
    throw new Error('Error');
  };

  render = (): JSX.Element => {
    return (
      <div className="error-btn">
        <button className="error-btn__btn" onClick={this.clickOnBtnError}>
          Error
        </button>
        {this.state.isError && this.generateError()}
      </div>
    );
  };
}

export default ErrorBtn;
