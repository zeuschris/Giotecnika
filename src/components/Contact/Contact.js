import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { BsEnvelope, BsPhone, BsGeoAlt, BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './Contact.scss';

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);
    
    Swal.fire({
      icon: 'success',
      title: '¡Mensaje enviado!',
      text: 'Nos pondremos en contacto contigo pronto.',
      confirmButtonColor: '#667eea'
    });
    reset();
  };

  return (
    <div className="contacto-page">
      <div className="contacto-hero">
        <Container>
          <h1 className="contacto-title">Contáctanos</h1>
          <p className="contacto-subtitle">
            Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos a la brevedad.
          </p>
        </Container>
      </div>

      <Container className="my-5">
        <Row>
          <Col lg={8} className="mb-4">
            <Card className="contacto-form-card shadow-lg">
              <Card.Body className="p-4">
                <h3 className="mb-4">Envíanos un mensaje</h3>
                
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre completo *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Tu nombre"
                          {...register('nombre', {
                            required: 'El nombre es obligatorio',
                            minLength: {
                              value: 3,
                              message: 'El nombre debe tener al menos 3 caracteres'
                            }
                          })}
                          isInvalid={!!errors.nombre}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.nombre?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="tu@email.com"
                          {...register('email', {
                            required: 'El email es obligatorio',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Email inválido'
                            }
                          })}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Tu teléfono"
                          {...register('telefono', {
                            pattern: {
                              value: /^[0-9\s\-\+\(\)]+$/,
                              message: 'Teléfono inválido'
                            }
                          })}
                          isInvalid={!!errors.telefono}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.telefono?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Asunto *</Form.Label>
                        <Form.Select
                          {...register('asunto', {
                            required: 'Selecciona un asunto'
                          })}
                          isInvalid={!!errors.asunto}
                        >
                          <option value="">Selecciona un asunto</option>
                          <option value="consulta">Consulta general</option>
                          <option value="pedido">Consulta sobre pedido</option>
                          <option value="productos">Información de productos</option>
                          <option value="reclamo">Reclamo</option>
                          <option value="sugerencia">Sugerencia</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.asunto?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Mensaje *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Escribe tu mensaje aquí..."
                      {...register('mensaje', {
                        required: 'El mensaje es obligatorio',
                        minLength: {
                          value: 10,
                          message: 'El mensaje debe tener al menos 10 caracteres'
                        }
                      })}
                      isInvalid={!!errors.mensaje}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.mensaje?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit" size="lg" className="w-100">
                    Enviar mensaje
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="contacto-info-card shadow-lg mb-4">
              <Card.Body className="p-4">
                <h4 className="mb-4">Información de contacto</h4>

                <div className="contacto-info-item">
                  <BsGeoAlt className="contacto-icon" />
                  <div>
                    <h6>Dirección</h6>
                    <p>Palermo, Caba, Argentina</p>
                  </div>
                </div>

                <div className="contacto-info-item">
                  <BsPhone className="contacto-icon" />
                  <div>
                    <h6>Teléfono</h6>
                    <p>+54 9 3447 123456</p>
                  </div>
                </div>

                <div className="contacto-info-item">
                  <BsEnvelope className="contacto-icon" />
                  <div>
                    <h6>Email</h6>
                    <p>info@giotecnika.com</p>
                  </div>
                </div>

                <hr className="my-4" />

                <h5 className="mb-3">Síguenos en redes</h5>
                <div className="contacto-social">
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    <BsWhatsapp />
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram />
                  </a>
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                    <BsFacebook />
                  </a>
                </div>
              </Card.Body>
            </Card>

            <Card className="horarios-card shadow-lg">
              <Card.Body className="p-4">
                <h5 className="mb-3">Horarios de atención</h5>
                <p className="mb-2"><strong>Lunes a Viernes:</strong></p>
                <p className="mb-3">10:00 AM - 7:00 PM</p>
                <p className="mb-2"><strong>Sábados:</strong></p>
                <p className="mb-3">9:00 AM - 1:00 PM</p>
                <p className="mb-2"><strong>Domingos:</strong></p>
                <p>Cerrado</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Alert variant="info" className="d-flex align-items-center">
              <BsWhatsapp size={24} className="me-3" />
              <div>
                <strong>¿Necesitas ayuda rápida?</strong> Escríbenos por WhatsApp y te responderemos al instante.
              </div>
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
};