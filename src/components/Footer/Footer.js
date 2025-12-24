import { Container, Row, Col } from 'react-bootstrap';
import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';
import './Footer.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="footer-brand">Giotecnika</h5>
            <p className="footer-tagline">Tu librería de confianza</p>
          </Col>
          
          <Col md={4} className="text-center mb-3 mb-md-0">
            <p className="footer-copyright mb-0">
              © {currentYear} Giotecnika. Todos los derechos reservados.
            </p>
          </Col>
          
          <Col md={4} className="text-center text-md-end">
            <div className="footer-social">
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <BsWhatsapp />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <BsInstagram />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <BsFacebook />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};