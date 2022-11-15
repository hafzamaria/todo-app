import React from 'react'
import { Nav,Navbar,Container,Form,Button} from 'react-bootstrap';
// import { propTypes ,deafultProps} from 'react-bootstrap/esm/Image';
const Headers = (props) => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
           
           
            <Nav.Link href="#action1">About</Nav.Link>
          </Nav>
          {props.searchBar?
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>:''}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
// Headers.deafultProps={
//     title:'Your Title Here'
// }

// Headers.propTypes={
//     title:propTypes.string
// }

export default Headers
