import { extendTheme } from '@chakra-ui/react';

import '../assets/fonts/Moderat-Bold.otf';
import '../assets/fonts/Moderat-Regular.otf';
import '../assets/fonts/index.css';

export const theme = extendTheme({
  colors: {
    primary: {
      500: '#54565a',
      600: '#adaeb6',
      700: '#dcdcdc',
      800: '#f9f9f9',
      900: '#ffffff',
    },
    secondary: {
      500: '#ff6a13',
      700: '#f6dbcd',
    },
    tertiary: {
      500: '#ffc72c',
      700: '#fbf4e1',
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
        color: 'white',
      },
      input: {
        _placeholder: {
          color: 'gray.100',
        },
      },
      _disabled: {
        cursor: 'not-allowed',
      },
    },
  },
});
