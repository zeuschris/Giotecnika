import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsAward, BsHeart, BsTruck, BsShieldCheck } from 'react-icons/bs';
import './About.scss';

export const About = () => {
  return (
    <div className="nosotros-page">
      <div className="nosotros-hero">
        <Container>
          <h1 className="nosotros-title">Sobre Nosotros</h1>
          <p className="nosotros-subtitle">
            Tu librería de confianza desde hace más de 10 años
          </p>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="nosotros-image">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800"
                alt="Nuestra librería"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="nosotros-content">
              <h2 className="section-title">Nuestra Historia</h2>
              <p className="section-text">
                Librería Giotecnika nació en 2013 con la misión de brindar productos de calidad
                para estudiantes, profesionales y artistas en Colón, Entre Ríos.
              </p>
              <p className="section-text">
                Lo que comenzó como un pequeño local familiar, hoy se ha convertido en un
                referente en artículos de librería, con presencia tanto física como online,
                llegando a clientes de toda la región.
              </p>
              <p className="section-text">
                Nos enorgullece ser parte del crecimiento educativo y creativo de nuestra
                comunidad, ofreciendo siempre lo mejor en materiales escolares, oficina y arte.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Card className="valores-card h-100 shadow-lg">
              <Card.Body className="p-4">
                <div className="valores-icon-wrapper mb-3">
                  <BsAward className="valores-icon" />
                </div>
                <h3 className="valores-title">Nuestra Misión</h3>
                <p className="valores-text">
                  Proveer productos de librería de la más alta calidad, con un servicio
                  personalizado que supere las expectativas de nuestros clientes, contribuyendo
                  al desarrollo educativo y profesional de la comunidad.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="valores-card h-100 shadow-lg">
              <Card.Body className="p-4">
                <div className="valores-icon-wrapper mb-3">
                  <BsHeart className="valores-icon" />
                </div>
                <h3 className="valores-title">Nuestra Visión</h3>
                <p className="valores-text">
                  Ser la librería líder en la región, reconocida por nuestra excelencia en
                  productos, innovación en servicios y compromiso con el crecimiento de cada
                  cliente, expandiendo nuestra presencia digital.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="mb-5">
          <h2 className="section-title text-center mb-4">Nuestros Valores</h2>
          <Row>
            <Col md={3} sm={6} className="mb-4">
              <Card className="valor-item text-center h-100 shadow">
                <Card.Body className="p-4">
                  <div className="valor-icon-wrapper mb-3">
                    <BsShieldCheck className="valor-icon" />
                  </div>
                  <h5 className="valor-title">Calidad</h5>
                  <p className="valor-description">
                    Productos seleccionados de las mejores marcas
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Card className="valor-item text-center h-100 shadow">
                <Card.Body className="p-4">
                  <div className="valor-icon-wrapper mb-3">
                    <BsHeart className="valor-icon" />
                  </div>
                  <h5 className="valor-title">Compromiso</h5>
                  <p className="valor-description">
                    Con cada cliente y su satisfacción
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Card className="valor-item text-center h-100 shadow">
                <Card.Body className="p-4">
                  <div className="valor-icon-wrapper mb-3">
                    <BsTruck className="valor-icon" />
                  </div>
                  <h5 className="valor-title">Rapidez</h5>
                  <p className="valor-description">
                    Entregas ágiles y puntuales
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Card className="valor-item text-center h-100 shadow">
                <Card.Body className="p-4">
                  <div className="valor-icon-wrapper mb-3">
                    <BsAward className="valor-icon" />
                  </div>
                  <h5 className="valor-title">Excelencia</h5>
                  <p className="valor-description">
                    En cada detalle del servicio
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <Row className="estadisticas-section text-center mb-5">
          <Col md={3} sm={6} className="mb-4">
            <div className="estadistica-item">
              <h2 className="estadistica-numero">10+</h2>
              <p className="estadistica-label">Años de experiencia</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <div className="estadistica-item">
              <h2 className="estadistica-numero">5000+</h2>
              <p className="estadistica-label">Clientes satisfechos</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <div className="estadistica-item">
              <h2 className="estadistica-numero">500+</h2>
              <p className="estadistica-label">Productos disponibles</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <div className="estadistica-item">
              <h2 className="estadistica-numero">100%</h2>
              <p className="estadistica-label">Dedicación</p>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <Card className="cta-card shadow-lg">
              <Card.Body className="p-5 text-center">
                <h3 className="cta-title mb-3">¿Listo para comenzar?</h3>
                <p className="cta-text mb-4">
                  Visita nuestro catálogo y descubre todo lo que tenemos para ofrecerte
                </p>
                <a href="/" className="btn btn-primary btn-lg">
                  Ver productos
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};