import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Divider,
  Stack,
  Image,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import pic1 from "../image/1.png";
import pic2 from "../image/2.png";
function Project() {
  return (
    <div style={{ width: "75%", margin: "40px auto" }}>
      <Heading
        fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
        fontFamily={""}
        textAlign={"center"}
        marginBottom={10}
      >
        Projects
      </Heading>

      <Grid
        gap={"30px"}
        grid-template-columns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
      >
        <GridItem>
          <Card maxW="sm">
            <CardBody>
              <Heading size="md" textAlign={"center"} marginBottom={"10px"}>
                {" "}
                Tanishq
              </Heading>
              <Image src={pic1} alt="tanishq" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Text>
                  Tanishq has emerged as India's fastest growing jewellery brand
                  and is a name which signifies superior craftsmanship,
                  exclusive designs and superlative product quality.
                </Text>
                <Divider />
                <Text color="blue.600" fontSize="2xl">
                  Tech Stack
                </Text>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    HTML
                  </Button>
                  <Button variant="solid" colorScheme="blue">
                    CSS
                  </Button>
                  <Button variant="solid" colorScheme="blue">
                    JavaScript
                  </Button>
                </ButtonGroup>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Github
                </Button>
                <Button variant="solid" colorScheme="blue">
                  Live Demo
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>

        {/* ......................................................... */}

        <GridItem>
          {" "}
          <Card maxW="sm">
            <CardBody>
              <Heading size="md" textAlign={"center"} marginBottom={"10px"}>
                {" "}
                J.Crew
              </Heading>
              <Image src={pic2} alt="tanishq" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Text>
                  In this project we have tried to manipulate dom elements,
                  styling using css and tried to make a dynamic and responsive
                  website. we were able to clone more or less the whole website
                  with same looking and features.
                </Text>
                <Divider />
                <Text color="blue.600" fontSize="2xl">
                  Tech Stack
                </Text>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    HTML
                  </Button>
                  <Button variant="solid" colorScheme="blue">
                    CSS
                  </Button>
                  <Button variant="solid" colorScheme="blue">
                    JavaScript
                  </Button>
                </ButtonGroup>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Github
                </Button>
                <Button variant="solid" colorScheme="blue">
                  Live Demo
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
        {/* .......................................... */}
        <GridItem>
          <Card maxW="sm">
            <CardBody>
              <Heading size="md" textAlign={"center"} marginBottom={"10px"}>
                {" "}
                Tanishq
              </Heading>
              <Image src={pic1} alt="tanishq" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Text>
                  Tanishq has emerged as India's fastest growing jewellery brand
                  and is a name which signifies superior craftsmanship,
                  exclusive designs and superlative product quality.
                </Text>
                <Divider />
                <Text color="blue.600" fontSize="2xl">
                  Tech Stack
                </Text>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    HTML
                  </Button>
                  <Button variant="solid" colorScheme="blue">
                    CSS
                  </Button>
                  <Button variant="solid" colorScheme="blue">
                    JavaScript
                  </Button>
                </ButtonGroup>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Github
                </Button>
                <Button variant="solid" colorScheme="blue">
                  Live Demo
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Project;
