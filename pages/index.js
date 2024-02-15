import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';

export default function Home() {
  const [products, setProducts] = useState();

  async function getProducts() {
    const res = await axios.get(`/products/`);
    const nextProduct = res.data.results;
    setProducts(nextProduct);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>Codeitmall</h1>
      <SearchForm />
      <ProductList products={products} />
    </>
  );
}
