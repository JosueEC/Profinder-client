import { Flex, Spacer } from '@chakra-ui/react';
import TopPro from '../../../components/Home/TopPro/TopPro';


import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
   
      
      
      <Flex>
        <SidebarClient />
        <Spacer  />
        <TopPro />
      </Flex>
    
  );
};

export default DashboardClient;