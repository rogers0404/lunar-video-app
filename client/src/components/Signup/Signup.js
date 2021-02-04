import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import { Container, Box, Text, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName
      }
    });
    console.log(mutationResponse);
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <Container>
    <Box 
    padding="4"  
    bgGradient="linear(to-r,blue.900,gray.500,blue.900)" 
    borderRadius="lg" 
    color="white" 
    maxW="3xl"> 
      <Link to="/login">
        <Text color="white" fontSize="sm">
              ← Go to Login
        </Text>       
      </Link>

      <Heading  color="white" as="h1" size="2xl"  padding="3">Signup</Heading>
      <FormControl>
              <FormLabel color="white">First Name</FormLabel>
              <Input type="firstName" placeholder="Your First Name"
                  name="firstName"
                  id="firstName"
                  color="white"
                  onChange={handleChange}/>
                  <FormLabel color="white">Last Name</FormLabel>
              <Input type="lastName" placeholder="Your Last Name"
                  name="lastName"
                  id="lastName"
                  color="white"
                  onChange={handleChange}/>
              <FormLabel color="white">Email address</FormLabel>
              <Input type="email" placeholder="youremail@test.com"
                  name="email"
                  id="email"
                  color="white"
                  onChange={handleChange}/>
              <FormLabel color="white">Password</FormLabel>
              <Input placeholder="******" type="password"
                  name="password"            
                  id="pwd"
                  color="white"
                  onChange={handleChange} />
            <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                onClick={handleFormSubmit}
              >
                Submit
              </Button>
      </FormControl>
      </Box>
    </Container>

  );

}

export default Signup;
