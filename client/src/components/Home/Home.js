import React from "react";
import { Container, Text, Heading, Box, Center } from "@chakra-ui/react";



// Sample card from Airbnb


// fontSize={{ base: "20px", md: "34px", lg: "40px" }}padding="3" margin="0 0 20px 0"

  

const Home = () => {

return (

  <Container maxW="xl" centerContent>
      <Center>
        <Box 
        padding="4"  
        bgGradient="linear(to-r,blue.900,gray.500,blue.900)" 
        borderRadius="lg" 
        color="white" 
        maxW="3xl"> 

        <Heading as="h1" size="xl" mb="5" >
          <Center>
        Welcome to
        Lunar⚕️Doctor
          </Center>
        </Heading>
          
        <Text fontSize="xl" as="i">
          <Center>
        Visit your Doctor from Anywhere!
          </Center>
        </Text>
        
        </Box>
      </Center>
  </Container>
  
);
};


export default Home;
