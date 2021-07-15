import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
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
          border: '1px solid',
        },
      },
    },
  },
});
