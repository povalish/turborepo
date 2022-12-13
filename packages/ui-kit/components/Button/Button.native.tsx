import React from 'react';
import { Button as ButtonView, ButtonProps } from 'react-native';

// Button.native
//

export const Button: React.FC<ButtonProps> = (buttonProps) => <ButtonView {...buttonProps} />;
