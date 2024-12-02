import { Box, Text, VStack } from '@chakra-ui/react';
import { suggestedUsers } from '../../data/dummy';
import UserCard from './UserCard';

const SuggestedUsersCard = () => {
  return (
    <Box bg="#262626" p={4} borderRadius="lg">
      <Text fontSize="lg" fontWeight="bold" color="white" mb={4}>
        Suggested for you
      </Text>
      <VStack spacing={4} align="stretch">
        {suggestedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </VStack>
    </Box>
  );
};

export default SuggestedUsersCard;
