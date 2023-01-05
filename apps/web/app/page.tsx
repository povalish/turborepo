import { Button } from 'ui-kit/components/Button';
import { Layout, textClasses } from 'ui-kit/layouts/Layout';

// page
//

export default function Home() {
  return (
    <Layout>
      <h1 className={textClasses({ className: 'mb-2' })}>Hello from NextJS!</h1>
      <Button type='button'>Lets go!</Button>
    </Layout>
  );
}
