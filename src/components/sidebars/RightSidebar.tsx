import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { dummyUsers, suggestedUsers } from '../../data/dummy';
import EditProfileModal from '../profile/EditProfileModal';
import ProfileCard from '../profile/ProfileCard';

const RightSidebar = () => {
  const currentUser = dummyUsers[0];
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  return (
    <Box w="320px" p={4} position="sticky" top={0} h="100vh">
      <VStack spacing={6} align="stretch">
        {/* Profile Card - Only show if not on profile page */}
        {!isProfilePage && (
          <ProfileCard
            user={currentUser}
            onEditProfile={() => setIsEditProfileOpen(true)}
          />
        )}

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

      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        user={currentUser}
      />
    </Box>
  );
};

export default RightSidebar;
