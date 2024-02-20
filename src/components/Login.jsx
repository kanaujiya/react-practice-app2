import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full','96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textTransform={'uppercase'}>Welcome Back</Heading>
          <Input
            placeholder={'Enter your email address'}
            type={'email'}
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder={'Enter your password'}
            type={'password'}
            required
            focusBorderColor="purple.500"
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forget-password'}>Forgot Password?</Link>
          </Button>
          <Button bgGradient='linear(to-l, #7928CA, #FF0080)' type="submit">
            Log In
          </Button>
          <Text textAlign={'right'}>
            New User?
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
