import { Box, Container, HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { MenuLanguage } from './MenuLanguage';
import { MdOutlineWbSunny } from 'react-icons/md';
import { FaRegMoon } from 'react-icons/fa';

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
      bg={'#fff'}
      h={20}
      boxShadow={'lg'}
      as='header'
      position='fixed'
      w={'100%'}
      zIndex={10}
      top={0}
    >
      <Container maxW={'6xl'} h={'full'}>
        <HStack h={'full'} justifyContent={'space-between'}>
          <Text color={'black'} fontSize={'xl'}>
            Ricardo MM
          </Text>
          <HStack>
            <MenuLanguage />
            <HStack color={'black'}>
              <MdOutlineWbSunny />
              <Switch
                colorScheme='blue'
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
              />
              <FaRegMoon />
            </HStack>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
