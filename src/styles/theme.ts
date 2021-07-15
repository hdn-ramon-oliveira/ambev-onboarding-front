import { extendTheme } from '@chakra-ui/react';

import '../assets/fonts/Moderat-Bold.otf';
import '../assets/fonts/Moderat-Regular.otf';
import '../assets/fonts/index.css';

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#ffffff',
      200: '#f9f9f9',
      300: '#dcdcdc',
      400: '#adaeb6',
      500: '#54565a',
    },
    secondary: {
      200: '#f6dbcd',
      500: '#ff6a13',
    },
    tertiary: {
      200: '#fbf4e1',
      500: '#ffc72c',
    },
  },
  fonts: {
    heading: 'Moderat Bold',
    body: 'Moderat Regular',
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'primary.500',
      },
    },
    Button: {
      baseStyle: {
        bg: 'secondary.500',
        color: 'primary.100',
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: '20px',
        padding: '16px 32px',
      },
      variants: {
        outline: {
          bg: 'primary.100',
          color: 'secondary.500',
          borderColor: 'secondary.500',
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          bg: 'transparent',
          color: 'primary.500',
          borderColor: 'primary.400',
          borderWidth: 'thin',
          borderRadius: '4px',
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
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
      button: {
        bg: 'secondary.500',
        color: 'primary.100',
      },
      input: {
        _placeholder: {
          color: 'primary.400',
        },
      },
      _disabled: {
        cursor: 'not-allowed',
      },
    },
  },
});
