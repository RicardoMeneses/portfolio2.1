import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { PopoverIcon } from './PopoverIcon';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const MenuLanguage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const textColor = useColorModeValue('black', 'white');

  const { i18n } = useTranslation();
  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      localStorage.setItem('language', lng);
    });
  }, [i18n]);

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      trigger='hover'
      openDelay={0}
      placement='top-start'
      matchWidth={true}
    >
      <PopoverTrigger>
        <Button
          color={'black'}
          rightIcon={<PopoverIcon isOpen={isOpen} />}
          variant={'ghost'}
          fontSize={'xl'}
        >
          {i18n.language}
        </Button>
      </PopoverTrigger>
      <PopoverContent p='2' maxW='fit-content' justifyContent={'flex-end'}>
        <Stack spacing='0'>
          {[
            {
              name: 'English',
              code: 'en',
            },
            {
              name: 'Español',
              code: 'es',
            },
          ].map((item) => (
            <Button
              key={item.code}
              variant='tertiary'
              justifyContent='start'
              onClick={() => {
                changeLanguage(item.code);
                onClose();
              }}
              disabled={i18n.language === item.code}
              fontSize={'xl'}
              color={textColor}
            >
              {item.name}
            </Button>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  );
};
