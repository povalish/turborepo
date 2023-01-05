import React, { PropsWithChildren } from 'react';
import { classes } from './Layout.classes';

// Layout
//

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={classes()}>{children}</div>
);
