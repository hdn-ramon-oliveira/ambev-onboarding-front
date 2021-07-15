import React from 'react';
import { FaUser } from 'react-icons/fa';

import { Icon } from '@chakra-ui/react';
import { Story } from '@storybook/react';

import { Input as HDNInput, InputProps as HDNInputProps } from './Input';

export default {
  title: 'HDN Chakra/Form/Input',
  component: HDNInput,
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    error: { control: 'object', raw: true },
    icon: {
      options: ['FaLock', 'FaUser'],
      control: 'select',
    },
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
  name: 'username',
  label: 'Usuário',
};

export const Light = Template.bind({});
Light.args = {
  color: 'primary.100',
  bg: 'transparent',
  borderWidth: 'thin',
  borderRadius: '4px',
  borderColor: 'primary.300',
  name: 'username',
  label: 'Usuário',
};
