import { Story, ComponentMeta } from '@storybook/react';
import React from 'react';

import { storyList } from './data';
import { Title, TitleProps } from '.';

export default {
  title: 'molecule/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = storyList.Default;
