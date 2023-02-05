import React from 'react';

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Layout, LayoutText } from 'ui-kit/layouts/Layout/Layout.native';
import { Wrapper } from '../Wrapper';

// Layout.stories
//

storiesOf('Layout', module)
  .addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>)
  .add('Default', () => (
    <Layout>
      <LayoutText>{text('Button text', 'Hello Button')}</LayoutText>
    </Layout>
  ));
