import React from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

 


const Navcom = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Crud <b>React</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className=" d-flex justify-content-between">
            <Nav className="me-auto my-2 my-lg-0  " style={{ maxHeight: "100px", }}navbarScroll>
              <Link to="/" className="text-decoration-none text-dark">Home</Link>
              <Link to="/add" className="text-decoration-none mx-2 text-dark">Tambah Data</Link>


            </Nav>
            <Form className="d-flex">
              <FormControl type="search"placeholder="Search" className="me-2"aria-label="Search"/>
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navcom;
