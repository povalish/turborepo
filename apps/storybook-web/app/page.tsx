import { Layout, textClasses } from 'ui-kit/layouts/Layout';

// page
//

export default function Home() {
  return (
    <Layout>
      <h1 className={textClasses({ className: 'mb-2' })}>Web Storybook</h1>
    </Layout>
  );
}
