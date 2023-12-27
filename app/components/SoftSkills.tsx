import { Card, CardBody, Flex, Tag, TagLabel, TagRightIcon, Text } from '@chakra-ui/react';
import { FaComment, FaPeopleArrows } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

export const SoftSkills = () => {
  const { t } = useTranslation();
  const softSkills = [
    {
      icon: FaComment,
      text: t('resume.communication'),
    },
    {
      icon: FaPeopleArrows,
      text: t('resume.teamwork'),
    },
    {
      icon: BsGearFill,
      text: t('resume.adaptability'),
    },
    {
      icon: RiTeamFill,
      text: t('resume.leadership'),
    },
  ];

  return (
    <Card w={'full'} borderRadius={30} border={'1px solid #E9EAF3'}>
      <CardBody p={10}>
        <Text fontSize={'4xl'} fontWeight='bold'>
          {t('resume.softSkills')}
        </Text>
        <hr />
        <Flex wrap={'wrap'} mt={4}>
          {softSkills.map((skill, index) => (
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
              <TagLabel fontSize={20}>{skill.text}</TagLabel>
              <TagRightIcon as={skill.icon} />
            </Tag>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
};
