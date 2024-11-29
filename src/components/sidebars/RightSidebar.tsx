import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { dummyUsers, suggestedUsers } from '../../data/dummy';

const RightSidebar = () => {
  const currentUser = dummyUsers[0];

  return (
    <Box w="320px" p={4} position="sticky" top={0} h="100vh">
      <VStack spacing={6} align="stretch">
        {/* Profile Card */}
        <Box bg="#262626" p={4} borderRadius="lg">
          <Box
            position="relative"
            h="80px"
            bg="green.400"
            borderRadius="lg"
            mb={4}
          >
            <Image
              src={currentUser.avatar}
              alt={currentUser.name}
              boxSize="60px"
              borderRadius="full"
              position="absolute"
              bottom="-30px"
              left="4"
              border="4px"
              borderColor="gray.800"
            />
          </Box>
          <Flex justify="flex-end" mb={2}>
            <Button size="sm" variant="outline" rounded="full">
              Edit Profile
            </Button>
          </Flex>
          <Text fontSize="xl" fontWeight="bold" color="white">
            {currentUser.name}
          </Text>
          <Text color="gray.400" mb={2}>
            {currentUser.username}
          </Text>
          <Text color="gray.300" mb={4}>
            {currentUser.bio}
          </Text>
          <Flex justify="space-between" alignItems="center" color="gray.400">
            <Text>{currentUser.following} Following</Text>
            <Text>{currentUser.followers} Followers</Text>
          </Flex>
        </Box>

        {/* Suggested Users */}
        <Box bg="#262626" p={4} borderRadius="lg">
          <Text fontSize="lg" fontWeight="bold" color="white" mb={4}>
            Suggested for you
          </Text>
          <VStack spacing={4} align="stretch">
            {suggestedUsers.map((user) => (
              <Flex key={user.id} justify="space-between" align="center">
                <Flex align="center">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    boxSize="40px"
                    borderRadius="full"
                    mr={3}
                  />
                  <Box>
                    <Text color="white" fontWeight="medium">
                      {user.name}
                    </Text>
                    <Text color="gray.400" fontSize="sm">
                      {user.username}
                    </Text>
                  </Box>
                </Flex>
                <Button size="sm" variant="outline" rounded="full">
                  Follow
                </Button>
              </Flex>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default RightSidebar;
