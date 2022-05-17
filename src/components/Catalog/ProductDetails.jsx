import { Button, Container, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clientContext } from "../../contexts/ClientContext";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const data = useContext(clientContext);
  const { getProductDetails, productDetails, addFeedback, getProducts, products } = data;
  const params = useParams();
  const [feedbackValue, setFeedbackValue] = useState("");
  const [feedbackUser, setFeedbackUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedback = {
      title: feedbackValue.trim(),
      user: feedbackUser.trim(),
    };

    for (let key in newFeedback) {
      if (!newFeedback[key]) {
        alert("Заполните поля");
        return;
      }
    }

    addFeedback(newFeedback, productDetails);
    setFeedbackValue("");
    setFeedbackUser("");
  };

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  if (!productDetails) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Container>
        <div className="product-details">
          <img src={productDetails.image} alt="" />
          <div>
            <h2>{productDetails.name}</h2>
            <ul>
              <li>
                <strong>Price: </strong>
                {productDetails.price}
              </li>
              <li>
                <strong>Manufacturer: </strong>
                {productDetails.manufacturer}
              </li>
              <li>
                <strong>Fortress: </strong>
                {productDetails.fortress}
              </li>
              <li>
                <strong>Description: </strong>
                {productDetails.description}
              </li>
            </ul>
          </div>
        </div>
        <div className="product-details-feedback">
          <h3>Reviews: </h3>
          <form onSubmit={handleSubmit}>
            <TextField
              value={feedbackUser}
              onChange={(e) => setFeedbackUser(e.target.value)}
              type="text"
              variant="standard"
              label="Enter your name"
              style={{ marginBottom: 15 }}
            />
            <TextField
              value={feedbackValue}
              onChange={(e) => setFeedbackValue(e.target.value)}
              style={{ marginBottom: 15 }}
              label="Enter your feedback"
              type="text"
              multiline
              minRows={2}
              maxRows={5}
            />
            <Button type="submit" variant="contained" className="feedback-btn">
              Add feedback
            </Button>
          </form>
          <div>
            {productDetails.feedBacks?.map((item, index) => (
              <div key={index} className="feedback">
                <h5>{item.user}</h5>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <h2>Recommendations</h2>
          {/* SLICE для вывода ограниченного кол-ва товаров */}
          <div className="recommendations">
            {products
              .map((item, bro) => <ProductCard key={item.id} item={item} />)
              .slice(1, 3)}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
