import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';
import { Link } from '@remix-run/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box w={'full'} bg='white' mt={5}>
      <Container maxW={'6xl'}>
        <Stack
          w='full'
          direction={{ base: 'column', md: 'row' }}
          justifyContent={'space-between'}
          paddingY={5}
          alignItems='center'
          color={'black'}
        >
          <Text
            order={{ base: 2, md: 1 }}
            fontSize={'xl'}
            textAlign={{ base: 'center', md: 'left' }}
          >
            Diseñado y desarrollado por Ricardo Meneses Morales ©️ 2023
          </Text>
          <Flex alignItems='center' gap={{ base: 3, md: 10 }} order={{ md: 2 }}>
            <Link to='https://github.com/RicardoMeneses' target='_blank' rel='noreferrer'>
              <FaGithub fontSize='28px' />
            </Link>
            <Link
              to='https://www.linkedin.com/in/ricardo-meneses-morales/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin fontSize='28px' />
            </Link>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};
