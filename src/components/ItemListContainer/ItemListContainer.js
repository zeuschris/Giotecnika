import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/fireconfig';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.scss';

const ItemListContainer = () => {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryID } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const itemsRef = collection(db, 'items');
    const q = categoryID 
      ? query(itemsRef, where('category', '==', categoryID))
      : itemsRef;

    getDocs(q)
      .then((resp) => {
        const productosDB = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setStock(productosDB);
        
        if (productosDB.length === 0 && categoryID) {
          setError('No se encontraron productos en esta categoría');
        }
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError('Error al cargar los productos. Por favor, intenta nuevamente.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryID]);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <div className="loader" />
        <p className="mt-3 text-muted">Cargando productos...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="warning">
          <Alert.Heading>Atención</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      {categoryID && (
        <h2 className="category-title mb-4">
          Categoría: <span className="text-primary">{categoryID}</span>
        </h2>
      )}
      <ItemList productos={stock} />
    </Container>
  );
};

export default ItemListContainer;