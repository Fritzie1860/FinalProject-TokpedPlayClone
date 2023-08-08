// import React from 'react';
// import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';

// const Header = () => {
//   return (
//     <Navbar bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand>My App Title</Navbar.Brand>
//         <Form inline="true" className="ml-auto">
//           <div className="d-flex align-items-center">
//             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//             <Button variant="outline-light">Search</Button>
//           </div>
//         </Form>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import imagePath from "../assets/logo.png";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="navbar bg-white shadow navbar-expand-lg fixed-top banner--stick"
    >
      <Container>
        <Navbar.Brand href="#">
          <img src={imagePath} alt="Logo" />
        </Navbar.Brand>
        <Form inline className="ml-auto">
          <input
            type="text"
            placeholder="Search something"
            style={{
              border: "none",
              borderBottom: "1px solid #ccc",
              padding: "5px 0",
              marginRight: "10px",
              outline: "none",
              width: "70%",
            }}
          />
          <Button
            variant="link"
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <BsSearch />
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
