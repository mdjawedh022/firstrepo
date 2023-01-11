import React from 'react'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
} from '@chakra-ui/react';

import profilepic from '../image/profilepic.jpg'
function Home() {
  const goto = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div>
      <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg:'blue.400',
                zIndex: -1,
              }}>
              My Name is,
            </Text>
            <br />
            <Text as={'span'} color={'blue.400'}>
              MD JAWED HUSSAIN
            </Text>
          </Heading>
          <Text color={'gray.500'}fontWeight={'550'} fontSize={25}>
          I am Full-stack Web Developer
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}
              onClick={() =>
                goto(
                  "https://drive.google.com/file/d/1m5GgisAbX7FWCvIzTYzc-8tLL-hUtOYO/view?usp=sharing"
                )
              }
              >
              Resume
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              onClick={() =>
                goto("https://www.linkedin.com/in/md-jawed-hussain-3404b3248/")
              }
              >
             Linkend
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
        
          <Box
            position={'relative'}
            // height={'480px'}
            // rounded={'2xl'}
            height={{base:"280px",sm:"3xl",lg:"530px"}}
            borderRadius={"50%"}
            boxShadow={'2xl'}
            width={{base:"",sm:"",lg:"65%"}}
            overflow={'hidden'}>
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent', }}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              _hover={{transition: "1000ms",
              transform: "scale(1.10)"}}
              src={profilepic}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
    </div>
  );
}




export default Home
