import { Box, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { dummyUsers } from '../../data/dummy';
import EditProfileModal from '../profile/EditProfileModal';
import ProfileCard from '../profile/ProfileCard';
import SuggestedUsersCard from '../users/SuggestedUsersCard';

const RightSidebar = () => {
  const currentUser = dummyUsers[0];
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  return (
    <Box w="400px" p={4} position="sticky" top={0} h="100vh">
      <VStack spacing={6} align="stretch">
        {/* Profile Card - Only show if not on profile page */}
        {!isProfilePage && (
          <ProfileCard
            user={currentUser}
            onEditProfile={() => setIsEditProfileOpen(true)}
          />
        )}

        {/* Suggested Users */}
        <SuggestedUsersCard />
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
