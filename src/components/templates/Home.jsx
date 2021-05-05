import React from "react";
import useProducts from '../hooks/useProducts';
import { CarrouselBanner } from '../molecules/CarrouselBanner';
import { Newsletter } from '../molecules/Newsletter';


function Home() {

  const { products, error, loading } = useProducts();

  return (
    <div>
      <CarrouselBanner/>
      <Newsletter />
    </div>
  );
}

export default Home;
