import React, { ReactNode } from 'react';

import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

import { baseStyle } from './buttonStyles';

export interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <ChakraButton {...baseStyle} {...rest}>
      {children}
    </ChakraButton>
  );
}
