import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import image from '../../assets/logo.png';
import './Header.scss';

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <header className="header-wrapper">
      <div className="header-top">
        <Container>
          <Link to='/' className="logo-link">
            <img src={image} className='logo' alt='Librería Giotecnika'/>
          </Link>
          <h1 className="header-title">Giotecnika</h1>
        </Container>
      </div>
      
      <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>
                Inicio
              </Nav.Link>
              
              <NavDropdown title="Categorías" id="categories-dropdown">
                <NavDropdown.Item as={Link} to='/productos/boligrafos'>
                  Bolígrafos
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/productos/mochilas'>
                  Mochilas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/productos/cuadros'>
                  Cuadros
                </NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={Link} to='/nosotros'>
                Nosotros
              </Nav.Link>
              
              <Nav.Link as={Link} to='/contacto'>
                Contacto
              </Nav.Link>
            </Nav>
            
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Buscar productos..."
                className="me-2"
                aria-label="Buscar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-warning" type="submit">
                Buscar
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};