import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      variant="ghost"
      onClick={toggleColorMode}
      size="md"
      aria-label="Toggle Dark Mode"
    />
  );
};

export default DarkModeToggle;
