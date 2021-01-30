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
    <div className="container my-1">
      <Link to="/signup">
        ← Go to Signup
      </Link>

      <Heading as="h2" size="xl" fontSize={{ base: "20px", md: "34px", lg: "40px" }} padding="3">Login</Heading>

      <FormControl id="formSubmit" className="email" onSubmit={handleFormSubmit}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="youremail@test.com"
            name="email"
            id="email"
            onChange={handleChange}/>
        <FormLabel>Password</FormLabel>
        <Input placeholder="******" type="password"
            name="password"            
            id="pwd"
            onChange={handleChange} />
          {
          error ? 
            <Container>
              <Text fontSize={{ base: "8px", md: "12px", lg: "16px" }}>The provided credentials are incorrect</Text>
            </Container> : null
        }
        <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
      </FormControl>

{/*       <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {
          error ? <div>
            <p className="error-text" >The provided credentials are incorrect</p>
          </div> : null
        }
        <div className="flex-row flex-end">
          <button type="submit">
            Submit
          </button>
        </div>
      </form> */}
    </div>
  );
}


export default Login;
