import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Container, Alert, Badge } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/fireconfig';
import ItemList from '../ItemList/ItemList';
import './SearchResults.scss';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchProducts = async () => {
      setLoading(true);
      
      try {
        const itemsRef = collection(db, 'items');
        const querySnapshot = await getDocs(itemsRef);
        
        const allProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        const searchTerm = query.toLowerCase();
        const filteredProducts = allProducts.filter((product) => {
          const name = (product.name || '').toLowerCase();
          const descript = (product.descript || '').toLowerCase();
          const category = (product.category || '').toLowerCase();
          
          return name.includes(searchTerm) || 
                 descript.includes(searchTerm) || 
                 category.includes(searchTerm);
        });
        
        setResults(filteredProducts);
      } catch (error) {
        console.error('Error searching products:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      searchProducts();
    } else {
      setLoading(false);
    }
  }, [query]);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <div className="loader" />
        <p className="mt-3 text-muted">Buscando productos...</p>
      </Container>
    );
  }

  if (!query) {
    return (
      <Container className="my-5">
        <Alert variant="warning">
          <Alert.Heading>Búsqueda vacía</Alert.Heading>
          <p>Por favor ingresa un término de búsqueda.</p>
          <Link to="/" className="btn btn-primary">
            Volver al inicio
          </Link>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="search-results-page my-5">
      <div className="search-header mb-4">
        <h2>
          Resultados de búsqueda para: <Badge bg="primary">{query}</Badge>
        </h2>
        <p className="text-muted">
          {results.length === 0 
            ? 'No se encontraron productos' 
            : `${results.length} producto${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''}`
          }
        </p>
      </div>

      {results.length === 0 ? (
        <Alert variant="info">
          <Alert.Heading>Sin resultados</Alert.Heading>
          <p>No encontramos productos que coincidan con "{query}".</p>
          <hr />
          <p className="mb-0">
            Intenta con otros términos o{' '}
            <Link to="/">explora todo nuestro catálogo</Link>.
          </p>
        </Alert>
      ) : (
        <ItemList productos={results} />
      )}
    </Container>
  );
};

export default SearchResults;