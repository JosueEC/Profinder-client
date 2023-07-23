import { Flex,Grid,Box, Spacer } from '@chakra-ui/react';
import TopPro from '../../../components/Home/TopPro/TopPro';


import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
    <Flex >       
      <SidebarClient />
        <Spacer  />
        <TopPro />
      </Flex>
  //   <Box display={{ base: 'grid', lg: 'flex' }} height="100vh">
  //     <Grid templateRows="5% 95%" display={{ base: 'grid', sm: 'grid',md: 'flex', lg: 'flex'}} width='100%'>
  //       <SidebarClient />
  //       <TopPro />
  //     </Grid>
  // </Box>
  );
};

export default DashboardClient;