import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations"
import Auth from "../../utils/auth";
import { Container, Text, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

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
      <Link to="/signup">
        <Text color="#faf0ca" fontSize={{ base: "12px", md: "16px", lg: "18px" }}>
                ← Go to Signup
        </Text>
       
      </Link>

      <Heading  color="#faf0ca" as="h2" size="xl" fontSize={{ base: "20px", md: "34px", lg: "40px" }} padding="3">Login</Heading>
      <FormControl>
              <FormLabel color="#faf0ca">Email address</FormLabel>
              <Input type="email" placeholder="youremail@test.com"
                  name="email"
                  id="email"
                  onChange={handleChange}/>
              <FormLabel color="#faf0ca">Password</FormLabel>
              <Input placeholder="******" type="password"
                  name="password"            
                  id="pwd"
                  color="white"
                  onChange={handleChange} />
              {
              error ? 
                <Container>
                  <Text color="#faf0ca" fontSize={{ base: "8px", md: "12px", lg: "16px" }}>The provided credentials are incorrect</Text>
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
    </Container>
  );
}


export default Login;
