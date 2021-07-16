/* eslint-disable react/no-children-prop */

import React, {
  ReactElement,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import { FieldError } from 'react-hook-form';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

import { theme } from './inputStyles';

export interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  icon?: ReactElement;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref,
) => {
  return (
    <FormControl theme={theme} isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput id={name} name={name} size="lg" ref={ref} {...rest} />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
