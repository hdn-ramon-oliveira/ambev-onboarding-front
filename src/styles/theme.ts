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
