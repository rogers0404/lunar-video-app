import React from "react";
<<<<<<< HEAD
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

/* import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav"; */
import { StoreProvider } from "./utils/GlobalState";
/* import OrderHistory from "./pages/OrderHistory"; */
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { BrowserRouter as Router, Switch} from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { ChakraProvider, Grid, GridItem   } from "@chakra-ui/react";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

/* import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Success from "./pages/Success"; */

import { StoreProvider } from "./utils/GlobalState";
>>>>>>> feature/login-signup

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
        <div>
          <StoreProvider>
<<<<<<< HEAD
              <div> 
                  <h1> Lucky day / Fun ideas</h1>
              </div>
            {/* <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route exact path="/success" component={Success} />
              <Route component={NoMatch} />
            </Switch> */}
=======
              <ChakraProvider>
              
                  <Nav />
                  {/*Layout for the app using Chakra-UI */}
                  <Grid
                      h="85vh"
                      templateRows="repeat(9, 1fr)"
                      templateColumns="repeat(5, 1fr)"
                      gap={4}
                    >
                      <GridItem rowSpan={9} colSpan={1} bg="transparent" />
                      <GridItem rowSpan={1} colSpan={3} bg="transparent" />
                      <GridItem rowSpan={9} colSpan={1} bg="transparent" />
                      <GridItem rowSpan={7} colSpan={3} bg="transparent"> 
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/signup" component={Signup} />
                                {/* <Route exact path="/orderHistory" component={OrderHistory} />
                                <Route exact path="/products/:id" component={Detail} />
                                <Route exact path="/success" component={Success} />
                                <Route component={NoMatch} /> */}
                            </Switch>
                      
                      </GridItem>
                      <GridItem rowSpan={1} colSpan={3} bg="transparent" />
                    </Grid>
                  
                  {/*Layout for the app using Chakra-UI */}
              </ChakraProvider>
>>>>>>> feature/login-signup
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
