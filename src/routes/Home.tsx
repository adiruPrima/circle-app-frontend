import { VStack } from '@chakra-ui/react';
import CreatePostBox from '../components/posts/CreatePostBox';
import PostCard from '../components/posts/PostCard';
import { dummyPosts } from '../data/dummy';

const Home = () => {
  return (
    <VStack spacing={0} align="stretch">
      <CreatePostBox />
      {dummyPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </VStack>
  );
};

export default Home;
