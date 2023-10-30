import React from 'react';
import './btn.scss';
import BtnProps from '../../model/components/Btn/Btn';

const Btn: React.FC<BtnProps> = ({
  classNameBtn,
  onClick,
  text,
}): JSX.Element => {
  return (
    <button className={`${classNameBtn} btn`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Btn;
