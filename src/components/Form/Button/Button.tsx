import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Icon,
  IconProps,
} from '@chakra-ui/react';

import { baseStyle } from './buttonStyles';

export interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
  icon?: IconProps | IconType | any | undefined;
}

export function Button({ icon, children, ...rest }: ButtonProps) {
  return (
    <ChakraButton {...baseStyle} {...rest}>
      {children}
      {icon ? <Icon as={icon} fontSize="20" /> : ''}
    </ChakraButton>
  );
}
