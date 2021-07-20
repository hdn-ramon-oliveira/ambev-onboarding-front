import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

import { Icon } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';

import { Button as HDNButton, ButtonProps as HDNButtonProps } from './Button';

export default {
  title: 'HDN Chakra/Form/Button',
  component: HDNButton,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'boolean',
    },
    variant: {
      options: ['baseStyle', 'outline'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<HDNButtonProps> = ({ icon, variant, ...args }) => {
  // const setIcon = icon ? RiArrowRightSLine : '';
  let isIcon = {};
  if (icon === true) {
    isIcon = {
      icon: RiArrowRightSLine,
    };
  }
  let isVariant = {};
  if (variant === 'outline') {
    isVariant = {
      bg: 'primary.100',
      color: 'secondary.500',
      border: '1px solid',
      _hover: {
        bg: 'primary.100',
        color: 'primary.500',
      },
    };
  }
  return <HDNButton {...args} {...isIcon} {...isVariant} />;
};

export const Button = Template.bind({});
Button.args = {
  disabled: false,
  icon: false,
  children: 'Button Text',
  bg: 'secondary.500',
  color: 'primary.100',
  fontSize: '14px',
  fontWeight: 'bold',
  lineHeight: '20px',
  padding: '16px 32px',
  _hover: {
    bg: 'primary.500',
  },
};
