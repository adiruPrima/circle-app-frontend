import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import type { User } from '../../data/dummy';

interface ProfileCardProps {
  user: User;
  onEditProfile: () => void;
}

const ProfileCard = ({ user, onEditProfile }: ProfileCardProps) => {
  return (
    <Box bg="#262626" p={4} borderRadius="lg">
      <Box position="relative" h="80px" borderRadius="lg" overflow="hidden">
        <Image
          src={user.banner}
          alt="Profile banner"
          w="full"
          h="full"
          objectFit="cover"
        />
      </Box>

      {/* Avatar Container */}
      <Box position="relative" mt="-30px" mb={-4} ml={4}>
        <Image
          src={user.avatar}
          alt={user.name}
          boxSize="60px"
          borderRadius="full"
          border="4px"
          borderColor="#262626"
          objectFit="cover"
        />
      </Box>

      <Flex justify="flex-end" mb={2}>
        <Button
          size="sm"
          variant="outline"
          rounded="full"
          onClick={onEditProfile}
        >
          Edit Profile
        </Button>
      </Flex>
      <Text fontSize="xl" fontWeight="bold" color="white">
        {user.name}
      </Text>
      <Text color="gray.400" mb={2}>
        {user.username}
      </Text>
      <Text color="gray.300" mb={4}>
        {user.bio}
      </Text>
      <Flex justify="space-between" alignItems="center" color="gray.400">
        <Text>{user.following} Following</Text>
        <Text>{user.followers} Followers</Text>
      </Flex>
    </Box>
  );
};

export default ProfileCard;
