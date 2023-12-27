import { Card, CardBody, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <Card w={'full'} borderRadius={30} border={'1px solid #E9EAF3'}>
      <CardBody p={10}>
        <Text fontSize={'4xl'} fontWeight='bold'>
          {t('about.title')}
        </Text>
        <hr />
        <Text fontSize={{ base: 'xl', md: '2xl' }} mt={5}>
          {t('about.me')}
        </Text>
      </CardBody>
    </Card>
  );
};
