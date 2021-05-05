import React from "react";
import Theme from "../../styles/theme";
import useProducts from '../hooks/useProducts';

function Home() {

  const { products, error, loading } = useProducts();

  return (
    <Theme>
      <div style={{background: "green"}}>oi</div>
    </Theme>
  );
}

export default Home;
