import React, { Component } from 'react';
import './btn.scss';
import BtnProps from '../../model/components/Btn/Btn';

class Btn extends Component<BtnProps> {
  render = () => {
    return (
      <button
        className={`${this.props.classNameBtn} btn`}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  };
}

export default Btn;
