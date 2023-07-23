import { Flex, Spacer } from '@chakra-ui/react';
import FeedbackForm from '../../../components/DashboardClient/FeedbackForm/FeedbackForm';


import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
    <Flex 
    // flexDirection={{ base: 'column', md: 'row' }}
    >
        <SidebarClient />
        <Spacer  />
        <FeedbackForm/>
      </Flex>
  );
};

export default DashboardClient;