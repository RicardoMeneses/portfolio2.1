import { Box, Button, Card, CardBody, Center, HStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

export const PersonalInformation = () => {
  const { t } = useTranslation();
  return (
    <Card borderRadius={20} boxShadow={'lg'} w={'full'} border={'1px solid #E9EAF3'}>
      <Box
        backgroundImage={`url("/img/me.webp")`}
        backgroundRepeat={'no-repeat'}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        h={'300px'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      />
      <CardBody>
        <Text mb={4} fontSize={'2xl'}>
          {t('home.developer')}
        </Text>
        <hr />
        <HStack mt={4} fontSize={'xl'}>
          <CiLocationOn />
          <Text>Edo de México</Text>
        </HStack>
        <HStack fontSize={'xl'}>
          <MdOutlineMail />
          <a href='mailto:ricardomeneses0503@gmail.com' target='_blank' rel='noreferrer'>
            ricardomeneses0503@gmail.com
          </a>
        </HStack>
        <HStack fontSize={'xl'}>
          <FaGithub />
          <a href='https://github.com/RicardoMeneses' target='_blank' rel='noreferrer'>
            github/RicardoMeneses
          </a>
        </HStack>
        <HStack fontSize={'xl'}>
          <FaLinkedin />
          <a
            href='https://www.linkedin.com/in/ricardo-meneses-morales/'
            target='_blank'
            rel='noreferrer'
          >
            in/ricardo-meneses-morales/
          </a>
        </HStack>
        <Center>
          <Button
            fontWeight='bold'
            borderRadius='full'
            borderWidth={2}
            borderColor={'#26a0da'}
            bg='transparent'
            transition={'all 0.3s ease'}
            _hover={{
              bgGradient: 'linear(to-l, #314755 0%, #26a0da  51%, #314755  100%)',
              transform: 'translateY(-3px)',
              boxShadow: '1px 2em 2em 0em #26a0da',
              color: '#fff',
            }}
            fontSize='20px'
            mt={4}
            rightIcon={<FaFilePdf />}
          >
            {t('home.download')}
          </Button>
        </Center>
      </CardBody>
    </Card>
  );
};
