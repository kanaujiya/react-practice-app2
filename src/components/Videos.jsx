import React, { useState } from 'react';
import { Heading, Stack, VStack, Text } from '@chakra-ui/react';
import videosArrList from '../VideosArr';

const Videos = () => {
  const videosArr = videosArrList;
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'} p={'8'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc.video}
          style={{ width: '100%' }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'}>
          <Heading>{videoSrc.title}</Heading>
          <Text>{videoSrc.describe}</Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        // py={'2'}
        spacing={'3'}
        overflowY={'auto'}
      >
        {videosArr
          .filter(vArr => vArr.id != videoSrc.id)
          .map((item, index) => (
            <>
              <video
                key={index}
                onClick={() => setVideoSrc(item)}
                src={item.video}
                style={{ width: '100%' }}
                muted
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
               

              ></video>
              <Text fontSize="md" fontWeight={'500'}>
                {item.title}
              </Text>
              <Text fontSize="xs">{item.describe}</Text>
            </>
          ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
