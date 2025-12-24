import { Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';
import './Item.scss';

const Item = ({ items }) => {
  return (
    <Card className="item-card h-100 shadow-sm">
      <div className="item-image-container">
        <Card.Img 
          variant="top" 
          src={items.img} 
          alt={items.name}
          className="item-image"
        />
        {items.stock === 0 && (
          <Badge bg="danger" className="stock-badge">
            Sin Stock
          </Badge>
        )}
        {items.stock > 0 && items.stock < 5 && (
          <Badge bg="warning" text="dark" className="stock-badge">
            ¡Últimas unidades!
          </Badge>
        )}
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Card.Title className="item-title text-truncate" title={items.name}>
          {items.name}
        </Card.Title>
        
        <Card.Text className="item-description text-muted">
          {items.descript}
        </Card.Text>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="item-price fw-bold text-primary fs-4">
              ${items.price}
            </span>
            {items.shipping && (
              <Badge bg="success" pill>
                Envío: ${items.shipping}
              </Badge>
            )}
          </div>
          
          <Link 
            to={`/item/${items.id}`} 
            className="btn btn-primary w-100"
          >
            Ver detalles
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;