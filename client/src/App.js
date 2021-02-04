import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { BrowserRouter as Router, Switch} from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { ChakraProvider, Grid, GridItem   } from "@chakra-ui/react";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Schedule from "./components/Schedule/Schedule";
import Appointment from "./components/Appointment/Appointment";

/* import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Success from "./pages/Success"; */

import { StoreProvider } from "./utils/GlobalState";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/moon-background2.jpg'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}}>
          <StoreProvider>
              <ChakraProvider>
              
                  <Nav />
                  {/*Layout for the app using Chakra-UI */}
                  <Grid
                      h="85vh"
                      templateRows="repeat(9, 1fr)"
                      templateColumns="repeat(7, 1fr)"
                      gap={4}
                    >
                      <GridItem rowSpan={9} colSpan={1} bg="transparent" />
                      <GridItem rowSpan={1} colSpan={5} bg="transparent" />
                      <GridItem rowSpan={9} colSpan={1} bg="transparent" />
                      <GridItem rowSpan={7} colSpan={5} bg="transparent"> 
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/signup" component={Signup} />
                                <Route exact path="/schedule" component={Schedule} />
                                <Route exact path="/myAppointment" component={Appointment} />                            </Switch>
                      
                      </GridItem>
                      <GridItem rowSpan={1} colSpan={5} bg="transparent" />
                    </Grid>
                  
                  {/*Layout for the app using Chakra-UI */}
              </ChakraProvider>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
