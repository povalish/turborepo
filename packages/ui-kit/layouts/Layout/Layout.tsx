import React, { PropsWithChildren } from 'react';
import { styles } from './Layout.style';

// Layout
//

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles()}>{children}</div>
);
