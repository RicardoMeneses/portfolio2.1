import { Card, CardBody, HStack, VStack, Box, Text, Hide, Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const Experience = () => {
  const { t } = useTranslation();

  const labor = [
    {
      years: t('resume.directoDate'),
      title: t('resume.directo'),
      name: 'Directo',
      description: t('resume.directoDescription'),
      image: '/img/logo_directo.svg',
    },
    {
      years: t('resume.freelanceDate'),
      name: t('resume.freelance'),
      description: t('resume.freelanceDescription'),
      image: '/img/developer.png',
    },
    {
      years: t('resume.raccoonDate'),
      title: t('home.developer'),
      name: 'Raccoon Studio',
      description: t('resume.raccoon'),
      image: '/img/logo_raccoon.png',
    },
    {
      years: t('resume.seoDate'),
      title: t('resume.seo'),
      name: 'Sube Agencia Digital',
      description: t('resume.seoDescription'),
      image: '/img/sube_logo.jpeg',
    },
  ];

  return (
    <Card w={'full'} borderRadius={30} border={'1px solid #E9EAF3'}>
      <CardBody p={{ base: 7, md: 10 }}>
        <Text fontSize={'4xl'} fontWeight='bold'>
          {t('resume.experience')}
        </Text>
        <hr />
        {labor.map((item, index) => (
          <Box key={index}>
            <HStack gap={5} alignItems={'start'} my={5}>
              <Hide below='sm'>
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
              </Hide>
              <VStack flex={3}>
                <Stack
                  flexDirection={{ base: 'column', md: 'row' }}
                  justifyContent={'space-between'}
                  w={'full'}
                >
                  <HStack>
                    <Hide above='sm'>
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
                    </Hide>
                    <VStack gap={0} justifyContent={'flex-start'}>
                      <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight='bold' w='full'>
                        {item.name}
                      </Text>
                      <Text w={'full'} fontSize={'xl'} color={'gray'}>
                        {item.title}
                      </Text>
                    </VStack>
                  </HStack>
                  <Text fontSize={{ base: 'xl', md: '2xl' }}>{item.years}</Text>
                </Stack>

                <Text w={'full'} fontSize={'2xl'} mt={{ base: 3, md: 0 }}>
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
