import React from 'react';

import { Flex, Image } from '@chakra-ui/react';

import LogoClickJornada from '~/assets/images/logo-provisorio.png';

export function Logo() {
  return (
    <Flex w="56" alignItems="center">
      <Image w="40" src={LogoClickJornada} alt="Logo Click Jornada Header" />
    </Flex>
  );
}
