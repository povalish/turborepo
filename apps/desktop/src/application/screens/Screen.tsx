import React from 'react';

import { Button } from 'ui-kit/components/Button';
import { Layout, textClasses } from 'ui-kit/layouts/Layout';

// Screen
//

export const Screen: React.FC = () => (
  <Layout>
    <h1 className={textClasses({ className: 'mb-2' })}>Hello from Electron!</h1>
    <Button type='button'>Lets go!</Button>
  </Layout>
);
