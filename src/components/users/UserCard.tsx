import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import type { User } from '../../data/dummy';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <Box p={2}>
      <Flex justify="space-between" align="center">
        <Flex gap={3}>
          <Image
            src={user.avatar}
            alt={user.name}
            boxSize="48px"
            borderRadius="full"
            objectFit="cover"
          />
          <Box>
            <Text fontWeight="bold">{user.name}</Text>
            <Text color="gray.400">{user.username}</Text>
          </Box>
        </Flex>
        <Button
          size="sm"
          variant={isFollowing ? 'solid' : 'outline'}
          rounded="full"
          onClick={handleToggleFollow}
          _hover={{
            bg: isFollowing ? 'red.500' : 'green.600',
          }}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </Button>
      </Flex>
    </Box>
  );
};

export default UserCard;
