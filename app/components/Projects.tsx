import { Card, CardBody, Flex, HStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from './ProjectCard';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'RaccoonDev Studio',
      link: 'https://raccoondev.studio/',
      img: '/img/raccoon.webp',
      tech: 'NextJS / ReactJS / NodeJS / Bootstrap',
      description: t('projects.raccoon'),
    },
    {
      title: 'Oleum Vitae',
      link: 'https://oleumvitae.com.mx/',
      img: '/img/oleum.webp',
      tech: 'NuxtJS / VueJS / Shopify / NodeJS / Bootstrap / Stripe',
      description: t('projects.oleum'),
    },
    {
      title: 'Playeat',
      img: '/img/playeat.webp',
      tech: 'React Native / Expo / Stripe',
      description: t('projects.playeat'),
    },
    {
      title: 'Fahcal México',
      img: '/img/fahcal.webp',
      tech: 'Remix / ReactJs / ChakraUI',
      description: t('projects.fahcal'),
    },
    {
      title: '2Rivers Travel',
      img: '/img/2rivers.webp',
      tech: 'NextJs / NestJs / ReactJs / Stripe / Styled Components ',
      description: t('projects.2rivers'),
    },
  ];

  return (
    <Card w={'full'} borderRadius={30} overflow={'auto'} border={'1px solid #E9EAF3'}>
      <CardBody p={10} overflow={'auto'}>
        <Text fontSize={'4xl'} fontWeight='bold'>
          {t('projects.title')}
        </Text>
        <hr />
        <Flex overflow={'auto'}>
          <HStack mt={5} minW={'min-content'}>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.img}
                title={project.title}
                tech={project.tech}
                description={project.description}
              />
            ))}
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Projects;
