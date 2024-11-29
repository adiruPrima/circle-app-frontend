import { Box, Button, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import { CircleUserRound, Heart, Home, LogOut, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const LeftSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Heart, label: 'Follows', path: '/follows' },
    { icon: CircleUserRound, label: 'Profile', path: '/profile' },
  ];

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens)
    navigate('/login');
  };

  return (
    <Box w="240px" p={4} position="sticky" top={0} h="100vh">
      <VStack spacing={8} align="stretch" h="full">
        <Text fontSize="3xl" fontWeight="bold" color="green.400">
          circle
        </Text>

        <VStack spacing={2} align="stretch">
          {navItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <Flex
                p={2}
                borderRadius="md"
                align="center"
                color={location.pathname === item.path ? 'white' : 'gray.400'}
                _hover={{ bg: 'whiteAlpha.100' }}
              >
                <Icon as={item.icon} mr={3} />
                <Text fontWeight="medium">{item.label}</Text>
              </Flex>
            </Link>
          ))}
        </VStack>

        <Button colorScheme="green" size="lg" rounded="full">
          Create Post
        </Button>

        <Box mt="auto">
          <Flex
            p={2}
            borderRadius="md"
            align="center"
            color="gray.400"
            _hover={{ bg: 'whiteAlpha.100', cursor: 'pointer' }}
            onClick={handleLogout}
          >
            <Icon as={LogOut} mr={3} />
            <Text fontWeight="medium">Logout</Text>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default LeftSidebar;
