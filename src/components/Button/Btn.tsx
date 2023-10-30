import React from 'react';
import './btn.scss';
import BtnProps from '../../model/components/Btn/Btn';

const Btn: React.FC<BtnProps> = (props): JSX.Element => {
  return (
    <button className={`${props.classNameBtn} btn`} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Btn;
