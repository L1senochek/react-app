'use client';
import React, { FC, useState } from 'react';
import './error-btn.scss';
import Btn from '../Btn/Btn';

const ErrorBtn: FC = (): JSX.Element => {
  const [isError, setIsError] = useState(false);

  const clickOnBtnError = (): void => {
    setIsError(true);
  };

  const generateError = (): never => {
    throw new Error('This is error!');
  };

  return (
    <div className="error-btn">
      <Btn
        classNameBtn="error-btn__btn"
        onClick={clickOnBtnError}
        text="Error"
      />
      {isError && generateError()}
    </div>
  );
};

export default ErrorBtn;
