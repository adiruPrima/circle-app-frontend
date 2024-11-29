import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface AuthCardProps {
  children: ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <Box p={8} w="full" maxW="400px" mx="auto">
      {children}
    </Box>
  );
};

export default AuthCard;
