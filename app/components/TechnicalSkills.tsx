import { Card, CardBody, Flex, Tag, TagLabel, TagRightIcon, Text } from '@chakra-ui/react';
import {
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaNodeJs,
  FaShopify,
  FaWordpress,
} from 'react-icons/fa';
import { RiReactjsFill, RiVuejsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiBitbucket,
  SiNestjs,
  SiNuxtdotjs,
  SiPrisma,
  SiRemix,
  SiTailwindcss,
  SiTypescript,
  SiChakraui,
  SiVisualstudiocode,
  SiExpo,
  SiDocker,
} from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

export const TechnicallSkills = () => {
  const { t } = useTranslation();
  const technicalSkills = [
    {
      icon: RiReactjsFill,
      text: 'ReactJS',
      outline: '#5ED2F3',
      bgHover: '#5ed3f390',
      textColor: '#5ED2F3',
    },
    {
      icon: RiReactjsFill,
      text: 'React Native',
      outline: '#5ED2F3',
      bgHover: '#5ed3f390',
      textColor: '#5ED2F3',
    },
    {
      icon: TbBrandNextjs,
      text: 'NextJs',
      outline: '#5ED2F3',
      bgHover: '#5ED2F390',
      textColor: '#5ED2F3',
    },
    {
      icon: RiVuejsLine,
      text: 'VueJS',
      outline: '#3EB27F',
      bgHover: '#3EB27F90',
      textColor: '#3EB27F',
    },
    {
      icon: SiNuxtdotjs,
      text: 'NuxtJs',
      outline: '#2D465B',
      bgHover: '#2D465B90',
      textColor: '#2D465B',
    },
    {
      icon: FaNodeJs,
      text: 'NodeJS',
      outline: '#68A063',
      bgHover: '#68A06390',
      textColor: '#68A063',
    },
    {
      icon: FaAws,
      text: 'AWS',
      outline: '#F69400',
      bgHover: '#F6940090',
      textColor: '#F69400',
    },
    {
      icon: FaShopify,
      text: 'Shopify',
      outline: '#91B944',
      bgHover: '#91B94490',
      textColor: '#91B944',
    },
    {
      icon: FaWordpress,
      text: 'Wordpress',
      outline: '#207095',
      bgHover: '#20709590',
      textColor: '#207095',
    },
    {
      icon: FaBootstrap,
      text: 'Bootstrap',
      outline: '#6C0FED',
      bgHover: '#6C0FED90',
      textColor: '#6C0FED',
    },
    {
      icon: DiMongodb,
      text: 'MongoDB',
      outline: '#3F9043',
      bgHover: '#3F904390',
      textColor: '#3F9043',
    },
    {
      icon: FaGithubSquare,
      text: 'Github',
      outline: '#000',
      bgHover: '#00000090',
      textColor: '#051139',
    },
    {
      icon: FaHtml5,
      text: 'Html5',
      outline: '#F7491D',
      bgHover: '#F7491D90',
      textColor: '#F7491D',
    },
    {
      icon: FaCss3Alt,
      text: 'Css3',
      outline: '#3495CF',
      bgHover: '#3495CF90',
      textColor: '#3495CF',
    },
    {
      icon: IoLogoJavascript,
      text: 'JS',
      outline: '#EFD81A',
      bgHover: '#EFD81A90',
      textColor: '#EFD81A',
    },
    {
      icon: SiTailwindcss,
      text: 'Tailwind CSS',
      outline: '#05AFCD',
      bgHover: '#05AFCD90',
      textColor: '#05AFCD',
    },
    {
      icon: SiTypescript,
      text: 'TypeScript',
      outline: '#2F73BF',
      bgHover: '#2F73BF90',
      textColor: '#2F73BF',
    },
    {
      icon: SiNestjs,
      text: 'NestJs',
      outline: '#D9214B',
      bgHover: '#D9214B90',
      textColor: '#D9214B',
    },
    {
      icon: SiBitbucket,
      text: 'Bitbucket',
      outline: '#2680F6',
      bgHover: '#2680F690',
      textColor: '#2680F6',
    },
    {
      icon: SiRemix,
      text: 'Remix',
      outline: '#000',
      bgHover: '#00000090',
      textColor: '#051139',
    },
    {
      icon: SiPrisma,
      text: 'Prisma',
      outline: '#000',
      bgHover: '#00000090',
      textColor: '#051139',
    },
    {
      icon: SiChakraui,
      text: 'Chakra UI',
      outline: '#57C8C5',
      bgHover: '#57C8C590',
      textColor: '#57C8C5',
    },
    {
      icon: SiVisualstudiocode,
      text: 'VS Code',
      outline: '#31AAF6',
      bgHover: '#00000090',
      textColor: '#31AAF6',
    },
    {
      icon: SiExpo,
      text: 'Expo',
      outline: '#000',
      bgHover: '#00000090',
      textColor: '#051139',
    },
    {
      icon: SiDocker,
      text: 'Docker',
      outline: '#1A60E6',
      bgHover: '#00000090',
      textColor: '#1A60E6',
    },
  ];

  return (
    <Card w={'full'} borderRadius={30} border={'1px solid #E9EAF3'}>
      <CardBody p={10}>
        <Text fontSize={'4xl'} fontWeight='bold'>
          {t('resume.technicalSkills')}
        </Text>
        <hr />
        <Flex wrap={'wrap'} mt={4}>
          {technicalSkills.map((skill, index) => (
            <Tag
              key={index}
              size={'lg'}
              borderRadius={'full'}
              variant='solid'
              bg={skill.outline}
              m={2}
              transition={'all 0.3s ease'}
              _hover={{
                transform: 'translateY(-3px)',
                cursor: 'pointer',
              }}
            >
              <TagLabel fontSize={23}>{skill.text}</TagLabel>
              <TagRightIcon as={skill.icon} />
            </Tag>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
};
