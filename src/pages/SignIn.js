
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    Box,
    Avatar,
    FormControl
  } from "@chakra-ui/react";
  
  
  export default function Signin() {
  
    return (
  
     <div>
  
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Sign up</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <Input type="email" placeholder="Email address" />
                  </InputGroup>
                  <InputGroup>
                    <Input type="firstname" placeholder="First name" /> 
                  </InputGroup>
                  <InputGroup>
                    <Input type="lastname" placeholder="Last name" /> 
                  </InputGroup>
                  <InputGroup>
                    <Input type="city" placeholder="Your city" /> 
                  </InputGroup>
                  <InputGroup>
                    <Input type="lastname" placeholder="Your country" /> 
                  </InputGroup>
                  <InputGroup>
                    <Input type="date" placeholder="Birthday" /> 
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                    />
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
     </div>
    );
  }
  
  
  
  

