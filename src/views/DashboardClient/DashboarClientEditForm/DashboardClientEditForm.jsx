import { Flex, Spacer } from '@chakra-ui/react';
import EditClient from '../../../components/DashboardClient/EditClient/EditClient';
import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClientEditForm = () => {
  return (   
    <Flex 
    // flexDirection={{ base: 'column', md: 'row' }}
    >

      <SidebarClient />

      <Spacer />

      <EditClient/>
    </Flex>
  );
};

export default DashboardClientEditForm;