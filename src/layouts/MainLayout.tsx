import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../components/sidebars/LeftSidebar';
import RightSidebar from '../components/sidebars/RightSidebar';

const MainLayout = () => {
  return (
    <Flex minH="100vh" bg="#1d1d1d">
      <LeftSidebar />
      <Box flex="1" maxW="auto" borderX="1px" borderColor="gray.700">
        <Outlet />
      </Box>
      <RightSidebar />
    </Flex>
  );
};

export default MainLayout;
