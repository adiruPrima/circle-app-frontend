import { Box, Button, Flex, Icon, Image, Textarea } from '@chakra-ui/react';
import { ImagePlus } from 'lucide-react';
import { useState } from 'react';
import { dummyUsers } from '../../data/dummy';

const CreatePostBox = () => {
  const [content, setContent] = useState('');
  const currentUser = dummyUsers[0];

  return (
    <Box borderBottom="1px" borderColor="gray.700" p={4}>
      <Flex gap={3} align="flex-start">
        <Image
          src={currentUser.avatar}
          alt={currentUser.name}
          boxSize="40px"
          borderRadius="full"
        />
        <Flex direction="column" flex="1" gap={3}>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What is happening?!"
            border="none"
            p={2}
            minH="unset"
            overflow="hidden"
            resize="none"
            _focus={{
              boxShadow: 'none',
            }}
          />
          <Flex justify="flex-end" gap={2} align="center">
            <Button
              colorScheme="green"
              variant="ghost"
              size="md"
              rounded="full"
              p={3}
              h="auto"
              minW="auto"
              _hover={{ bg: 'green.800' }}
            >
              <Icon as={ImagePlus} size={24} />
            </Button>
            <Button colorScheme="green" size="sm" rounded="full">
              Post
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CreatePostBox;
