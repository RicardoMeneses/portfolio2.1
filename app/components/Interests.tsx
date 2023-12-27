import { Card, CardBody, Flex, Tag, TagLabel, TagRightIcon, Text } from '@chakra-ui/react';
import { RiCodeLine, RiPingPongFill, RiBook2Fill, RiMovie2Fill } from 'react-icons/ri';
import { BsAirplaneFill, BsFillFileMusicFill } from 'react-icons/bs';
import { IoLogoGameControllerB } from 'react-icons/io';
import { FaFutbol } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Interests = () => {
  const { t } = useTranslation();
  const interests = [
    {
      icon: RiCodeLine,
      text: t('about.programming'),
    },
    {
      icon: RiPingPongFill,
      text: t('about.pingPong'),
    },
    {
      icon: BsAirplaneFill,
      text: t('about.travel'),
    },
    {
      icon: IoLogoGameControllerB,
      text: t('about.games'),
    },
    {
      icon: RiBook2Fill,
      text: t('about.read'),
    },
    {
      icon: BsFillFileMusicFill,
      text: t('about.music'),
    },
    {
      icon: FaFutbol,
      text: t('about.soccer'),
    },
    {
      icon: RiMovie2Fill,
      text: t('about.cinema'),
    },
  ];

  return (
    <Card w={'full'} borderRadius={30} border={'1px solid #E9EAF3'}>
      <CardBody p={10}>
        <Text fontSize={'4xl'} fontWeight='bold'>
          {t('about.interests')}
        </Text>
        <hr />
        <Flex wrap={'wrap'} mt={4}>
          {interests.map((interest, index) => (
            <Tag
              key={index}
              size={'lg'}
              borderRadius={'full'}
              variant='solid'
              colorScheme='blue'
              m={2}
              transition={'all 0.3s ease'}
              _hover={{
                transform: 'translateY(-3px)',
                cursor: 'pointer',
              }}
            >
              <TagLabel fontSize={24}>{interest.text}</TagLabel>
              <TagRightIcon as={interest.icon} />
            </Tag>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Interests;
