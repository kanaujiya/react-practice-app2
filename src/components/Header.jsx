import React from 'react';
import {
  DrawerBody,
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={20} />
      </Button>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
            textTransform={'uppercase'}
          >
            VideoPoints
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant="outline"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
              >
                <Link to="/">Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant="outline"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
              >
                <Link to="/videos">Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant="outline"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
              >
                <Link to="/videos?category=free">Free videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant="outline"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
              >
                <Link to="/upload">Upload videos</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={10}
              left={0}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button
                onClick={onClose}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                size={'sm'}
              >
                <Link to="/login">Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                variant={'outline'}
                size={'sm'}
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
