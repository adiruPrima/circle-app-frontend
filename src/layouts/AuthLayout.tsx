import { Box, Container, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Box minH="100vh" bg="#1D1D1D" py={20}>
      <Container maxW="container.sm">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="green.400"
          mb={8}
          textAlign="center"
        >
          circle
        </Text>
        <Outlet />
      </Container>
    </Box>
  );
};

export default AuthLayout;
