import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Badge, ListGroup, Button, Container } from 'react-bootstrap';
import { Count } from '../ItemCount/ItemCount';
import { useCartContext } from '../../Context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ItemDetail.scss';

const ItemDetail = ({ prod }) => {
  const [cantidad, setCantidad] = useState(1);
  const { addCart, inCart } = useCartContext();

  const handleCart = () => {
    if (cantidad <= prod.stock) {
      const prodInCart = {
        id: prod.id,
        nombre: prod.name,
        precio: prod.price,
        imagen: prod.img,
        envio: prod.shipping || 0,
        cantidad: cantidad
      };
      
      addCart(prodInCart);
      
      toast.success(`Se añadieron ${cantidad} producto(s) al carrito`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <Container className="my-5">
      <Card className="item-detail-card shadow-lg">
        <Row className="g-0">
          <Col md={6} className="position-relative">
            <div className="detail-image-container">
              <Card.Img 
                src={prod.img} 
                alt={prod.name}
                className="detail-image"
              />
              {prod.stock === 0 && (
                <Badge bg="danger" className="detail-stock-badge">
                  Sin Stock
                </Badge>
              )}
            </div>
          </Col>
          
          <Col md={6}>
            <Card.Body className="detail-body">
              <div className="mb-4">
                <Badge bg="secondary" className="mb-2">
                  {prod.category}
                </Badge>
                <Card.Title className="detail-title">
                  {prod.name}
                </Card.Title>
              </div>

              <ListGroup variant="flush" className="mb-4">
                {prod.gender && (
                  <ListGroup.Item className="detail-list-item">
                    <strong>Género:</strong> {prod.gender}
                  </ListGroup.Item>
                )}
                {prod.material && (
                  <ListGroup.Item className="detail-list-item">
                    <strong>Material:</strong> {prod.material}
                  </ListGroup.Item>
                )}
                {prod.warranty && (
                  <ListGroup.Item className="detail-list-item">
                    <strong>Garantía:</strong> {prod.warranty}
                  </ListGroup.Item>
                )}
                <ListGroup.Item className="detail-list-item">
                  <strong>Stock disponible:</strong>{' '}
                  <Badge bg={prod.stock > 5 ? 'success' : 'warning'}>
                    {prod.stock} unidades
                  </Badge>
                </ListGroup.Item>
                {prod.talle && (
                  <ListGroup.Item className="detail-list-item">
                    <strong>Talle:</strong> {prod.talle}
                  </ListGroup.Item>
                )}
                {prod.case && (
                  <ListGroup.Item className="detail-list-item">
                    <strong>Estuche:</strong> {prod.case}
                  </ListGroup.Item>
                )}
              </ListGroup>

              <div className="detail-price-section mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <small className="text-muted">Precio</small>
                    <h2 className="detail-price mb-0">${prod.price}</h2>
                  </div>
                  {prod.shipping && (
                    <Badge bg="info" pill className="shipping-badge">
                      Envío: ${prod.shipping}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="detail-actions">
                <Link to='/' className="btn btn-outline-secondary mb-3 w-100">
                  ← Volver al catálogo
                </Link>

                {inCart(prod.id) ? (
                  <Link to="/cart" className='btn btn-success w-100 mb-2'>
                    Ir al carrito
                  </Link>
                ) : prod.stock > 0 ? (
                  <Count
                    max={prod.stock}
                    counter={cantidad}
                    setCounter={setCantidad}
                    handleCart={handleCart}
                  />
                ) : (
                  <Button variant="danger" disabled className="w-100">
                    Producto sin stock
                  </Button>
                )}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default ItemDetail;