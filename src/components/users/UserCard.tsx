import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import type { User } from '../../data/dummy';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Box borderBottom="1px" borderColor="gray.700" p={4}>
      <Flex justify="space-between" align="center">
        <Flex gap={3}>
          <Image
            src={user.avatar}
            alt={user.name}
            boxSize="48px"
            borderRadius="full"
          />
          <Box>
            <Text fontWeight="bold">{user.name}</Text>
            <Text color="gray.400">{user.username}</Text>
          </Box>
        </Flex>
        <Button size="sm" variant="outline" rounded="full">
          Follow
        </Button>
      </Flex>
    </Box>
  );
};

export default UserCard;
