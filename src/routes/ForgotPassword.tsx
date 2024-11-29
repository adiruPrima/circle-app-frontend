import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from '../features/auth/schemas/schemas';
import AuthCard from '../features/auth/components/AuthCard';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      console.log(data);
      // Handle forgot password logic here
    } catch (error) {
      console.error('Forgot password request failed:', error);
    }
  };

  return (
    <AuthCard>
      <VStack spacing={6} as="form" onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize="2xl" fontWeight="bold">
          Forgot Password
        </Text>
        <Text color="gray.400" textAlign="center">
          Enter your email address and we'll send you a link to reset your
          password
        </Text>

        <FormControl isInvalid={!!errors.email}>
          <Input type="email" placeholder="Email" {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          colorScheme="green"
          size="lg"
          width="full"
          isLoading={isSubmitting}
        >
          Send Reset Link
        </Button>

        <Link to="/login">
          <Text color="green.400">Back to Login</Text>
        </Link>
      </VStack>
    </AuthCard>
  );
};

export default ForgotPassword;
