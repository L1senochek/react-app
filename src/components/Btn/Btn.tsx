import React from 'react';
import './btn.scss';
import BtnProps from '../../model/components/Btn/Btn';

const Btn: React.FC<BtnProps> = ({
  classNameBtn,
  text,
  ...allProps
}): JSX.Element => {
  return (
    <button className={`${classNameBtn} btn`} {...allProps}>
      {text}
    </button>
  );
};

export default Btn;
