import React from 'react';

import { Flex, Text, Heading } from '@chakra-ui/react';

export function Home() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex
        display="flex"
        flexDir="column"
        w="100vw"
        alignItems="flex-start"
        justifyContent="center"
        px="50px"
      >
        <Text color="primary.500">Seja bem vinda, Carol.</Text>

        <Heading color="primary.500">
          Sua jornada de
          <br />
          integração começou!
        </Heading>
      </Flex>
    </Flex>
  );
}
