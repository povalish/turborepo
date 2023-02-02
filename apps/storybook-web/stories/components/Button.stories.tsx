import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'ui-kit/components/Button';

// Button.stories
//

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Simple Button</Button>;

export const PrimaryButton = Template.bind({});
