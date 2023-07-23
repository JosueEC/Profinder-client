import { Flex} from '@chakra-ui/react';
import Categories from "../../Categories/Categories"

import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
    <Flex 
    // flexDirection={{ base: 'column', md: 'row' }}
    >
        <SidebarClient />
        
        <Categories />
      </Flex>
  );
};

export default DashboardClient;