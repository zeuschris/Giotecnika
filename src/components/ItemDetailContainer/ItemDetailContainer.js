import { useEffect, useState } from "react";
import { useParams, Navigate } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/fireconfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { itemID } = useParams();

  useEffect(() => {
    if (!itemID) {
      setError('ID de producto no válido');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    const docRef = doc(db, 'items', itemID);

    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          setProduct({ id: doc.id, ...doc.data() });
        } else {
          setError('Producto no encontrado');
        }
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        setError('Error al cargar el producto');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemID]);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <div className='loader' />
        <p className="mt-3 text-muted">Cargando detalles del producto...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
        </Alert>
        <Navigate to="/" replace />
      </Container>
    );
  }

  return product ? <ItemDetail prod={product} /> : null;
};

export default ItemDetailContainer;