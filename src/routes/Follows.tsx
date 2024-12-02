import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { dummyUsers } from '../data/dummy';
import UserCard from '../components/users/UserCard';

const Follows = () => {
  return (
    <Tabs isFitted colorScheme="green">
      <TabList>
        <Tab>Following</Tab>
        <Tab>Followers</Tab>
      </TabList>

      <TabPanels>
        <TabPanel p={4}>
          <VStack spacing={0} align="stretch">
            {dummyUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </VStack>
        </TabPanel>
        <TabPanel p={4}>
          <VStack spacing={0} align="stretch">
            {dummyUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Follows;
