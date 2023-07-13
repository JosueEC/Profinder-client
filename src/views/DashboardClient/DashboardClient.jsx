import { Flex, Spacer } from '@chakra-ui/react';
import EditClient from '../../components/DashboardClient/EditClient';
import NavbarDashboardClient from '../../components/DashboardClient/NavbarDashboardClient';
import SidebarClient from '../../components/DashboardClient/SidebarClient';

const DashboardClient = () => {
  return (
    <div>
      <NavbarDashboardClient />
      <br />
      <Flex>
        <SidebarClient />
        <Spacer  />
        <EditClient />
      </Flex>
    </div>
  );
};

export default DashboardClient;