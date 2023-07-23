import { Flex, Spacer, useMediaQuery } from '@chakra-ui/react';
import HelpClient from '../../../components/DashboardClient/HelpClient/HelpClient';
import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex h="100vh">
      {isLargerThanMd ? (
        <>
          <SidebarClient />
          <Spacer />
        </>
      ) : <SidebarClient/>}
      <HelpClient />
    </Flex>
  );
};

export default DashboardClient;