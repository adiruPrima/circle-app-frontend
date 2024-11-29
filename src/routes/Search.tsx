import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from '@chakra-ui/react';
import { Search as SearchIcon } from 'lucide-react';
import { dummyUsers } from '../data/dummy';
import UserCard from '../components/users/UserCard';

const Search = () => {
  return (
    <VStack spacing={4} align="stretch" p={4}>
      <InputGroup>
        <InputLeftElement>
          <SearchIcon size={20} />
        </InputLeftElement>
        <Input placeholder="Search users..." />
      </InputGroup>
      <Box>
        {dummyUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Box>
    </VStack>
  );
};

export default Search;
