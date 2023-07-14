import { Flex, Spacer } from '@chakra-ui/react';


import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
    <div>
      
      
      <Flex>
        <SidebarClient />
        <Spacer  />
        
      </Flex>
    </div>
  );
};

export default DashboardClient;