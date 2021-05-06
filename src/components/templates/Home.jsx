import React from "react";
import useProducts from '../hooks/useProducts';
import { CarrouselBanner } from '../molecules/CarrouselBanner';
import { CarrouselProducts } from '../molecules/CarrouselProducts';
import { Newsletter } from '../molecules/Newsletter';


function Home() {

  const { products, error, loading } = useProducts();
  return (
    <div>
      <CarrouselBanner/>
      <CarrouselProducts products={products} loading={loading}/>
      <Newsletter />
    </div>
  );
}

export default Home;
