import { Flex, Spacer } from '@chakra-ui/react';
import HelpClient from '../../../components/DashboardClient/HelpClient/HelpClient';


import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
    <Flex 
    // flexDirection={{ base: 'column', md: 'row' }}
    >
        <SidebarClient />
        <Spacer  />
        <HelpClient />
      </Flex>
  );
};

export default DashboardClient;