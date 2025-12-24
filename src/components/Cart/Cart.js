import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, ListGroup, Badge, Image } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { BsCartX } from 'react-icons/bs';
import { useCartContext } from "../../Context/CartContext";
import './Cart.scss';

export const Cart = () => {
  const { cart, cartTotal, emptyCart, removeItem } = useCartContext();

  if (cart.length === 0) {
    return (
      <Container className="cart-empty text-center my-5">
        <BsCartX size={100} className="text-muted mb-4" />
        <h2 className="mb-3">Tu carrito está vacío</h2>
        <p className="text-muted mb-4">
          Agrega productos para comenzar a comprar
        </p>
        <Link to='/' className='btn btn-primary btn-lg'>
          Ir al catálogo
        </Link>
      </Container>
    );
  }

  return (
    <Container className="cart-container my-5">
      <h1 className="cart-title mb-4">Tu Carrito</h1>
      
      <Row>
        <Col lg={8}>
          <ListGroup variant="flush">
            {cart.map((item) => (
              <ListGroup.Item key={item.id} className="cart-item p-3">
                <Row className="align-items-center">
                  <Col xs={3} md={2}>
                    <Image 
                      src={item.imagen} 
                      alt={item.nombre}
                      rounded
                      fluid
                      className="cart-item-image"
                    />
                  </Col>
                  
                  <Col xs={9} md={4}>
                    <h5 className="mb-1">{item.nombre}</h5>
                    <Badge bg="secondary">Cantidad: {item.cantidad}</Badge>
                  </Col>
                  
                  <Col xs={6} md={3} className="mt-3 mt-md-0">
                    <div>
                      <small className="text-muted">Precio</small>
                      <p className="mb-0 fw-bold">${item.precio}</p>
                    </div>
                    {item.envio > 0 && (
                      <div>
                        <small className="text-muted">Envío</small>
                        <p className="mb-0 text-success">${item.envio}</p>
                      </div>
                    )}
                  </Col>
                  
                  <Col xs={6} md={3} className="text-end mt-3 mt-md-0">
                    <div className="mb-2">
                      <small className="text-muted">Subtotal</small>
                      <h5 className="text-primary mb-0">
                        ${item.cantidad * item.precio + parseInt(item.envio)}
                      </h5>
                    </div>
                    <Button 
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="delete-btn"
                    >
                      <AiFillDelete /> Eliminar
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        
        <Col lg={4}>
          <Card className="cart-summary sticky-top">
            <Card.Body>
              <Card.Title className="mb-4">Resumen de compra</Card.Title>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Productos ({cart.length})</span>
                <span className="fw-bold">${cartTotal()}</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-4">
                <h5>Total</h5>
                <h5 className="text-primary">${cartTotal()}</h5>
              </div>
              
              <Link 
                to='/checkout' 
                className="btn btn-primary w-100 mb-2"
              >
                Finalizar compra
              </Link>
              
              {cart.length >= 2 && (
                <Button 
                  variant="outline-secondary" 
                  className="w-100"
                  onClick={emptyCart}
                >
                  Vaciar carrito
                </Button>
              )}
              
              <Link 
                to='/' 
                className="btn btn-link w-100 mt-2"
              >
                Continuar comprando
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};