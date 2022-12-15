import React, { ButtonHTMLAttributes } from 'react';
import { styles } from './Button.styles';

// Button
//

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IButton> = ({ children, className, ...buttonProps }) => (
  // Button type has come from props
  // eslint-disable-next-line react/button-has-type
  <button className={styles({ className })} {...buttonProps}>
    {children}
  </button>
);
