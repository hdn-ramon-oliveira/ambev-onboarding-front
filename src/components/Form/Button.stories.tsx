import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Button as HDNButton, ButtonProps as HDNButtonProps } from './Button';

export default {
  title: 'HDN Chakra/Form/Button',
  component: HDNButton,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<HDNButtonProps> = args => <HDNButton {...args} />;

export const Default: Story<HDNButtonProps> = Template.bind({});
Default.args = {
  disabled: false,
  children: 'Button Text',
  bg: 'secondary.500',
  color: 'primary.100',
  fontSize: '14px',
  fontWeight: '700',
  lineHeight: '20px',
  padding: '16px 32px',
};

export const Outline = Template.bind({});
Outline.args = {
  disabled: false,
  children: 'Button Text',
  bg: 'primary.100',
  color: 'secondary.500',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'secondary.500',
  fontSize: '14px',
  fontWeight: '700',
  lineHeight: '20px',
  padding: '16px 32px',
};
