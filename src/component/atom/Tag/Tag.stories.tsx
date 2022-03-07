import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Tag } from './Tag';

export default {
  title: 'atom/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Small = Template.bind({});
Small.args = {
  children: <span className='py-2 px-3 text-sm font-bold text-white bg-green-800'>Base-Tag</span>,
};

export const Base = Template.bind({});
Base.args = {
  children: <span className='py-2 px-5 text-base font-bold text-white bg-green-800'>Base-Tag</span>,
};

export const Large = Template.bind({});
Large.args = {
  children: <span className='py-3 px-6 text-lg font-bold text-white bg-green-800'>Base-Tag</span>,
};
