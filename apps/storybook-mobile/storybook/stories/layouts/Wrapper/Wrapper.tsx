import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';
import { containerClasses } from './Wrapper.classses';

export const WrapperView = styled(View, containerClasses());

// Wrapper
//

export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <WrapperView>{children}</WrapperView>
);
