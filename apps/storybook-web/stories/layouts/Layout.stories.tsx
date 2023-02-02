import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from 'ui-kit/layouts/Layout';

// Button.stories
//

export default {
  title: 'Layouts/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args}>Layout Wrapper</Layout>;

export const DefaultLayout = Template.bind({});
