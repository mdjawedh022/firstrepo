import '../Styles/Skills.css';
import {
    Box,
    Center,
    Heading,
    Image,
    Wrap,
    WrapItem
  } from '@chakra-ui/react';
  
  
  export default function Footer() {
    return (
        <><Box textAlign={'center'}>
        <Heading
            fontWeight={700}
            fontSize={{ base: '1xl', sm: '3xl', md: '3xl' }}
            lineHeight={'110%'}>
            Skills
          </Heading>
        </Box>
    
      <Center py={12}>
        <Wrap spacing={'40px'} justify='center' width={'80%'}>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-1'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-2'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-3'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-4'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-5'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-6'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-7'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-8'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-20'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-9'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-10'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-11'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='150px' h='150px'>
                <Image
                    className='img-12'
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
        </Wrap>
      </Center>
      </>
    );
  }