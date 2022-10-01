import image from '../../assets/logo.png';
import './Header.scss'
// Bootstrap 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLoginContext } from '../../Context/LoginContext';

export const Header = () => {

     const [dropdownOpen, setDropdownOpen] = useState(false)
     const {user,logout} = useLoginContext()

    const toggle = () => setDropdownOpen(!dropdownOpen)

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
                <Nav.Link href="/#">Inicio</Nav.Link>
                <Nav.Link href="#action2">Contacto</Nav.Link>
                <Dropdown wn='true' nav='true' isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav='true' caret='true' className='btn btn-dark categorias'>
                <span>Categorias</span>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem enabled='true' className='menu-a'> <Link to='/productos/boligrafos' className='link-a'>Boligrafos</Link> </DropdownItem>
                <DropdownItem enabled='true' className='menu-a'> <Link to='/productos/mochilas' className='link-a'>Mochilas</Link> </DropdownItem>
                <DropdownItem enabled='true' className='menu-a'> <Link to='/productos/cuadros' className='link-a'>Cuadros</Link> </DropdownItem>
                </DropdownMenu>
            </Dropdown>
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
            <div className='user-login'>
                <h6>Bienvenido: {user.user}</h6>
                <button onClick={logout} className='btn btn-primary'>Logout</button>
            </div>
        </header>
    )
}