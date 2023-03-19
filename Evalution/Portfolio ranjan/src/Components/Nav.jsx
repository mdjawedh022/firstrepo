import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div style={{padding:"0",margin:"0", boxSizing:"border-box"}}>
      <Box bg={useColorModeValue('gray.100', 'gray.900', )} px={4} sx={{position:"fixed", width:"100%", }}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box style={{fontFamily:"sans-serif"}}>
          <img
          src="https://i.pinimg.com/474x/4d/35/c1/4d35c148dc6c150ee912b90f4c25e953.jpg"
          alt="ranjan"
          width="60"
        />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.githubusercontent.com/u/107936455?v=4'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Home</MenuItem>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Skill</MenuItem>
                  <MenuItem>Project</MenuItem>
                  <MenuItem>Contact</MenuItem>
                  <MenuItem>Resume</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}