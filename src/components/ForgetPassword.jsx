import React from 'react';
import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
            <Text>Enter the email address to reset password.</Text>
          <Input
            placeholder={'Enter your email address'}
            type={'email'}
            required
            focusBorderColor="purple.500"
          />

          <Button bgGradient='linear(to-l, #7928CA, #FF0080)' type="submit">
            Send
          </Button>
          <Text textAlign={'right'}>
            Remember password! 
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/login'}> Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
