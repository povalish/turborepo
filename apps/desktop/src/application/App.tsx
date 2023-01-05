import React from 'react';

import './tailwind.compiled.css';
import { Button } from 'ui-kit/components/Button';
import { Layout, textClasses } from 'ui-kit/layouts/Layout';

// App
//

export const App: React.FC = () => (
  <Layout>
    <h1 className={textClasses({ className: 'mb-2' })}>Hello from Electron!</h1>
    <Button type='button'>Lets go!</Button>
  </Layout>
);
