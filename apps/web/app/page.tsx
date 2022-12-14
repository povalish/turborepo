import styles from './page.module.css';
import { Button } from 'ui-kit';

// page
//

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello from NextJS!</h1>
      <Button type='button' className={styles.title}>
        Click me!
      </Button>
    </main>
  );
}
