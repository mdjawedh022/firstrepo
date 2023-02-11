import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Typewriter } from "react-simple-typewriter";
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Tooltip,
    Link,
    IconButton, 
    useClipboard,
    HStack
  } from '@chakra-ui/react';

  
  export default function About() {
    const { hasCopied, onCopy } = useClipboard('example@example.com');

    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={700}
            fontSize={{ base: '1xl', sm: '3xl', md: '3xl' }}
            lineHeight={'110%'}>
            About Me
          </Heading>
            <Text color={'blue.400'} fontSize={'30px'}>
              I'm Manish Nishad and I'm 
              <Text as={'b'}>
                <Typewriter 
                  words={[" Full Stack Developer", " Software Engineer"]}
                  loop
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Text>
            </Text>
          <Text color={'black.800'} maxW={'3xl'}>
          A passionate Full Stack Web Developer, Dedicated to developing robust applications that interact with the Backend part of web applications. Extensive expertise in website architecture, design, and web design, and web API designs. Problem-solving mindset with a goal to optimize my application for better stability and speed. Love to work in a team.
          </Text>
          <HStack>
                  <Tooltip
                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                    closeOnClick={false}
                    hasArrow>
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: 'blue.800',
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>
  
                  <Link href="https://github.com/MAKNISH" target={'blank'}>
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      position={''}
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: 'blue.300',
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="https://twitter.com/manishnishad18" target={'blank'}>
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      position={''}
                      size="lg"
                      icon={<BsTwitter size="28px" />}
                      _hover={{
                        bg: 'blue.300',
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="https://www.linkedin.com/in/manish-nishad/" target={'blank'}>
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      position={''}
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: 'blue.300',
                      }}
                      isRound
                    />
                  </Link>
                </HStack>
          <Stack spacing={6} direction={'row'}>
            
          </Stack>
          <Flex w={'full'}>
          
          </Flex>
        </Stack>
      </Container>
    );
  }