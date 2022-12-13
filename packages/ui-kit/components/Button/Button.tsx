import React, { ButtonHTMLAttributes } from 'react';

//
//

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IButton> = ({ children, ...buttonProps }) => (
  // Button type has come from props
  // eslint-disable-next-line react/button-has-type
  <button {...buttonProps}>Real {children}</button>
);
