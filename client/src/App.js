import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';

/* import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav"; */
import { StoreProvider } from "./utils/GlobalState";
/* import OrderHistory from "./pages/OrderHistory"; */

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
          <div class="topnav">
              <a class="active" href="#home">Home</a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
          </div>
              <div> 
                  <h1> Lucky day / Fun ideas</h1>
              </div>

              <div> 
                  <h2> Lucky day / Fun ideas</h2>
              </div>

              <div> 
                  <h3> Lucky day / Fun ideas</h3>
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
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
