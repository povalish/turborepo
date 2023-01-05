import React, { ComponentProps, PropsWithChildren } from 'react';
import { styled } from 'nativewind';
import { TouchableOpacity, Text } from 'react-native';
import { buttonClasses, textClasses } from './Button.classes';

export const ButtonView = styled(TouchableOpacity, buttonClasses());
export const ButtonText = styled(Text, textClasses());

// Button.native
//

interface IButton extends PropsWithChildren, ComponentProps<typeof ButtonView> {
  textClassName?: string;
}

export const Button: React.FC<IButton> = ({ children, className, textClassName, ...props }) => (
  <ButtonView activeOpacity={0.8} className={buttonClasses({ className })} {...props}>
    <ButtonText className={textClasses({ className: textClassName })}>{children}</ButtonText>
  </ButtonView>
);
