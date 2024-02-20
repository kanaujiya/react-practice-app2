import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter email here..."
              border={'none'}
              borderRadius={'none'}
              focusBorderColor={'none'}
              outline={'none'}
            />
            <Button
              p={'0'}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'}>VideoPoints</Heading>
          <Text>All rights recieved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a href="" target="_blank">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="" target="_blank">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="" target="_blank">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
