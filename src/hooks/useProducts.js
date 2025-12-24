import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/fireconfig';

export const useProducts = (categoryID = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const itemsRef = collection(db, 'items');
        const q = categoryID 
          ? query(itemsRef, where('category', '==', categoryID))
          : itemsRef;

        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setProducts(productsData);
        
        if (productsData.length === 0 && categoryID) {
          setError('No se encontraron productos en esta categoría');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Error al cargar los productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryID]);

  return { products, loading, error };
};

export default useProducts;