import React from 'react';
import { ViewProps } from 'react-native';
import { StyledProps } from 'nativewind';
import { LayoutView } from './Layout.style';

// Layout
//
interface IView extends StyledProps<ViewProps> {}

export const Layout: React.FC<IView> = ({ children, ...props }) => (
  <LayoutView {...props}>{children}</LayoutView>
);
