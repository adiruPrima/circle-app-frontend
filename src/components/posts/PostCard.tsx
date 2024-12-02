import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { Heart, MessageCircle } from 'lucide-react';
import type { Post } from '../../data/dummy';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Box borderBottom="1px" borderColor="gray.700" p={4}>
      <Flex gap={3}>
        <Image
          src={post.author.avatar}
          alt={post.author.name}
          boxSize="40px"
          borderRadius="full"
        />
        <Box flex="1">
          <Flex align="center" gap={2} mb={1}>
            <Text fontWeight="bold">{post.author.name}</Text>
            <Text color="gray.400">{post.author.username}</Text>
            <Text color="gray.500">· {post.timestamp}</Text>
          </Flex>
          <Text mb={2}>{post.content}</Text>
          {post.image && (
            <Image
              src={post.image}
              alt="Post image"
              borderRadius="lg"
              mb={2}
              maxH="400px"
              objectFit="contain"
              w="full"
            />
          )}
          <Flex gap={6} color="gray.400">
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<Icon as={Heart} />}
              _hover={{ color: 'red.400' }}
            >
              {post.likes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<Icon as={MessageCircle} />}
              _hover={{ color: 'green.400' }}
            >
              {post.replies}
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default PostCard;
