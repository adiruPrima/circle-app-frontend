import {
  Box,
  Button,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { dummyPosts, dummyUsers } from '../data/dummy';
import PostCard from '../components/posts/PostCard';
import EditProfileModal from '../components/profile/EditProfileModal';

const Profile = () => {
  const user = dummyUsers[0];
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  return (
    <Box>
      <Box position="relative" h="200px">
        <Image
          src={user.banner}
          alt="Profile banner"
          w="full"
          h="full"
          objectFit="cover"
        />
        <Image
          src={user.avatar}
          alt={user.name}
          boxSize="120px"
          borderRadius="full"
          border="4px"
          borderColor="gray.900"
          position="absolute"
          bottom="-60px"
          left="4"
          objectFit="cover"
        />
      </Box>

      <Box px={4} pt={16} pb={4}>
        <Flex justify="flex-end" mb={4}>
          <Button
            variant="outline"
            rounded="full"
            onClick={() => setIsEditProfileOpen(true)}
          >
            Edit Profile
          </Button>
        </Flex>

        <Text fontSize="2xl" fontWeight="bold">
          {user.name}
        </Text>
        <Text color="gray.400" mb={2}>
          {user.username}
        </Text>
        <Text mb={4}>{user.bio}</Text>

        <Flex gap={4} color="gray.400">
          <Text>{user.following} Following</Text>
          <Text>{user.followers} Followers</Text>
        </Flex>
      </Box>

      <Tabs colorScheme="green">
        <TabList>
          <Tab>Posts</Tab>
          <Tab>Media</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <VStack spacing={0} align="stretch">
              {dummyPosts.map(
                (post) =>
                  post.userId === user.id && (
                    <PostCard key={post.id} post={post} />
                  )
              )}
            </VStack>
          </TabPanel>
          <TabPanel>
            <Text color="gray.400" p={4}>
              No media yet
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        user={user}
      />
    </Box>
  );
};

export default Profile;
