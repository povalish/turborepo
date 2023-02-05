import { Layout, LayoutText } from 'ui-kit/layouts/Layout/Layout.native';
import { Button } from 'ui-kit/components/Button/Button.native';
import StorybookUIRoot from './storybook';

// App
//

const App = () => (
  <Layout>
    <LayoutText className='mb-2'>Hello from ReactNative!</LayoutText>
    <Button>Lets go</Button>
  </Layout>
);

export default StorybookUIRoot;
