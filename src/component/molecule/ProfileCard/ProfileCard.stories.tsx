import { Story, ComponentMeta } from '@storybook/react';
import React from 'react';

import { storyList } from './data';
import { ProfileCard, ProfileCardProps } from '.';

export default {
  title: 'molecule/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: Story<ProfileCardProps> = (args) => <ProfileCard {...args} />;

export const Right = Template.bind({});
Right.args = storyList.Right;

export const Left = Template.bind({});
Left.args = storyList.Left;
