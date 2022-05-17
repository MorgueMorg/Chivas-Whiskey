import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminContext } from "../../contexts/AdminContext";

const EditProductPage = () => {
  const data = React.useContext(adminContext);
  const { getProductToEdit, productToEdit, saveEditedProduct } = data;

  const params = useParams();
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState(productToEdit);

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in editedProduct) {
      let value = editedProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля!");
          return;
        }
      }
    }
    saveEditedProduct(editedProduct);
    navigate("/admin-panel");
  };

  useEffect(() => {
    getProductToEdit(params.id);
  }, []);

  useEffect(() => {
    setEditedProduct(productToEdit);
  }, [productToEdit]);

  if (!editedProduct) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
            value={editedProduct.name}
            label="Title"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                description: e.target.value,
              })
            }
            value={editedProduct.description}
            label="Description"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                price: parseInt(e.target.value),
              })
            }
            value={editedProduct.price}
            label="Price"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, image: e.target.value })
            }
            value={editedProduct.image}
            label="Image"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="fortress-select-label">Fortress</InputLabel>
            <Select
              value={editedProduct.fortress}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, fortress: e.target.value })
              }
              label="Ender fortress"
              labelId="fortress-select-label"
            >
              <MenuItem value="40%">40%</MenuItem>
              <MenuItem value="60%">60%</MenuItem>
              <MenuItem value="80%">80%</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="manufactur-select-label">Manufacturer</InputLabel>
            <Select
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, manufactur: e.target.value })
              }
              value={editedProduct.manufactur}
              label="Enter manufacturer"
              labelId="manufactur-select-label"
            >
              <MenuItem value="Spaceside">Spaceside</MenuItem>
              <MenuItem value="Hilend">Hiland</MenuItem>
              <MenuItem value="Bishkek">Bishkek</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" className="save-btn">
            Save changes
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default EditProductPage;
