import { ButtonHTMLAttributes } from 'react';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classNameBtn: string;
}

export default BtnProps;
