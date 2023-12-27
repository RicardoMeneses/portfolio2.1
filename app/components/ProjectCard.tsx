import { Box, Flex, Text } from '@chakra-ui/react';

type ProjectCardProps = {
  image: string;
  title: string;
  tech?: string;
  description?: string;
};

// eslint-disable-next-line react/prop-types
export const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, tech, description }) => {
  return (
    <Box
      h={330}
      bg='blue'
      borderRadius={20}
      w={200}
      p={10}
      role='group'
      backgroundImage={`url(${image})`}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      border={'1px solid #c1c1c1'}
      position={'relative'}
      transition='all 0.3s ease'
      overflow={'hidden'}
    >
      <Box
        position={'absolute'}
        w={'100%'}
        bg={'rgba(0,0,0,0.8)'}
        h={'full'}
        bottom={0}
        transition='all 0.4s ease'
        _groupHover={{ left: 0 }}
        left={-220}
        borderRadius={20}
      >
        <Flex
          position={'relative'}
          width={'full'}
          height={'full'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          wrap={'wrap'}
          p={3}
        >
          <Text color={'white'} fontSize={'2xl'} fontWeight={'bold'}>
            {title}
          </Text>
          <hr />
          <Text color={'white'} fontSize={'small'} textAlign={'center'}>
            {description}
          </Text>
          <Text color={'white'} fontSize={'small'} textAlign={'center'}>
            {tech}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
