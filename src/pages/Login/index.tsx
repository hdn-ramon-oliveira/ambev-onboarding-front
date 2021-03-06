/* eslint-disable react/no-children-prop */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Flex, Heading, Text } from '@chakra-ui/react';

import { Input, Button, Select } from '~/components';
import { outline } from '~/components/Form/Input/inputStyles';

export function Login() {
  const history = useHistory();
  return (
    <Flex w="100vw" h="100vh">
      <Flex
        display="flex"
        flexDir="column"
        w="100vw"
        alignItems="flex-start"
        justifyContent="center"
        px="50px"
        bg="blue.700"
      >
        <Heading color="white">
          Pronto(a) para iniciar
          <br />
          sua jornada de integração?
        </Heading>

        <Text color="white">Informe seu CPF para seguir Jornada.</Text>

        <Select w="auto" placeholder="Select option" />

        <Input
          {...outline}
          w="auto"
          id="login"
          name="login"
          placeholder="CPF"
          mb="6"
          isRequired
        />

        <Button mb="6" onClick={() => history.push('/home')}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
