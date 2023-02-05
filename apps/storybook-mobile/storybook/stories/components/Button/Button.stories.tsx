import React from 'react';
import { Text } from 'react-native';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Button } from 'ui-kit/components/Button/Button.native';
import { Wrapper } from '../../layouts/Wrapper';

// Button.stories
//

storiesOf('Button', module)
  .addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>)
  .add('Textable', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('Emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
