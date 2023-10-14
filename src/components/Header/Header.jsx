import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Navbar expand="lg" className="bg-body-secondary">
    <Container>
      <Navbar.Brand as={NavLink} to="/todo-list">
        Todo-List
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/todo-list">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/list-todo">
            Todo List
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
