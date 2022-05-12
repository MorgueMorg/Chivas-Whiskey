import { Container } from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import FiltersBlock from "../components/FiltersBlock";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClientContext";

const Catalog = () => {
  const data = useContext(clientContext);
  const { getProducts, products } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <div>
          <FiltersBlock getProducts={getProducts} />
        </div>
        <div className="products-list">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <MyPagination />
      </Container>
    </div>
  );
};

export default Catalog;
