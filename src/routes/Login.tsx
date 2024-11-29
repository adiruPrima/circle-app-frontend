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
import { LoginFormData, loginSchema } from '../features/auth/schemas/schemas';
import AuthCard from '../features/auth/components/AuthCard';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log(data);
      // Handle login logic here
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <AuthCard>
      <VStack spacing={6} as="form" onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize="2xl" fontWeight="bold">
          Login to Circle
        </Text>

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

        <Button
          type="submit"
          colorScheme="green"
          size="lg"
          width="full"
          isLoading={isSubmitting}
        >
          Login
        </Button>

        <Text color="gray.400">
          Don't have an account?{' '}
          <Link to="/register">
            <Text as="span" color="green.400">
              Register
            </Text>
          </Link>
        </Text>

        <Link to="/forgot-password">
          <Text color="green.400">Forgot password?</Text>
        </Link>
      </VStack>
    </AuthCard>
  );
};

export default Login;
