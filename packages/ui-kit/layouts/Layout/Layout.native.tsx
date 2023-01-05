import React from 'react';
import { View, type ViewProps, Text } from 'react-native';
import { styled, StyledProps } from 'nativewind';
import { containerClasses, textClasses } from './Layout.classes';

export const LayoutView = styled(View, containerClasses());
export const LayoutText = styled(Text, textClasses());

// Layout
//
interface IView extends StyledProps<ViewProps> {}

export const Layout: React.FC<IView> = ({ children, ...props }) => (
  <LayoutView {...props}>{children}</LayoutView>
);
