import React from "react";
import { Container, Heading, Box, Center} from "@chakra-ui/react";


const Home = () => {

  return (
    <Container maxW="xl" centerContent>
      <Center>
        <Box padding="4"  color="#faf0ca" maxW="3xl">                    
        <Heading as="h2" size="xl" color="black" backgroundColor="white" fontSize={{ base: "20px", md: "34px", lg: "40px" }} padding="3" margin="0 0 20px 0">Welcome to Lunar Doctor</Heading>
          <Heading></Heading>
          <Heading as="h4" size="lg" color="black" backgroundColor="white" fontSize={{ base: "20px", md: "34px", lg: "40px" }} padding="5">Where you can be in touch with your Doctor whenever you want.</Heading>
        
        </Box>
      </Center>
  </Container>
  );
};

export default Home;
