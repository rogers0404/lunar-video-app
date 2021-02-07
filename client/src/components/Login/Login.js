import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations"
import Auth from "../../utils/auth";
import { Container, Text, Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
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
      <Link to="/signup">
        <Text color="white" fontSize="sm">
                ← Go to Signup
        </Text>
       
      </Link>

      <Heading  color="white" as="h1" size="2xl"  padding="3">Login</Heading>
      <FormControl>
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
              {
              error ? 
                <Container>
                  <Text color="white" fontSize="lg">The provided credentials are incorrect</Text>
                </Container> : null
            }
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


export default Login;
