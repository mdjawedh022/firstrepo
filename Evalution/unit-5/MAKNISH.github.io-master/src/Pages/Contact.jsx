import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    Link,
    InputGroup,
    InputLeftElement,
    Textarea,
    // Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    // MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsPerson, BsLinkedin, BsTwitter } from 'react-icons/bs';
  
  export default function Contact() {
    return (
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg={useColorModeValue('blue.50', 'blue.400')}
            color="Black"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="black.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="220px"
                          position={''}
                          variant="ghost"
                          color="black"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="black" size="20px" />}>
                          +91 8718812542
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          color="black"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="black" size="20px" />}>
                          maknish1993@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          color="#black"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="black" size="20px" />}>
                          Chhattisgarh, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                        <Link href="https://twitter.com/manishnishad18" target={'blank'}>
                        <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsTwitter size="28px" />}
                      />
                        </Link>
                    
                      <Link href="https://github.com/MAKNISH" target={'blank'}>
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                      </Link>
                      
                      <Link href="https://www.linkedin.com/in/manish-nishad/" target={'blank'}>
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsLinkedin size="28px" />}
                      />
                      </Link>
                      
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }
