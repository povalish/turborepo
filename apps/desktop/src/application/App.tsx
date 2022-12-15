import React from 'react';

import './tailwind.compiled.css';
import { Button, Layout } from 'ui-kit/components';

// App
//

export const App: React.FC = () => (
  <Layout>
    <h1 className='text-3xl font-bold uppercase mb-3'>Hello from Desktop!</h1>
    <Button type='button'>Вход</Button>
  </Layout>
);
