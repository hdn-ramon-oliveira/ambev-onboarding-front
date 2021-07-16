import React, { forwardRef, ForwardRefRenderFunction } from 'react';

import {
  FormControl,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react';

import { SelectTheme } from './Select.styles';

export interface SelectProps extends ChakraSelectProps {
  name: string;
  value: string;
  error: string;
  errorBorderColor: string;
}

const SelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  ChakraSelectProps
> = ({ name, value, errorBorderColor, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!errorBorderColor}>
      <ChakraSelect
        theme={SelectTheme}
        id={name}
        name={name}
        value={value}
        errorBorderColor="error.300"
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);
