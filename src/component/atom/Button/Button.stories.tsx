import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  children: <button className='btn-sm'>Small</button>,
};

export const Base = Template.bind({});
Base.args = {
  children: <button className='btn-base'>Base</button>,
};

export const Large = Template.bind({});
Large.args = {
  children: <button className='btn-lg'>Large</button>,
};

export const Gradation = Template.bind({});
Gradation.args = {
  children: <button className='text-white btn-green-gradation'>Base</button>,
};
