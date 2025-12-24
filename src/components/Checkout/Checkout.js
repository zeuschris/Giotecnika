import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button, Alert, ListGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/fireconfig';
import { useCartContext } from "../../Context/CartContext";
import './Checkout.scss';

export const Checkout = () => {
  const { cart, cartTotal, endBuy } = useCartContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const email = watch('email');

  const onSubmit = async (data) => {
    setLoading(true);

    const orden = {
      comprador: {
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        telefono: data.telefono,
        direccion: data.direccion
      },
      items: cart,
      total: cartTotal(),
      fecha: new Date().toISOString()
    };

    try {
      const ordenesRef = collection(db, 'ordenes');
      const doc = await addDoc(ordenesRef, orden);
      endBuy(doc.id);
    } catch (error) {
      console.error('Error al crear la orden:', error);
      alert('Hubo un error al procesar tu compra. Por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container className="checkout-container my-5">
      <h2 className="checkout-title mb-4">Finalizar Compra</h2>
      
      <Row>
        <Col lg={7}>
          <Card className="checkout-form-card">
            <Card.Body>
              <Card.Title className="mb-4">Datos de contacto</Card.Title>
              
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre *</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribe tu nombre"
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
                      <Form.Label>Apellido *</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribe tu apellido"
                        {...register('apellido', {
                          required: 'El apellido es obligatorio',
                          minLength: {
                            value: 3,
                            message: 'El apellido debe tener al menos 3 caracteres'
                          }
                        })}
                        isInvalid={!!errors.apellido}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.apellido?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Escribe tu email"
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

                <Form.Group className="mb-3">
                  <Form.Label>Confirmar Email *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Confirma tu email"
                    {...register('emailConfirm', {
                      required: 'Debes confirmar el email',
                      validate: (value) =>
                        value === email || 'Los emails no coinciden'
                    })}
                    isInvalid={!!errors.emailConfirm}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.emailConfirm?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Teléfono *</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="10 dígitos"
                    {...register('telefono', {
                      required: 'El teléfono es obligatorio',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'El teléfono debe tener 10 dígitos'
                      }
                    })}
                    isInvalid={!!errors.telefono}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.telefono?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Dirección de envío *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Calle, número, ciudad, provincia"
                    {...register('direccion', {
                      required: 'La dirección es obligatoria',
                      minLength: {
                        value: 5,
                        message: 'La dirección debe tener al menos 5 caracteres'
                      }
                    })}
                    isInvalid={!!errors.direccion}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.direccion?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg"
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? 'Procesando...' : 'Confirmar compra'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={5}>
          <Card className="checkout-summary">
            <Card.Body>
              <Card.Title className="mb-4">Resumen del pedido</Card.Title>
              
              <ListGroup variant="flush" className="mb-3">
                {cart.map((item) => (
                  <ListGroup.Item key={item.id} className="px-0">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="fw-bold">{item.nombre}</div>
                        <small className="text-muted">
                          Cantidad: {item.cantidad}
                        </small>
                      </div>
                      <div className="text-end">
                        <div>${item.precio * item.cantidad}</div>
                        {item.envio > 0 && (
                          <small className="text-success">
                            +${item.envio} envío
                          </small>
                        )}
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-3">
                <h5>Total</h5>
                <h5 className="text-primary">${cartTotal()}</h5>
              </div>
              
              <Alert variant="info" className="mb-0">
                <small>
                  Recibirás un email de confirmación una vez procesado el pedido.
                </small>
              </Alert>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};