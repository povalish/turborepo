import React, { ComponentProps, PropsWithChildren } from 'react';
import { ButtonView, ButtonText, styles, textStyles } from './Button.styles';

// Button.native
//

interface IButton extends PropsWithChildren, ComponentProps<typeof ButtonView> {
  textClassName?: string;
}

export const Button: React.FC<IButton> = ({ children, className, textClassName, ...props }) => (
  <ButtonView activeOpacity={0.8} className={styles({ className })} {...props}>
    <ButtonText className={textStyles({ className: textClassName })}>{children}</ButtonText>
  </ButtonView>
);
