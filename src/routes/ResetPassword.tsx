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
  ResetPasswordFormData,
  resetPasswordSchema,
} from '../features/auth/schemas/schemas';
import AuthCard from '../features/auth/components/AuthCard';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      console.log(data);
      // Handle reset password logic here
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

  return (
    <AuthCard>
      <VStack spacing={6} as="form" onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize="2xl" fontWeight="bold">
          Reset Password
        </Text>

        <FormControl isInvalid={!!errors.password}>
          <Input
            type="password"
            placeholder="New Password"
            {...register('password')}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.confirmPassword}>
          <Input
            type="password"
            placeholder="Confirm New Password"
            {...register('confirmPassword')}
          />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          colorScheme="green"
          size="lg"
          width="full"
          isLoading={isSubmitting}
        >
          Reset Password
        </Button>

        <Link to="/login">
          <Text color="green.400">Back to Login</Text>
        </Link>
      </VStack>
    </AuthCard>
  );
};

export default ResetPassword;
