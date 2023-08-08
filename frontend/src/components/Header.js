import React from 'react';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>My App Title</Navbar.Brand>
        <Form inline className="ml-auto">
          <div className="d-flex align-items-center">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </div>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
