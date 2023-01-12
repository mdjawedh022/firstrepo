import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import img1 from "../Data/DSC_2930-Croped-300kb.jpg"
  import { DownloadIcon } from "@chakra-ui/icons";
  
  export default function Home() {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={1600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                fontSize={'30px'}>
                Hello, I'm
                </Text>  
              <Text
                as={'span'}
                // position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                //   position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Manish Nishad
              </Text>
              <br />
              <Text as={'span'} color={'blue.400'} fontSize={'52px'}>
                Full Stack Web Developer
              </Text>
            </Heading>
            <Text color={'black.700'}>
            A passionate Full Web Stack Developer (MERN), Software Engineer. Curious to learn about emerging web technologies.
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
                position={''}
                _hover={{ bg: 'blue.500' }}>
                <a href="https://drive.google.com/u/0/uc?id=13qjwZkSn8jyAPmQKP2FUjQHi83__Tzgr&export=download">Resume</a>
                <DownloadIcon _activeLink={"https://drive.google.com/u/0/uc?id=13qjwZkSn8jyAPmQKP2FUjQHi83__Tzgr&export=download"} />
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'160%'}
              h={'160%'}
              position={'absolute'}
              top={'-40%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('blue.50', 'blue.400')}
            />
            <Box
              position={'relative'}
              height={'450px'}
              rounded={'2xl'}
              zIndex={-1}
              boxShadow={'2xl'}
              width={'350px'}
              overflow={'hidden'}
              >
              <Image
                position={''}
                height={'100%'}
                width={'100%'}
                objectFit={'cover'}
                src={img1}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export const Blob = (props) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };