import { Row, Col, Alert } from 'react-bootstrap';
import Item from '../Item/Item';

const ItemList = ({ productos = [] }) => {
  if (productos.length === 0) {
    return (
      <Alert variant="info" className="text-center">
        <Alert.Heading>No hay productos disponibles</Alert.Heading>
        <p>Vuelve pronto para ver nuevos productos.</p>
      </Alert>
    );
  }

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {productos.map((element) => (
        <Col key={element.id}>
          <Item items={element} />
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;