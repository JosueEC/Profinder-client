import { Flex, Spacer } from '@chakra-ui/react';
import EditClient from '../../components/DashboardClient/EditClient';

import SidebarClient from '../../components/DashboardClient/SidebarClient';

const DashboardClient = () => {
  return (
    <div>
      
      
      <Flex>
        <SidebarClient />
        <Spacer  />
        <EditClient />
      </Flex>
    </div>
  );
};

export default DashboardClient;