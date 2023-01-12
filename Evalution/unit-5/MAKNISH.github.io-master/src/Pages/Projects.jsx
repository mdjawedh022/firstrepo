import {
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  HStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FaGithub, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { SiChakraui } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { DiJavascript1 } from "react-icons/di";
import nordstromImage from "../Data/nordstrom.com_600x380.jpg";
import bewakoofImage from "../Data/bewakoof.com_600x380.jpg";


export default function ProjectsDummy() {
  return (
      <>
      <Heading
          marginTop={20}
          fontWeight={700}
          fontSize={{ base: '1xl', sm: '3xl', md: '3xl' }}
          lineHeight={'110%'}
          align="center">
          Projects
      </Heading>
      <Wrap spacing={50} justify={'center'} marginTop={'20px'}>
          <WrapItem py={6}>
      <Box
      maxW={'600px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}>
      <Image
        alt={'Hero Image'}
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={'100%'}
        position={''}
        src={nordstromImage}
      />
      <Heading fontSize={'2xl'} fontFamily={'body'} marginTop={'10px'}>
          Nordstrom.com Clone
      </Heading>
      <Text
        marginTop={'10px'}
        textAlign={'justify'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}>
        Nordstrom, Inc. is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids. Since 1901, we've been committed to providing our customers with the best possible service—and to improving it every day.
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
      <HStack cursor={"pointer"}>
              <Text fontSize={"20px"} fontWeight={700}>Tech Stack  -</Text>
              <FaHtml5 size={30} />
              <FaCss3Alt size={30} />
              <DiJavascript1 size={30} />
              <FaReact size={30} />
              <SiChakraui size={30} />
              <VscJson size={30} />
          </HStack>
      </Stack>

      <Stack mt={8} direction={'row'} spacing={4} align={'center'} justify={'center'}>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}>
              <a href="https://github.com/MAKNISH/troubled-trousers-6605/tree/main/nordstrom" target={"blank"}>Github</a>
              <FaGithub size={25}/>
          </Button>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}
            ><a href="https://lustrous-shortbread-3a021b.netlify.app/" target={"blank"}>Live</a><AiOutlineRise size={25} />
          </Button>
      </Stack>
    </Box>
          </WrapItem>

      <WrapItem py={6}>
      <Box
      maxW={'600px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}>
      <Image
        alt={'Hero Image'}
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={'100%'}
        position={''}
        src={bewakoofImage}
      />
      <Heading fontSize={'2xl'} fontFamily={'body'} marginTop={'10px'}>
          Bewakoof.com Clone
      </Heading>
      <Text
        marginTop={'10px'}
        textAlign={'justify'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}>
        Bewakoof is the fashion e-commerce startup that stands out from the rest. It offers a trendy collection of apparel based on dazzling and upbeat designs that resonate with the millennials. This was the spirit on which Bewakoof was founded in 2012.
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <HStack cursor={"pointer"}>
              <Text fontSize={"20px"} fontWeight={700}>Tech Stack  -</Text>
              <FaHtml5 size={30}/>
              <FaCss3Alt size={30} />
              <DiJavascript1 size={30} />
              <VscJson size={30} />
          </HStack>
      </Stack>

      <Stack mt={8} direction={'row'} spacing={4} align={'center'} justify={'center'}>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}>
              <a href="https://github.com/Arun-kumar-fw20-0202/-giving-scene-66" target={"blank"}>Github</a>
              <FaGithub size={25}/>
          </Button>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}
            ><a href="https://clinquant-baklava-8aec62.netlify.app/" target={"blank"}>Live</a><AiOutlineRise size={25} />
          </Button>
      </Stack>
    </Box>
      </WrapItem>
      </Wrap>
  </>
  );
}
