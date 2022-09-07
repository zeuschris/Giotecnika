import image from '../../assets/logo.png';
import './Header.scss'
// Bootstrap 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
    return (
        <header className="header">
            <div>
            <a href='/#' rel="noopener noreferrer">
                <img src={image} className='logo' alt='logo'></img>
            </a>
            </div>
            <Navbar bg="dark" variant="dark" expand="lg" className="menu">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Contacto</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/productos/mochilas">Mochilas</NavDropdown.Item>
              <NavDropdown.Item href="/productos/boligrafos">Boligrafos</NavDropdown.Item>
              <NavDropdown.Item href="/productos/cuadros">Cuadros</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Nosotros</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <main>
                <h1 className='main-title'>Productos</h1>
            </main>
        </header>
    )
}


