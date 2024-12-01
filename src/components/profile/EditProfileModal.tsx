import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Camera } from 'lucide-react';
import { useState } from 'react';
import type { User } from '../../data/dummy';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

const EditProfileModal = ({ isOpen, onClose, user }: EditProfileModalProps) => {
  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    bio: user.bio,
    avatar: user.avatar,
    banner: user.banner,
  });

  const handleSave = () => {
    // Handle save logic here
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bg="#1D1D1D">
        <ModalHeader>Edit profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={6}>
            {/* Banner Image */}
            <Box position="relative" w="full" h="200px">
              <Image
                src={formData.banner}
                alt="Profile banner"
                w="full"
                h="full"
                objectFit="cover"
                borderRadius="md"
              />
              <Button
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                colorScheme="blackAlpha"
                rounded="full"
                size="sm"
              >
                <Icon as={Camera} />
              </Button>
            </Box>

            {/* Avatar */}
            <Box position="relative" mt="-60px" alignSelf="flex-start" ml={4}>
              <Image
                src={formData.avatar}
                alt="Profile avatar"
                boxSize="120px"
                borderRadius="full"
                border="4px"
                borderColor="gray.900"
                objectFit="cover"
              />
              <Button
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                colorScheme="blackAlpha"
                rounded="full"
                size="sm"
              >
                <Icon as={Camera} />
              </Button>
            </Box>

            {/* Form Fields */}
            <VStack spacing={4} w="full">
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                bg="#262626"
                border="none"
              />
              <Input
                placeholder="Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                bg="#262626"
                border="none"
              />
              <Textarea
                placeholder="Bio"
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                bg="#262626"
                border="none"
                resize="none"
                rows={3}
              />
            </VStack>

            <Flex justify="flex-end" w="full">
              <Button colorScheme="green" onClick={handleSave} rounded="full">
                Save
              </Button>
            </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
