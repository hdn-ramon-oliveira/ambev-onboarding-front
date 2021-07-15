import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        field: {
          bg: 'transparent',
          color: 'primary.500',
          borderColor: 'primary.400',
          borderWidth: 'thin',
          borderRadius: '4px',
        },
      },
      variants: {
        light: {
          field: {
            color: 'primary.100',
            bg: 'transparent',
            borderWidth: 'thin',
            borderRadius: '4px',
            borderColor: 'primary.300',
            _placeholder: {
              color: 'primary.100',
            },
            _hover: {
              borderColor: 'gray.100',
            },
            _focus: {
              borderColor: 'primary.100',
            },
          },
        },
      },
    },
  },
});
