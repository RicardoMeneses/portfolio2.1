import { Card, CardBody, HStack, VStack, Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const Education = () => {
  const { t } = useTranslation();

  const education = [
    {
      years: '2013-2019',
      title: 'Escuela Superior de Cómputo (ESCOM-IPN)',
      description: t('resume.engineer'),
      image: '/img/escom.png',
    },
    {
      years: '2018',
      title: 'DevF',
      description: t('resume.red'),
      image: '/img/devf.png',
    },
    {
      years: '2018',
      title: 'DevF',
      description: t('resume.black'),
      image: '/img/devf.png',
    },
  ];

  return (
    <Card w={'full'} borderRadius={30} border={'1px solid #E9EAF3'}>
      <CardBody p={{ base: 7, md: 10 }}>
        <Text fontSize={'4xl'} fontWeight='bold'>
          {t('resume.education')}
        </Text>
        <hr />
        {education.map((item, index) => (
          <Box key={index}>
            <HStack gap={5} alignItems={'start'} my={5}>
              <Box
                w={10}
                h={10}
                mt={1}
                borderRadius={5}
                backgroundImage={`url(${item.image})`}
                backgroundRepeat={'no-repeat'}
                backgroundPosition={'center center'}
                backgroundSize={'cover'}
              />
              <VStack flex={8}>
                <HStack justifyContent={'space-between'} w={'full'}>
                  <VStack gap={0} justifyContent={'flex-start'}>
                    <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight='bold' w='full'>
                      {item.title}
                    </Text>
                  </VStack>
                  <Text fontSize={{ base: 'xl', md: '2xl' }}>{item.years}</Text>
                </HStack>
                <Text w={'full'} fontSize={'2xl'}>
                  {item.description}
                </Text>
              </VStack>
            </HStack>
            <hr />
          </Box>
        ))}
      </CardBody>
    </Card>
  );
};
