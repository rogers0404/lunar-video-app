
import React from "react";
import { Box, Heading, Flex, Text, Button, Link } from "@chakra-ui/react";
import "./Nav.css";
import Auth from "../../utils/auth"

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Nav = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bgGradient="linear(to-r,blue.900,gray.500,blue.900)"
      color="white"
      borderRadius="sm"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="2xl" letterSpacing={"-.1rem"} >
        <Link href="/">  
        Lunar⚕️Doctor
        </Link>
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems className="active" >
        {
          Auth.loggedIn() ?
              <Link href="/myAppointment">My Appointment</Link>
                :
                null
        }
        </MenuItems>

        <MenuItems>
        {
          Auth.loggedIn() ?
          <Link href="/schedule">Schedule a Video Call</Link>
            :
          <Link href="/">Schedule a Video Call</Link>
        }
        </MenuItems>

        <MenuItems>
        {
          Auth.loggedIn() ?
          <Link href="/">Sign up</Link>
            :
          <Link href="/signup">Sign up</Link>
        }
        </MenuItems>
        
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
        {
          Auth.loggedIn() ?
            <Link href="/logout" onClick={() => Auth.logout()} bg="transparent">Logout</Link>
            :
            <Link href="/login" bg="transparent">Log In</Link>
        }
        </Button>
      </Box>
    </Flex>
  );
};

export default Nav;


// import React from "react"
// import { Box, Text } from "@chakra-ui/react"
// import "./Nav.css";
// import Auth from "../../utils/auth"

// export default function Logo(props) {
//   return (
//     <Box {...props}>
//       <Text fontSize="lg" fontWeight="bold">
//         Logo
//       </Text>
//     </Box>
//   )
// }


// function Nav() {
//  return (
     
//     <div className="topnav">

            
            
//           <a href="#contact">Contact</a>
//           <a href="#about">About</a>
//         </div>
//         )
//     }
// export default Nav