import { Flex, Spacer } from '@chakra-ui/react';
import FavoritesClient from '../../../components/DashboardClient/FavoritesClient/FavoritesClient';


import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
      
    <Flex 
    // flexDirection={{ base: 'column', md: 'row' }}
    >
        <SidebarClient />
        <Spacer  />
        <FavoritesClient/>
      </Flex>
  );
};

export default DashboardClient;