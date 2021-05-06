import axios from "axios";
import { useState, useEffect } from "react";

export default function useProducts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "https://corebiz-test.herokuapp.com/api/v1/products",
    })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { error, loading, products };
}
