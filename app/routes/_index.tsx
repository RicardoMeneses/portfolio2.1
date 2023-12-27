/* eslint-disable import/no-unresolved */
import { Box, Container, VStack, Stack, useColorModeValue } from '@chakra-ui/react';
import { MetaFunction } from '@remix-run/node';
import { Header } from '~/components/Header';
import { Banner } from '~/components/Banner';

import Interests from '~/components/Interests';
import { PersonalInformation } from '~/components/PersonalInformation';
import { AboutMe } from '~/components/AboutMe';
import Projects from '~/components/Projects';
import { Experience } from '~/components/Experience';
import { Education } from '~/components/Education';
import { TechnicallSkills } from '~/components/TechnicalSkills';
import { SoftSkills } from '~/components/SoftSkills';
import { Footer } from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'Ricardo Meneses Morales' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const bg = useColorModeValue('#F1F2F5', 'gray.800');
  return (
    <>
      <Header />
      <Banner />
      <Box as='main' background={bg}>
        <Container maxW={'6xl'} pt={5} position={'relative'}>
          <Stack
            flexDirection={{ base: 'column', md: 'row' }}
            gap={7}
            alignItems={'start'}
            position={'static'}
          >
            <Box
              flex={{ md: 2, lg: 1 }}
              position={{ base: 'static', md: 'sticky' }}
              top={100}
              w={'full'}
              mt={{ base: 0, md: -100 }}
            >
              <PersonalInformation />
            </Box>
            <VStack flex={{ base: 1, md: 3 }} gap={7} overflow={'auto'} w={'full'}>
              <AboutMe />
              <Interests />
              <Projects />
              <Experience />
              <Education />
              <TechnicallSkills />
              <SoftSkills />
            </VStack>
          </Stack>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
