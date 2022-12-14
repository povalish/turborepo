import React from 'react';
import { Button } from 'ui-kit';
import styles from './App.module.css';

// App
//

export const App: React.FC = () => (
  <div className={styles.main}>
    <h1 className={styles.title}>Hello from Electron!</h1>
    <Button className={styles.title}>Click me!</Button>
  </div>
);
