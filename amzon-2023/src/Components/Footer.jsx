import { Box, Container, IconButton, Link, SimpleGrid, Stack, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube,FaFacebookF } from 'react-icons/fa';
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <Box bg={'black'} color={'white'}>
   <Box display={'grid'} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(2,1fr)"}}
   w={{base:"",md:"",lg:"87%"}}

   m={'auto'} >
   <Container as={Stack} maxW={'4xl'} py={10}>
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={'50px'}>
    <Stack align={'flex-start'}>
            <Text fontSize={'12px'} fontWeight={'500'}>FIND A STORE</Text>
            <Link fontSize={'12px'} fontWeight={'500'} href={'#'}>BECOME A MEMBER</Link>
            <Link fontSize={'12px'} fontWeight={'500'} href={'#'}>SIGN UP FOR EMAIL</Link>
            <Link fontSize={'12px'} fontWeight={'500'} href={'#'}>Send Us Feedback</Link>
            <Link fontSize={'12px'} fontWeight={'500'} href={'#'}>STUDENT DISCOUNTS</Link>
            
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={'12px'} fontWeight={'500'}>GET HELP</Text>
            <Link fontSize={'11px'} color={'#7E7E7E'} href={'#'} _hover={{color:'white',textDecoration:"none"}}>Order Status</Link>
            <Link fontSize={'11px'} color={'#7E7E7E'} href={'#'} _hover={{color:'white',textDecoration:"none"}}>Delivery</Link>
            <Link fontSize={'11px'} color={'#7E7E7E'} href={'#'} _hover={{color:'white',textDecoration:"none"}}>Returns</Link>
            <Link fontSize={'11px'} color={'#7E7E7E'} href={'#'} _hover={{color:'white',textDecoration:"none"}}>Payment OPtions</Link>
            <Link fontSize={'11px'} color={'#7E7E7E'} href={'#'} _hover={{color:'white',textDecoration:"none"}}>Contact Us On Nike.com Inquiries</Link>
            <Link fontSize={'11px'} color={'#7E7E7E'} href={'#'} _hover={{color:'white',textDecoration:"none"}}>Contact Us On All Other Inquiries</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={'12px'} fontWeight={'500'}>ABOUT NIKE</Text>
            <Link fontSize={'11px'} color={'#7E7E7E'}  _hover={{color:'white',textDecoration:"none"}} href={'#'}>News</Link>
            <Link fontSize={'11px'} color={'#7E7E7E'}  _hover={{color:'white',textDecoration:"none"}} href={'#'}>Careers</Link>
            <Link fontSize={'11px'} color={'#7E7E7E'}  _hover={{color:'white',textDecoration:"none"}} href={'#'}>Investors</Link>
            <Link fontSize={'11px'} color={'#7E7E7E'}  _hover={{color:'white',textDecoration:"none"}} href={'#'}>Sustainability</Link>

          </Stack>
    </SimpleGrid>

    </Container >
 
   
<Box gap={'20px'} fontSize={'20px'} display={'flex'}m={{md:"25px 0 0 33%",lg:'25px 0 0 70%'}}>
            <Link href={'#'}>
            <Tooltip
                  label={'Twitter'}
                 hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="sm"
                    fontSize="1xl"
                    icon={ <FaTwitter />}
                     bg={'#757575'}
                    isRound
                    color="black"
                    _hover={{bg:'#757575',color:"none"}}
                  />
                </Tooltip>
             
            </Link>

            <Link  href={'#'}>
            <Tooltip
                label={'Facebook'}
                 hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="sm"
                    fontSize="1xl"
                    icon={  <FaFacebookF/>}
                     bg={'#757575'}
                    isRound
                    color="black"
                    _hover={{bg:'#757575',color:"none"}}
                  />
                </Tooltip>
            
            </Link>
            <Link  href={'#'}>
            <Tooltip
                label={'YouTube'}
                 hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="sm"
                    fontSize="1xl"
                    icon={ <FaYoutube />}
                     bg={'#757575'}
                    isRound
                    color="black"
                    _hover={{bg:'#757575',color:"none"}}
                  />
                </Tooltip>
              
            </Link>
            <Link  href={'#'}>
            <Tooltip
                label={'Instagram'}
                 hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="sm"
                    fontSize="1xl"
                    icon={   <FaInstagram />}
                     bg={'#757575'}
                    isRound
                    color="black"
                    _hover={{bg:'#757575',color:"none"}}
                  />
                </Tooltip>
            
            </Link>
          </Box>
</Box>
   

   
    </Box>
      
    </>
  )
}

export default Footer
