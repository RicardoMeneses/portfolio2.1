import { Box } from '@chakra-ui/react';

export const Banner = () => {
  return (
    <Box
      backgroundImage={`url("/img/home.webp")`}
      backgroundRepeat={'no-repeat'}
      h={{ base: '250px', md: '350px' }}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    />
  );
};
