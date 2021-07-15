import React from 'react';

import { Story } from '@storybook/react';

import { Input as HDNInput, InputProps as HDNInputProps } from './Input';

export default {
  title: 'HDN Chakra/Form/Input',
  component: HDNInput,
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
  },
};

const Template: Story<HDNInputProps> = args => {
  return <HDNInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  bg: 'transparent',
  color: 'primary.500',
  borderColor: 'primary.400',
  borderWidth: 'thin',
  borderRadius: '4px',
};

export const Light = Template.bind({});
Light.args = {
  color: 'primary.100',
  bg: 'transparent',
  borderWidth: 'thin',
  borderRadius: '4px',
  borderColor: 'primary.300',
};
