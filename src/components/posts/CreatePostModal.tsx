import {
  Button,
  Flex,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';
import { ImagePlus } from 'lucide-react';
import { useState } from 'react';
import { dummyUsers } from '../../data/dummy';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal = ({ isOpen, onClose }: CreatePostModalProps) => {
  const [content, setContent] = useState('');
  const currentUser = dummyUsers[0];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bg="#1D1D1D">
        <ModalHeader pt={6} pb={0}>
          <ModalCloseButton
            top={4}
            right={4}
            p={2}
            borderRadius="full"
            _hover={{ bg: 'whiteAlpha.200' }}
          />
        </ModalHeader>
        <ModalBody p={4}>
          <Flex gap={3} align="flex-start">
            <Image
              src={currentUser.avatar}
              alt={currentUser.name}
              boxSize="40px"
              borderRadius="full"
              objectFit="cover"
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
                bg="transparent"
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreatePostModal;
