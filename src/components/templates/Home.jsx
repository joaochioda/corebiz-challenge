import React from "react";
import useProducts from '../hooks/useProducts';
import { CarrouselBanner } from '../molecules/CarrouselBanner';
function Home() {

  const { products, error, loading } = useProducts();

  return (
    <div>
      <CarrouselBanner/>
    </div>
  );
}

export default Home;
