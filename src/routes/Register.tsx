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
  RegisterFormData,
  registerSchema,
} from '../features/auth/schemas/schemas';
import AuthCard from '../features/auth/components/AuthCard';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log(data);
      // Handle registration logic here
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <AuthCard>
      <VStack spacing={6} as="form" onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize="2xl" fontWeight="bold">
          Create account
        </Text>

        <FormControl isInvalid={!!errors.fullName}>
          <Input placeholder="Full Name" {...register('fullName')} />
          <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <Input type="email" placeholder="Email" {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.confirmPassword}>
          <Input
            type="password"
            placeholder="Confirm Password"
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
          Create Account
        </Button>

        <Text color="gray.400">
          Already have an account?{' '}
          <Link to="/login">
            <Text as="span" color="green.400">
              Login
            </Text>
          </Link>
        </Text>
      </VStack>
    </AuthCard>
  );
};

export default Register;
