import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} >
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>VideoPoints</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder={'Enter your name'}
            type={'text'}
            required
            focusBorderColor="purple.500"
          />
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
         
          <Button bgGradient='linear(to-l, #7928CA, #FF0080)' type="submit">
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signed Up?
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
