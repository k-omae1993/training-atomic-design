import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text } from './Text';

export default {
  title: 'atom/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Bold = Template.bind({});
Bold.args = {
  children: <span className='text-base font-bold'>text-base</span>,
};

export const Green = Template.bind({});
Green.args = {
  children: <span className='font-bold text-green-800'>text-green-800</span>,
};

export const Gray = Template.bind({});
Gray.args = {
  children: <span className='font-bold text-gray-800'>text-gray-800</span>,
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  children: <span className='text-xs'>text-xs</span>,
};

export const Small = Template.bind({});
Small.args = {
  children: <span className='text-sm'>text-sm</span>,
};

export const Base = Template.bind({});
Base.args = {
  children: <span className='text-base'>text-base</span>,
};

export const Large = Template.bind({});
Large.args = {
  children: <span className='text-lg'>text-lg</span>,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: <span className='text-xl'>text-xl</span>,
};

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = {
  children: <span className='text-2xl'>text-2xl</span>,
};
